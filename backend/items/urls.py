from django.urls import path
from django.views.generic import TemplateView

from .views import authViews, educationViews, weatherViews, visitorViews, messageViews

urlpatterns = [
    path("", TemplateView.as_view(template_name="index.html")),
    path('api/register/', authViews.RegisterView.as_view()),
    path('api/login/', authViews.LoginView.as_view()),
    path('api/logout/', authViews.LogoutView.as_view()),
    path('api/user/admin/', authViews.UsersAPIView.as_view()),
    path('api/user/admin/<int:pk>/', authViews.UserView.as_view()),
    path('api/user/', authViews.UserAuthView.as_view()),
    path('api/product/', educationViews.EducationView.as_view()),
    path('api/product/<int:pk>/', educationViews.EducationDetailsView.as_view()),
    path('api/weather/', weatherViews.WeatherView.as_view()),
    path('api/visitor/', visitorViews.VisitorView.as_view()),
    path('api/visitor/<int:internal_id>/', visitorViews.VisitorDetailsView.as_view()),
    path('api/message/', messageViews.MessageView.as_view()),

]