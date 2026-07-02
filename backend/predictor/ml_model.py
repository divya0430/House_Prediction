import os
import joblib

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

MODEL_DIR = os.path.join(BASE_DIR, "model")

model = joblib.load(os.path.join(MODEL_DIR, "house_price_model_3.pkl"))

scaler = joblib.load(os.path.join(MODEL_DIR, "sc.pkl"))

feature_columns = joblib.load(
    os.path.join(MODEL_DIR, "features.pkl")
)