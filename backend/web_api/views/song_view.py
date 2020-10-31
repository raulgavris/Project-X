from web_api.models import Song
from rest_framework.generics import ListAPIView
from rest_framework import permissions
from web_api.serializers import SongSerializer

from rest_framework.response import Response
from django.db import connection


class SongView(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    queryset = Song.objects.all()
    serializer_class = SongSerializer

    # def post(self, request):
    #     cursor = connection.cursor()
    #     cursor.execute(f"UPDATE hello_world SET count={request.data['count']} WHERE id={request.data['id']}")
    #     return Response({'SUCCESS': 'Count was incremented'}, status=200)