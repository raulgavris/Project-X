from django.db import models


class Song(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    duration = models.IntegerField()
    
    def __str__(self):
        return self.name

    class Meta:
        db_table = 'song'
        app_label= 'web_api'