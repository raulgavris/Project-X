from rest_framework_simplejwt import views as jwt_views
from django.urls import path

from web_api.views import HelloWorldView


urlpatterns = [
    # path('token/obtain/', ObtainTokenPairWithColorView.as_view(), name='token_obtain'),
    # path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    # path('blacklist/', LogoutAndBlacklistRefreshTokenForUserView.as_view(), name='blacklist'),

    path('hello_world/', HelloWorldView.as_view()),
]