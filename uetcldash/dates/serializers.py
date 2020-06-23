from rest_framework import serializers
from dates.models import Dates 

#Date Serialiser
class DatesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dates 
        fields = '__all__'
        