from deepface import DeepFace
import os
from tqdm import tqdm
import cv2 
import matplotlib.pyplot as plt
import numpy as np

def crop(input_dir, output_dir, detector_backend="yolov8"):
    os.makedirs(output_dir, exist_ok=True)
    
    for img_file in tqdm(os.listdir(input_dir)):
        img_path = os.path.join(input_dir, img_file)
        img_name = img_file.split(".")[0]
        
        try:
            face = DeepFace.extract_faces(
                img_path,
                detector_backend=detector_backend,
                enforce_detection=True,
                grayscale=True
            )[0]["face"]

            # Check the data type of the face image
            if face.dtype != np.uint8:
                face = (face * 255).astype(np.uint8)  # Convert to uint8 if needed
            
            # Ensure the face is in RGB format before resizing
            face = cv2.cvtColor(face, cv2.COLOR_GRAY2RGB)
            face = cv2.resize(face, (224, 224))
            plt.imsave(f"{output_dir}/{img_name}.jpg", face)
        
        except Exception as e:
            print(f"Error processing {img_file}: {e}")
            continue  # Skip this image

crop("./dataset", "./cropped-faces")
