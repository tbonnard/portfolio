from django.urls import path
from django.views.generic import TemplateView

from .views import authViews, educationViews, weatherViews, visitorViews, messageViews, csrftoken

from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path("", TemplateView.as_view(template_name="ind.ex.html")),
    path('register/', authViews.RegisterView.as_view()),
    path('login/', authViews.LoginView.as_view()),
    path('logout/', authViews.LogoutView.as_view()),
    path('user/admin/', authViews.UsersAPIView.as_view()),
    path('user/admin/<int:pk>/', authViews.UserView.as_view()),
    path('user/', authViews.UserAuthView.as_view()),
    # path('product/', educationViews.EducationView.as_view()),
    # path('product/<int:pk>/', educationViews.EducationDetailsView.as_view()),
    path('weather/', weatherViews.WeatherView.as_view()),
    path('visitor/', visitorViews.VisitorView.as_view()),
    path('getvisitor/', visitorViews.VisitorDetailsView.as_view()),
    path('message/', messageViews.MessageView.as_view()),
    path('get-csrf-token/', csrf_exempt(csrftoken.get_csrf_token), name='get_csrf_token'),
]