from rest_framework.serializers import ModelSerializer

from ..models import Visitor


class VisitorSerializer(ModelSerializer):
    # name = serializers.CharField(allow_null=True, allow_blank=True)
    class Meta:
        model = Visitor
        fields = ['name', 'description', 'logo']
        # fields = '__all__'

    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance

