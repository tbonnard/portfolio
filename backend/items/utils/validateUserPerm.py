from rest_framework.exceptions import AuthenticationFailed

import jwt

from ..models import User


def validate_if_authenticated(request):
    token = request.COOKIES.get('jwtTk')
    if not token:
        raise AuthenticationFailed('Unauthenticated')
    try:
        payload = jwt.decode(token, 'BTNN02En7EFUV4tsNzOq68hVspfLa9DeRGc6kYTJr5q6Xsrn1Yi2lfJQurB0', algorithms=['HS256'])
    except jwt.ExpiredSignatureError:
        raise AuthenticationFailed('Unauthenticated')
    try:
        user = User.objects.get(pk=payload['id'])
        obj = {
            'authenticated': True,
            'user': user
        }
        return obj
    except jwt.ExpiredSignatureError:
        raise AuthenticationFailed('Unauthenticated')


def validate_superuser(user):
    user_to_validate = User.objects.get(pk=user.id)
    if user_to_validate.is_superuser:
        return True
    return False


# def validate_in_managers(instance, user_to_validate):
#     current_managers = instance.managers_access.all()
#     for i in current_managers:
#         if i == user_to_validate:
#             return True
#     return False


# def validate_user_access(model, instance_object, user):
#     instance = model.objects.get(pk=instance_object.id)
#     user_to_validate = User.objects.get(pk=user.id)
#     if model == Cellar:
#         location = Location.objects.get(pk=instance_object.locationIdCellar)
#         validate_in_managers(location, user_to_validate)
#     elif model == Bottle:
#         cellar = Cellar.objects.get(pk=instance_object.cellarIdBottle)
#         location = Location.objects.get(pk=cellar.id)
#         validate_in_managers(location, user_to_validate)
#     else:
#         validate_in_managers(instance, user_to_validate)


