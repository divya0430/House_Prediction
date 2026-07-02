from rest_framework.decorators import api_view
from rest_framework.response import Response
import pandas as pd

from .ml_model import model, feature_columns


@api_view(["GET","POST"])
def predict(request):

    data = request.data

    # Step 1: create full zero dataframe with correct structure
    df = pd.DataFrame(0, index=[0], columns=feature_columns)

    # Step 2: fill numeric features (ONLY if they exist)
    if "OverallQual" in df.columns:
        df.at[0, "OverallQual"] = data.get("OverallQual", 5)

    if "OverallCond" in df.columns:
        df.at[0, "OverallCond"] = data.get("OverallCond", 5)

    if "LotArea" in df.columns:
        df.at[0, "LotArea"] = data.get("LotArea", 8000)    

    if "GrLivArea" in df.columns:
        df.at[0, "GrLivArea"] = data.get("GrLivArea", 1500)

    if "GarageCars" in df.columns:
        df.at[0, "GarageCars"] = data.get("GarageCars", 2)

    if "TotalBsmtSF" in df.columns:
        df.at[0, "TotalBsmtSF"] = data.get("TotalBsmtSF", 1000)

    if "FullBath" in df.columns:
        df.at[0, "FullBath"] = data.get("FullBath", 2)

    if "BedroomAbvGr" in df.columns:
        df.at[0, "BedroomAbvGr"] = data.get("BedroomAbvGr", 3)

    # Step 3: IMPORTANT → YearBuilt handling (ONE-HOT FIX)
    year = str(data.get("YearBuilt", 2003))
    year_col = f"YearBuilt_{year}"

    if year_col in df.columns:
        df.at[0, year_col] = 1


    # neighborhood = data.get("Neighborhood", "NAmes")

    # neighborhood_column = f"Neighborhood_{neighborhood}"

    # if neighborhood_column in df.columns:
    #     df.at[0, neighborhood_column] = 1   

    # Step 4: Predict
    prediction = model.predict(df)[0]

    return Response({
        "predicted_price": round(float(prediction), 2)
    })