from foodbill_api.models import Ingredients
from rest_framework import viewsets, permissions
from .serializers import IngredientsSerializer

# Ingredients Viewset
class IngredientsViewset(viewsets.ModelViewSet):
    queryset = Ingredients.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = IngredientsSerializer