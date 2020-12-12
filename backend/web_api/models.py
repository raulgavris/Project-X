from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.utils.translation import gettext_lazy as _
from django.utils import timezone
from django.contrib.gis.geoip2 import GeoIP2
from .utils import *
from .managers import CustomUserManager

class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_('email address'), unique=True)
    first_name = models.CharField(_('first name'), max_length=100)
    last_name = models.CharField(_('last name'), max_length=100)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    objects = CustomUserManager()

    def __str__(self):
        return self.email


class UserLocation(models.Model):
    User = CustomUser()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
    ip=request.M
    lat = models.IntegerField(default=get_geo_lat(get_ip_address()))
    lng = models.IntegerField(default=get_geo_lng(get_ip_address(GET)))
    
    


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

