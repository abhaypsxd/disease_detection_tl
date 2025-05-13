import io

import numpy as np
import PIL.Image

from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
import tensorflow as tf
from fastapi.responses import JSONResponse


model = tf.keras.models.load_model('../models/trained_model_apple.keras')
