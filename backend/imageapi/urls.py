from django.urls import path
from imageapi.views import GenerateHouseMapView

urlpatterns = [
    path('generate-house-map/',GenerateHouseMapView.as_view()),
]