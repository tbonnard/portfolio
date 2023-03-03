from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from rest_framework import status
from django.http import Http404

from ..models import Visitor
from ..serializers.visitorSerializer import VisitorSerializer

from .authViews import validate_if_authenticated
from ..utils.validateUserPerm import validate_superuser

# Create your views here.
class VisitorView(APIView):
    # def get(self, request):
    #     data_authenticated_user = validate_if_authenticated(request)
    #     if data_authenticated_user['authenticated']:
    #         # if validate_superuser(data_authenticated_user['user']):
    #         queryset = Visitor.objects.all()
    #         if queryset is not None:
    #             serializer = VisitorSerializer(queryset, many=True)
    #             return Response(serializer.data)
    #         return Response('No data',status=status.HTTP_204_NO_CONTENT)
    #         # return Response('Forbidden', status=status.HTTP_403_FORBIDDEN)
    #     raise AuthenticationFailed('Unauthenticated')

    def post(self, request):
        #data_authenticated_user = validate_if_authenticated(request)
        #if data_authenticated_user['authenticated']:
        serializer = VisitorSerializer(data=request.data)
        # To validate and if not, raises an exception
        serializer.is_valid(raise_exception=True)
        serializer.save()
        response = Response(serializer.data, status=status.HTTP_201_CREATED)
        #response.set_cookie('csrftoken', get_token(request))
        # return Response(serializer_cellar.data, status=status.HTTP_201_CREATED)
        return response

        #raise AuthenticationFailed('Unauthenticated')


class VisitorDetailsView(APIView):
    """
    Retrieve, update or delete an instance.
    """
    def get_object(self, internal_id):
        try:
            return Visitor.objects.filter(internal_id=internal_id).first()
        except Visitor.DoesNotExist:
            raise Http404

    def post(self, request, format=None):
        # data_authenticated_user = validate_if_authenticated(request)
        # if data_authenticated_user['authenticated']:
        data = request.data
        instance = self.get_object(data["internal_id"])
        serializer = VisitorSerializer(instance)
        return Response(serializer.data)
        # raise AuthenticationFailed('Unauthenticated')
#
#     def put(self, request, internal_id, format=None):
#         data_authenticated_user = validate_if_authenticated(request)
#         if data_authenticated_user['authenticated']:
#             instance = self.get_object(internal_id)
#             serializer = VisitorSerializer(instance, data=request.data)
#             if serializer.is_valid():
#                 serializer.save()
#                 return Response(serializer.data)
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#         raise AuthenticationFailed('Unauthenticated')
#
#     def delete(self, request, internal_id, format=None):
#         data_authenticated_user = validate_if_authenticated(request)
#         if data_authenticated_user['authenticated']:
#             instance = self.get_object(internal_id)
#             instance.delete()
#             return Response('Data erased', status=status.HTTP_204_NO_CONTENT)
#         raise AuthenticationFailed('Unauthenticated')
