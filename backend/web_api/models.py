from django.db import models
from django.contrib.auth.models import User


class UserLocation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
    lat = models.IntegerField()
    lng = models.IntegerField()


class Song(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=50)
    artist = models.CharField(max_length=50)
    user_name = models.CharField(max_length=20)
    user_location = models.CharField(max_length=20)

    def __str__(self):
        return self.title + "-" + self.artist

    class Meta:
        db_table = 'song'
        app_label = 'web_api'
