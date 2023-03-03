
from django.urls import re_path, path
from django.views.generic import TemplateView

# urlpatterns = [
#     re_path(r".*", index) # RegExpr: any character is correct
# ]


urlpatterns = [
    re_path("", TemplateView.as_view(template_name="index.html")),
]