from django.contrib import admin

from .models import User, Education

# Register your models here.
class UserAdminCustom(admin.ModelAdmin):
    list_display = ('email', 'date_joined')


class EducationAdminCustom(admin.ModelAdmin):
    list_display = ('name', 'link')


admin.site.register(User, UserAdminCustom)
admin.site.register(Education, EducationAdminCustom)
