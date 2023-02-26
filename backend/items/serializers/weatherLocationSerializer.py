from rest_framework.serializers import ModelSerializer

from ..models import WeatherLocation


class WeatherLocationSerializer(ModelSerializer):
    # name = serializers.CharField(allow_null=True, allow_blank=True)
    class Meta:
        model = WeatherLocation
        fields = ['name', 'lat', 'long']
        # fields = '__all__'

    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance

