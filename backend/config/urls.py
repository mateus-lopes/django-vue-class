from django.contrib import admin
from django.urls import path, include
from usuario.router import router as usuario_router
from usuario.utils.cadastro import cadastrar_usuario
from usuario.utils.login import logar_usuario
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/", include(usuario_router.urls)),
    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path('api/cadastrar/', cadastrar_usuario, name='cadastrar'),
    path('api/logar/', logar_usuario, name='logar'),
]

