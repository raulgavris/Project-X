from django.contrib.auth.models import Group
from rest_framework import serializers
from django.contrib.auth import get_user_model


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        User = get_user_model()
        model = User
        fields = ['url', 'username', 'email']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']
