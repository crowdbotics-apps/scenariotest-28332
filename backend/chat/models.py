from django.conf import settings
from django.db import models


class Users(models.Model):
    "Generated Model"
    username = models.CharField(
        max_length=256,
    )
    message = models.CharField(
        max_length=256,
    )


# Create your models here.
