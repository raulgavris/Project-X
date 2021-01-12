from django.urls import path

from web_api.views import RegisterApi , UserLocationView
from rest_framework.schemas import get_schema_view
from django.views.generic import TemplateView


urlpatterns = [
    # ...
    # Use the `get_schema_view()` helper to add a `SchemaView` to project URLs.
    #   * `title` and `description` parameters are passed to `SchemaGenerator`.
    #   * Provide view name for use with `reverse()`.
    path('openapi', get_schema_view(
        title="Musichub",
        description="API for all things …",
        version="1.0.0"
    ), name='openapi-schema'),
    # ...

    # ...
    # Route TemplateView to serve Swagger UI template.
    #   * Provide `extra_context` with view name of `SchemaView`.
    path('swagger-ui/', TemplateView.as_view(
        template_name='swagger-ui.html',
        extra_context={'schema_url':'openapi-schema'}
    ), name='swagger-ui'),

    #path('hello_world/', HelloWorldView.as_view()),
    path('register/', RegisterApi.as_view()),
    #path('songs/', SongView.as_view()),
    path('location2/', UserLocationView.as_view())
]
