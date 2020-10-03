from web_api.models import HelloWorld
from rest_framework.generics import ListAPIView
from rest_framework import permissions
from web_api.serializers import HelloWorldSerializer

from rest_framework.response import Response
from django.db import connection


class HelloWorldView(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    queryset = HelloWorld.objects.all()
    serializer_class = HelloWorldSerializer

    def post(self, request):
        cursor = connection.cursor()
        cursor.execute(f"UPDATE hello_world SET count={request.data['count']} WHERE id={request.data['id']}")
        return Response({'SUCCESS': 'Count was incremented'}, status=200)