from rest_framework import serializers
from foodbill_api.models import Ingredients

# Ingredient Serializer
class IngredientsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredients
        fields = '__all__'