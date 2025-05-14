from fastapi import FastAPI
from tensorflow.keras.models import load_model

app = FastAPI()

try:
    loaded_best_model = load_model("best_vgg_model.h5")
    print(f"Model loaded successfully from 'best_vgg_model.h5'")
except Exception as e:
    print(f"Error loading model: {e}")
    exit()