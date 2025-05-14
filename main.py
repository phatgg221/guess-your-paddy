
from fastapi import FastAPI, UploadFile, File
# from tensorflow.keras.models import load_model
# from PIL import Image
# import numpy as np
# import io

app = FastAPI()
# model = load_model("best_vgg_model.h5")

# def preprocess_image(image_bytes):
#     image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
#     image = image.resize((128, 128))  # Change size if needed
#     img_array = np.array(image) / 255.0
#     return np.expand_dims(img_array, axis=0)

@app.get("/get")
def read_root():
    return {"Hello": "World"}

# @app.post("/predict")
# async def predict(file: UploadFile = File(...)):
#     contents = await file.read()
#     input_tensor = preprocess_image(contents)
#     prediction = model.predict(input_tensor)
#     return {"prediction": prediction.tolist()}
