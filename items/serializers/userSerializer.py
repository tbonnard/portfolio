from rest_framework.serializers import ModelSerializer

from ..models import User


class UsersSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        # pour ne pas display le password en return
        extra_kwargs = {
            'password': {'write_only': True}
        }

    # Permet de hash le password lors du create user
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class UserDetailsSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']