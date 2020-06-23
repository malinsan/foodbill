from rest_framework import routers
from .api import IngredientsViewset

router = routers.DefaultRouter()
router.register('api/ingredients', IngredientsViewset, 'ingredients')

urlpatterns = router.urls