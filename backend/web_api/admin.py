from django.contrib import admin

from web_api.models import Song, UserLocation


# Register your models here.

admin.site.register(Song)

admin.site.register(UserLocation)