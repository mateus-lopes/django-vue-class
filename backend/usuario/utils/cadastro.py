from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.utils.translation import gettext_lazy as _
from rest_framework.response import Response
from rest_framework import status
from usuario.models import Usuario

@api_view(["POST"])
@authentication_classes([])
@permission_classes([AllowAny])
def cadastrar_usuario(request):
    email = request.data.get("email")
    password = request.data.get("password")
    full_name = request.data.get("full_name")

    if(Usuario.objects.filter(email=email).exists()):
        return Response({"error": ("Email já cadastrado")}, status=status.HTTP_400_BAD_REQUEST)
    else:
        usuario = Usuario.objects.create(email=email, full_name=full_name)
        usuario.set_password(password)
        usuario.save()
        return Response({"message": ("Usuário cadastrado com sucesso")}, status=status.HTTP_201_CREATED)
