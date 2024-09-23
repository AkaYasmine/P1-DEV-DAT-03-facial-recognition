from deepface import DeepFace
from deepface.modules.verification import find_distance
import os
import cv2
import sys
import pickle
import cvzone
import time

cap = cv2.VideoCapture("/dev/video5")
start_time = time.time()
frame_count = 0 
detected_faces = []

model_name = "Facenet512"
metrics = [{"cosine": 0.30}, {"euclidean": 20.0}, {"euclidean_12": 0.78}]

fourcc = cv2.VideoWriter_fourcc(*"mp4v")
ret, frame = cap.read()
if ret:
    frame_width = frame.shape[1]
    frame_height = frame.shape[0]
    out = cv2.VideoWriter("output.mp4", fourcc, 20.0, (frame_width, frame_height))
else:
    print("Error: Unable to read video frame.")
    sys.exit(0)

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

while True:
    new_frame_time = time.time()
    ret, frame = cap.read()
    
    if not ret:
        print("Error: Frame not read successfully")
        break
    
    fps, start_time = calculate_fps(start_time)

    if frame_count % 5 == 0:
        detected_faces = []
        try:
            results = DeepFace.extract_faces(frame, detector_backend="yolov8", enforce_detection=False)
            for result in results:
                if result["confidence"] >= 0.9:
                    x, y, w, h = result["facial_area"].values()

                    cropped_face = frame[y:y+h, x:x+w]
                    cropped_face_resized = cv2.resize(cropped_face, (224, 224))
                    cropped_face_gray = cv2.cvtColor(cropped_face_resized, cv2.COLOR_BGR2GRAY)
                    cropped_face_norm = clahe(cropped_face_gray)
                    cropped_face_gray = cv2.cvtColor(cropped_face_norm, cv2.COLOR_GRAY2RGB)

                    try:
                        emb = DeepFace.represent(cropped_face_gray, model_name=model_name, enforce_detection=False, detector_backend="skip")[0]["embedding"]
                    except Exception as e:
                        print(f"Error representing face: {e}")
                        continue

                    min_dist = float("inf")
                    match_name = None
                    
                    for name, emb2 in embs.items():
                        dst = find_distance(emb, emb2, list(metrics[1].keys())[0])
                        if dst < min_dist:
                            min_dist = dst
                            match_name = name

                    if min_dist > list(metrics[2].values())[0]:
                        detected_faces.append((x, y, x+w, y+h, match_name, min_dist, (0, 255, 0)))                
                    else:
                        detected_faces.append((x, y, x+w, y+h, "Inconnu", min_dist, (0, 255, 0)))

        except Exception as e:
            print(f"Error extracting faces: {e}")

    for x1, y1, x2, y2, match_name, min_dist, color in detected_faces:
        cv2.rectangle(frame, (x1, y1), (x2, y2), color, 1)
        cvzone.putTextRect(frame, f"{match_name} {min_dist:.2f}", (x1 + 10, y1 - 12), scale=1.5, thickness=2, colorR=color)
    
    cvzone.putTextRect(frame, f"FPS: {fps:.2f}", (10, 30), scale=1, thickness=2, colorR=(255, 255, 255))
    
    cv2.imshow("frame", frame)
    out.write(frame)
    
    frame_count += 1
    
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
out.release()
cv2.destroyAllWindows()
