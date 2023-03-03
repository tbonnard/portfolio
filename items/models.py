from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class User(AbstractUser):
    email = models.EmailField(unique=True, blank=False)
    emailConfirmed = models.BooleanField(default=False)

    # when we only want the email, not the username:
    # username = None
    # USERNAME_FIELD = 'email'
    # REQUIRED_FIELDS = []


def get_admin_user():
    return User.objects.filter(is_superuser=True).first()


class Education(models.Model):
    name = models.CharField(null=False, blank=False, max_length=255)
    link = models.URLField(max_length=2048, null=True, blank=True)


class Visitor(models.Model):
    internal_id = models.IntegerField(null=False, blank=False, unique=True, default=1)
    name = models.CharField(null=False, blank=False, max_length=255)
    description = models.CharField(null=False, blank=False, max_length=500)
    logo = models.URLField(max_length=2048, null=True, blank=True)


class WeatherLocation(models.Model):
    name = models.CharField(null=False, blank=False, max_length=255)
    lat = models.FloatField()
    long = models.FloatField()

