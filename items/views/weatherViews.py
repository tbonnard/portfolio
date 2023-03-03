from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import AuthenticationFailed

import random
from ..models import WeatherLocation
from  ..serializers.weatherLocationSerializer import WeatherLocationSerializer

from ..utils.validateUserPerm import validate_if_authenticated, validate_superuser


class WeatherView(APIView):
    def get(self, request):
        queryset = WeatherLocation.objects.all()
        if queryset is not None:
            random_item = random.choice(queryset)
            serializer = WeatherLocationSerializer(random_item)
            return Response(serializer.data)
        return Response('No data', status=status.HTTP_204_NO_CONTENT)

    def post(self, request):
        data_authenticated_user = validate_if_authenticated(request)
        if data_authenticated_user['authenticated']:
            serializer_cellar = WeatherLocationSerializer(data=request.data)
            # To validate and if not, raises an exception
            serializer_cellar.is_valid(raise_exception=True)
            serializer_cellar.save()
            return Response(serializer_cellar.data, status=status.HTTP_201_CREATED)
        raise AuthenticationFailed('Unauthenticated')
