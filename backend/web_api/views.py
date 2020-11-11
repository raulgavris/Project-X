from django.db import connection
from django.contrib.auth.models import User
from rest_framework import permissions
from rest_framework.generics import ListAPIView, GenericAPIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView

from web_api.models import HelloWorld
from web_api.serializers import HelloWorldSerializer, UserSerializer, RegisterSerializer


class HelloWorldView(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    queryset = HelloWorld.objects.all()
    serializer_class = HelloWorldSerializer

    def post(self, request):
        cursor = connection.cursor()
        cursor.execute(f"UPDATE hello_world SET count={request.data['count']} WHERE id={request.data['id']}")
        return Response({'SUCCESS': 'Count was incremented'}, status=200)


class RegisterApi(GenericAPIView):

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

class LogoutAndBlacklistRefreshTokenForUserView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=205)
        except Exception as e:
            return Response(status=400)