from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse

import smtplib
import os

my_email = os.environ.get('my_email')
to_email = os.environ.get('to_email')
smtp_url = os.environ.get('smtp_url')
user_smtp = os.environ.get('user_smtp')
pwd_smtp = os.environ.get('pwd_smtp')


def send_email(name, message, email):
    message_to_send = f"Subject:Portfolio: message de {name}! \n\n{message} -- {email}"
    with smtplib.SMTP(smtp_url, port=587) as connection:
        connection.login(user=user_smtp, password=pwd_smtp)
        connection.sendmail(from_addr=my_email, to_addrs=to_email, msg=message_to_send.encode(encoding='UTF-8'))


class MessageView(APIView):
    def post(self, request):
        data = request.data
        try:
            send_email(data['name'], data['message'], data['email'])
            return JsonResponse({'message': "sent"}, safe=False, status=status.HTTP_200_OK)
        except Exception as e:
            return JsonResponse({'message': "error"}, safe=False, status=status.HTTP_400_BAD_REQUEST)


