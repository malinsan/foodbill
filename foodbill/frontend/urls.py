from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.index),
    # match all other pages except for api
    re_path(r'^(?!api).*$', views.index)
]