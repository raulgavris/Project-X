<<<<<<< Updated upstream
from django.contrib import admin

from web_api.models import HelloWorld



# Register your models here.

admin.site.register(HelloWorld)

=======
from django.contrib import admin

from web_api.models import HelloWorld
from web_api.models import user

# Register your models here.

admin.site.register(HelloWorld)
admin.site.register(user)
>>>>>>> Stashed changes
