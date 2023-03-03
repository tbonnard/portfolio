# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework.exceptions import AuthenticationFailed
# from rest_framework import status
# from django.http import Http404
#
# from ..models import Education
# from ..serializers.educationSerializer import EducationSerializer
#
# from .authViews import validate_if_authenticated
# from ..utils.validateUserPerm import validate_superuser
#
#
# # Create your views here.
# class EducationView(APIView):
#     def get(self, request):
#         data_authenticated_user = validate_if_authenticated(request)
#         if data_authenticated_user['authenticated']:
#             if validate_superuser(data_authenticated_user['user']):
#                 queryset = Education.objects.all()
#                 if queryset is not None:
#                     serializer = EducationSerializer(queryset, many=True)
#                     return Response(serializer.data)
#                 return Response('No data',status=status.HTTP_204_NO_CONTENT)
#             return Response('Forbidden', status=status.HTTP_403_FORBIDDEN)
#         raise AuthenticationFailed('Unauthenticated')
#
#     def post(self, request):
#         data_authenticated_user = validate_if_authenticated(request)
#         if data_authenticated_user['authenticated']:
#             serializer_cellar = EducationSerializer(data=request.data)
#             # To validate and if not, raises an exception
#             serializer_cellar.is_valid(raise_exception=True)
#             serializer_cellar.save()
#             return Response(serializer_cellar.data, status=status.HTTP_201_CREATED)
#         raise AuthenticationFailed('Unauthenticated')
#
#
# class EducationDetailsView(APIView):
#     """
#     Retrieve, update or delete an instance.
#     """
#     def get_object(self, pk):
#         try:
#             return Education.objects.get(pk=pk)
#         except Education.DoesNotExist:
#             raise Http404
#
#     def get(self, request, pk, format=None):
#         data_authenticated_user = validate_if_authenticated(request)
#         if data_authenticated_user['authenticated']:
#             instance = self.get_object(pk)
#             serializer = EducationSerializer(instance)
#             return Response(serializer.data)
#         raise AuthenticationFailed('Unauthenticated')
#
#     def put(self, request, pk, format=None):
#         data_authenticated_user = validate_if_authenticated(request)
#         if data_authenticated_user['authenticated']:
#             instance = self.get_object(pk)
#             serializer = EducationSerializer(instance, data=request.data)
#             if serializer.is_valid():
#                 serializer.save()
#                 return Response(serializer.data)
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#         raise AuthenticationFailed('Unauthenticated')
#
#     def delete(self, request, pk, format=None):
#         data_authenticated_user = validate_if_authenticated(request)
#         if data_authenticated_user['authenticated']:
#             instance = self.get_object(pk)
#             instance.delete()
#             return Response('Data erased', status=status.HTTP_204_NO_CONTENT)
#         raise AuthenticationFailed('Unauthenticated')
