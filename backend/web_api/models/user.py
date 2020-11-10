from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager
# Create your models here.

class MyAccountManager(BaseUserManager):
    def create_user(self,email,username,first_name,last_name, password=None):
        if not email:
            raise ValueError("Users must have an email address")
        if not username:
            raise ValueError("Users must have an username")
        if not password:
            raise ValueError("Users must have a password")
        if not first_name:
            raise ValueError("Users must have a first_name")
        if not last_name:
            raise ValueError("Users must have last_name")

        user=self.model(
            email=self.normalize_email(email),
            username=username,
            first_name=first_name,
            last_name=last_name,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_staffuser(self,email,username,first_name,last_name, password):
        staff = self.create_user(
            email=self.normalize_email(email),
            username=username,
            first_name=first_name,
            last_name=last_name,
            password=password
        )
        staff.is_staff = True
        staff.save(using=self._db)
        return staff



    def create_superuser(self,email,username,first_name,last_name, password):
        superuser = self.create_user(
            email=self.normalize_email(email),
            username=username,
            first_name=first_name,
            last_name=last_name,
            password=password
        )
        superuser.is_admin=True
        superuser.is_staff=True
        superuser.save(using=self._db)
        return superuser


class User(AbstractBaseUser):
    email = models.EmailField(verbose_name="email",max_length=255,unique=True)
    username = models.CharField(max_length=30, unique=True)
    first_name = models.CharField(max_length=40)
    last_name = models.CharField(max_length=40)
    location=models.CharField(max_length=255)
    date_joined = models.DateTimeField(verbose_name="date joined",auto_now_add=True)
    last_login = models.DateTimeField(verbose_name="last login", auto_now=True)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username','first_name','last_name']

    objects=MyAccountManager()

    def __str__(self):
        return self.email

    def has_perm(self,perm,obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True

    def get_full_name(self):
        return self.first_name+self.last_name

    def get_short_name(self):
        return self.first_name

    class Meta:
        db_table='user'
        app_label='web_api'