from web_api.models import HelloWorld
from rest_framework import serializers


class HelloWorldSerializer(serializers.ModelSerializer):
    class Meta:
        model = HelloWorld
        fields = ('id', 'hello', 'count')