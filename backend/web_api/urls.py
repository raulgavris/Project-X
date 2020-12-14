from django.urls import path

from web_api.views import *


urlpatterns = [
    path('register/', RegisterApi.as_view()),
    path('songs/', SongView.as_view()),
    path('location2/', UserLocationView.nearby_spots_old)
]
