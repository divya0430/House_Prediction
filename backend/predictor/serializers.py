from rest_framework import serializers

class PredictionSerializer(serializers.Serializer):
    OverallQual = serializers.IntegerField()
    GrLivArea = serializers.FloatField()
    GarageCars = serializers.IntegerField()
    TotalBsmtSF = serializers.FloatField()
    FullBath = serializers.IntegerField()
    YearBuilt = serializers.IntegerField()
    LotArea = serializers.FloatField()
    BedroomAbvGr = serializers.IntegerField()