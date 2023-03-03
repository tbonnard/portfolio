from django.middleware.csrf import get_token
from django.http import JsonResponse


def get_csrf_token(request):
    csrf_token = get_token(request)
    response = JsonResponse({'csrfToken': csrf_token})
    response['X-CSRFToken'] = csrf_token
    # print(response)
    # print(csrf_token)
    # print(response.items())
    return response