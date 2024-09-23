from deepface import DeepFace
import os 
from tqdm import tqdm
import pickle 
import cv2 
import matplotlib.pyplot as plt 
import numpy as np 

model_name = "Facenet512"

# NORMALIZATION
def clahe(image):
    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))  # Fixed tileGridSize
    return clahe.apply(image)

def extract_embedding(input_dir, output_dir, emb_file, norm_dir, model_name=model_name):
    os.makedirs(output_dir, exist_ok=True)
    os.makedirs(norm_dir, exist_ok=True)
    
    try:
        with open(f"./{output_dir}/{emb_file}", "rb") as file:
            embs = pickle.load(file)
            print("Existing embeddings file loaded successfully.")
            print(embs.keys())
    except FileNotFoundError:
        embs = {}
        print("No existing embeddings file found. Creating a new one.")
        
    for img_file in tqdm(os.listdir(input_dir)):
        img_path = os.path.join(input_dir, img_file)
        img_name = img_file.split(".")[0]
        
        if img_name not in embs:
            face = cv2.imread(img_path, cv2.IMREAD_GRAYSCALE)
        
            face_norm = clahe(face)
            face_norm = cv2.cvtColor(face_norm, cv2.COLOR_GRAY2RGB)
            
            plt.imsave(f"./{norm_dir}/{img_name}.jpg", face_norm)
            emb = DeepFace.represent(
                face_norm,
                model_name=model_name,
                enforce_detection=False,
                detector_backend="skip",
            )
            emb = emb[0]["embedding"]
            embs[img_name] = emb  # Corrected to save the embedding
            
    with open(f"./{output_dir}/{emb_file}", "wb") as file:
        pickle.dump(embs, file)
        print("Embeddings updated and saved.")
        print(embs.keys())
        
extract_embedding(
    input_dir="./cropped-faces",
    output_dir="./embeddings",
    emb_file="embs_facenet512.pkl",
    norm_dir="./norm_faces",
)
