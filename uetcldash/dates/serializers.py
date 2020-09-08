from rest_framework import serializers
from .models import *


# Date Serialiser
class DatesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dates
        fields = '__all__'


# Project Serialiser
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
