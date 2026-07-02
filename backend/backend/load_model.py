import os
import joblib

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

MODEL_PATH = os.path.join(
    BASE_DIR,
    "predictor",
    "model",
    "house_price_model_3.pkl"
)

model = joblib.load(MODEL_PATH)