import io

import numpy as np
import PIL.Image

from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
import tensorflow as tf
from fastapi.responses import JSONResponse


models = {
    "apple":tf.keras.models.load_model('../models/trained_model_apple.keras'),
    "banana":tf.keras.models.load_model('../models/trained_model_banana.keras'),
    "bean":tf.keras.models.load_model('../models/trained_model_bean.keras'),
    "cauliflower":tf.keras.models.load_model('../models/trained_model_cauliflower.keras'),
    "citrus":tf.keras.models.load_model('../models/trained_model_citrus.keras'),
    "corn":tf.keras.models.load_model('../models/trained_model_corn.keras'),
    "grape":tf.keras.models.load_model('../models/trained_model_grape.keras'),
    "coffee":tf.keras.models.load_model('../models/trained_model_coffee.keras'),
    "hops":tf.keras.models.load_model('../models/trained_model_hops.keras'),
    "potato":tf.keras.models.load_model('../models/trained_model_potato.keras'),
    "rice":tf.keras.models.load_model('../models/trained_model_rice.keras'),
    "strawberry":tf.keras.models.load_model('../models/trained_model_strawberry.keras'),
    "sunflower":tf.keras.models.load_model('../models/trained_model_sunflower.keras'),
    "tea":tf.keras.models.load_model('../models/trained_model_tea.keras'),
    "wheat":tf.keras.models.load_model('../models/trained_model_wheat.keras'),
}

class_dict={
    "apple": ['apple_black_rot',
 'apple_cedar_apple_rust',
 'apple_complex',
 'apple_frog_eye_leaf_spot',
 'apple_healthy',
 'apple_powdery_mildew',
 'apple_rust',
 'apple_scab'],

 "bean":['bean_angular_leaf_spot', 'bean_healthy', 'bean_rust', 'soyabean_healthy'],

 "banana":['banana_cordana',
 'banana_healthy',
 'banana_pestalotiopsis',
 'banana_sigatoka'],

 "citrus":['citrus_black_spot', 'citrus_canker', 'citrus_greening', 'citrus_healthy'],

 "cauliflower":['cauliflower_bacterial_spot_rot',
 'cauliflower_black_rot',
 'cauliflower_downy_mildew',
 'cauliflower_healthy'],

 "corn":['corn_blight',
 'corn_common_rust',
 'corn_diseased',
 'corn_gray_leaf_spot',
 'corn_healthy',
 'corn_northern_leaf_blight'],

 "grape":['grape_black_measles',
 'grape_black_rot',
 'grape_healthy',
 'grape_leaf_blight'],
 
 "potato":['potato_early_blight',
 'potato_healthy', 'potato_late_blight', 'potato_leaf_roll'],

 
 "strawberry":['strawberry_healthy', 'strawberry_leaf_spot', 'strawberry_powdery_mildew'],

 "sunflower":['sunflower_healthy', 'sunflower_downy_mildew', 'sunflower_bacterial_spot'],

 "tea":['tea_healthy', 'tea_leaf_spot', 'tea_bacterial_blight'],

 "wheat":['wheat_healthy', 'wheat_leaf_rust', 'wheat_stem_rust'],

}

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace * with your frontend domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def preprocess_image(data: bytes)->np.ndarray:
    img = PIL.Image.open(io.BytesIO(data)).convert("RGB")
    img = img.resize((224,224))
    img_array = tf.keras.preprocessing.image.img_to_array(img)
    img_array = img_array / 255.0  # normalize
    img_array = np.expand_dims(img_array, axis=0)

    return img_array

@app.post("/predict")
async def detect_disease(model: str = Form(...), file: UploadFile = File(...)):
    print(f"model: {model}, file: {file.filename}")
    if model not in models:
        return JSONResponse(content={"error": f"Model not found, model:{model}"}, status_code=400)
    
    contents = await file.read()
    img = preprocess_image(contents)
    prediction = models[model.lower()].predict(img)
    predicted_index = np.argmax(prediction)
    prediction_result = class_dict[model][predicted_index]
    return JSONResponse(content={"prediction": str(prediction_result)})
