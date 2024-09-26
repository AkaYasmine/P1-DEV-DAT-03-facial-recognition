from deepface import DeepFace
from deepface.modules.verification import find_distance
import pandas as pd
from pandas import Timestamp
import os
import cv2
import sys
import pickle
import cvzone 
import time 
from datetime import datetime
import csv

# ls /dev/video*(verifier le les appareils de videos depuis la ligne de commande)


cap = cv2.VideoCapture("/dev/video0")
if not cap.isOpened():
    print("Error: Unable to access the camera.")
    sys.exit(0)


fps = 0
start_time = time.time()
frame_count = 0 
detected_faces = []
COL_NAMES=['nom','date','heure']
last_detection_time = 0

model_name = "Facenet512"
metrics = [{"cosine": 0.30}, {"euclidean": 20.0}, {"euclidean_12": 0.78}]


try:
    with open("./embeddings/embs_facenet512.pkl", "rb") as file:
        embs = pickle.load(file)
        print("Existing embeddings file loaded successfully.")
except FileNotFoundError:
    print("No existing embedding file found. Check your path.")
    sys.exit(0)

def calculate_fps(start_time):
    current_time = time.time()
    fps = 1.0 / (current_time - start_time)
    start_time = current_time
    return fps, start_time

def clahe(image):
    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
    return clahe.apply(image)

def save_attendance(name):
    date = datetime.now().strftime("%d-%m-%Y")
    timestamp = datetime.now().strftime("%H:%M:%S")
    file_path = f"Pointage/pointage_{date}.csv"
    exists = os.path.isfile(file_path)
    
    with open(file_path, "a", newline='') as csvfile:
        writer = csv.writer(csvfile)
        if not exists:
            writer.writerow(COL_NAMES)  # Write header if file doesn't exist
        writer.writerow([name, date, timestamp])

recognized_names = set()  # Track recognized individuals


while True:
    new_frame_time = time.time()
    ret, frame = cap.read()
    
    if not ret:
        print("Error: Frame not read successfully")
        break
    
    # fps, start_time = calculate_fps(start_time)
    
    if frame_count % 5 == 0:
        detected_faces = []
        results = DeepFace.extract_faces(frame, detector_backend="yolov8", enforce_detection=False)
        
        for result in results:
            if result["confidence"] >= 0.8:
                x = result["facial_area"]["x"]
                y = result["facial_area"]["y"]
                w = result["facial_area"]["w"]
                h = result["facial_area"]["h"]
                
                x1 = x
                y1 = y
                x2 = x + w
                y2 = y + h

                cropped_face = frame[y:y + h, x:x + w]
                cropped_face_resized = cv2.resize(cropped_face, (224, 224))

                if cropped_face_resized is None or cropped_face_resized.size == 0:
                    print("Error: Cropped face could not be read.")
                    continue

                print("Dimensions de l'image découpée :", cropped_face_resized.shape)

                try:
                    cropped_face_gray = cv2.cvtColor(cropped_face_resized, cv2.COLOR_BGR2GRAY)
                except cv2.error as e:
                    print("Error during color conversion:", e)
                    continue

                cropped_face_norm = clahe(cropped_face_gray)
                cropped_face_gray = cv2.cvtColor(cropped_face_norm, cv2.COLOR_GRAY2RGB)

                emb = DeepFace.represent(cropped_face_gray, model_name=model_name, enforce_detection=False, detector_backend="skip")[0]["embedding"]
                
                min_dist = float("inf")
                match_name = None
                
                for name, emb2 in embs.items():
                    dst = find_distance(emb, emb2, list(metrics[1].keys())[0])
                    if dst < min_dist:
                        min_dist = dst  # Update minimum distance
                        match_name = name

                if min_dist > list(metrics[2].values())[0]:
                    detected_faces.append((x1, y1, x2, y2, match_name, min_dist, (0, 255, 0)))
                    if match_name not in recognized_names:
                     recognized_names.add(match_name)
                     save_attendance(match_name)
                else:
                    detected_faces.append((x1, y1, x2, y2, "Inconnu", min_dist, (0, 0, 255)))  # Change color for unknown

        last_detection_time = frame_count
        
    for x1, y1, x2, y2, match_name, min_dist, color in detected_faces:
        cv2.rectangle(frame, (x1, y1), (x2, y2), color, 1)
        cvzone.putTextRect(frame, f"{match_name} {min_dist:.2f}", (x1 + 10, y1 - 12), scale=1.5, thickness=2, colorR=color)
     
    cv2.imshow("frame", frame)
    k = cv2.waitKey(1)
    # out.write(frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
         break
    
cap.release()
# out.release()
cv2.destroyAllWindows()
