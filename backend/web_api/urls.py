from django.urls import path

from web_api.views import RegisterApi, SongView


urlpatterns = [
    path('register/', RegisterApi.as_view()),
    path('songs/', SongView.as_view()),
]
