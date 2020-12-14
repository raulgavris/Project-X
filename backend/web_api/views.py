from rest_framework import permissions
from rest_framework.generics import ListAPIView, GenericAPIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from ipware import get_client_ip
import requests

from rest_framework_simplejwt.views import TokenObtainPairView
from django.shortcuts import get_object_or_404
from .models import UserLocation
from web_api.models import Song
from web_api.serializers import UserSerializer, RegisterSerializer, SongSerializer, CustomTokenObtainPairSerializer,UserLocationSerializer
from .utils import *


from rest_framework.decorators import api_view, renderer_classes

class RegisterApi(GenericAPIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    serializer_class = RegisterSerializer

    def post(self, request, *args,  **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        return Response({
            "user": UserSerializer(
                user,
                context=self.get_serializer_context()).data,
            "message": "You're in the mainframe!",
        })


class SongView(ListAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer
    # TO DO : make post function for search implementation


class LogoutAndBlacklistRefreshTokenForUserView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=205)
        except Exception:
            return Response(status=400)


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


def calculate_ip(request):
    ip=get_ip_address(request)
    return ip


class UserLocationView(APIView):
    permission_classes = (permissions.AllowAny,)
    http_method_names = ['get', 'head']

    def get(self, request, format=None):
        users = UserLocation.objects.all()
        serializer = UserLocationSerializer(users, many=True)
        return Response(serializer.data)


    @api_view(['GET', 'POST', ])
    def nearby_spots_old(request, radius=5000000, limit=100):
        """
        WITHOUT use of any external library, using raw MySQL and Haversine Formula
        http://en.wikipedia.org/wiki/Haversine_formula
        """
        radius = float(radius) / 1000.0
        ip=requests.get("http://ipconfig.in/ip").text
        ip=ip.rstrip()
        lat=get_geo_lat(ip)
        lng=get_geo_lng(ip)

        query = """SELECT id, (6367*acos(cos(radians(%2f))
                *cos(radians(lat))*cos(radians(lng)-radians(%2f))
                +sin(radians(%2f))*sin(radians(lat))))
                AS distance FROM web_api_userlocation HAVING
                distance < %2f ORDER BY distance LIMIT 0, %d""" % (
            float(lat),
            float(lng),
            float(lat),
            radius,
            limit
        )

        queryset = UserLocation.objects.raw(query)
        serializer = UserLocationSerializer(queryset, many=True)
        return Response(serializer.data)

 
    
