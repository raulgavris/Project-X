from django.contrib import admin

from web_api.models import HelloWorld
from web_api.models import Song



# Register your models here.

admin.site.register(HelloWorld)
admin.site.register(Song)
