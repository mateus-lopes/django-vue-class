# BACKEND

> Obs: Após criar o projeto, nós iremos clonar o seguinte usuario já pronto. Utilizaremos um usuario já pronto para não precisarmos perder tempo criando o nosso.

> (esse usuario é disponibilizado pelo professor Marco André no seu tutorial de 2023)

# 1. Modificando o usuário padrão do Django

Utilizaremos uma estratégia simples para a inclusão de campos ao usuário padrão do Django. Essa estratégia terá as seguintes características:

-   **Substituiremos** a classe `User` padrão do Django pela nossa própria classe `Usuario`.
-   **Não removeremos** os campos padrão do usuário.
-   **Incluiremos** os campos que precisamos no nosso usuário.
-   **Removeremos** o banco de dados e criaremos um novo, perdendo todos os dados.
-   Faremos a **migração** do banco de dados.
-   Modificaremos o **Admin** para que ele utilize a nossa classe `Usuario` e não a classe `User` padrão.
-   Em nosso exemplo, incluiremos os campos `cpf`, `telefone` e `data_nascimento` ao usuário.
-   Posteriormente, incluiremos a foto do usuário.


**Instalando o setuptools**

-   Instale o pacote `setuptools`:

```shell
pdm add setuptools
```

**Instalando a app `usuario`**

-   Baixe e descompacte o arquivo com a app pronta para ser utilizada:

```shell
wget https://github.com/marrcandre/django-drf-tutorial/raw/main/apps/usuario.zip -O usuario.zip && unzip usuario.zip && rm usuario.zip
```

No `Windows`, execute os seguintes comandos no `PowerShell`:

```shell
Invoke-WebRequest -Uri https://github.com/marrcandre/django-drf-tutorial/raw/main/apps/usuario.zip -OutFile usuario.zip
```

```shell
Expand-Archive -Path usuario.zip -DestinationPath .
```

```shell
Remove-Item -Force usuario.zip
```

A pasta ficará assim:

```
usuario
├── admin.py
├── apps.py
├── forms.py
├── __init__.py
├── managers.py
├── migrations
│   └── __init__.py
├── models.py
├── router.py
├── serializers.py
└── views.py
```

**Adicionando a app `usuario` ao projeto**

-   Edite o arquivo `settings.py` e inclua a app `usuario` na lista de apps instaladas:

```python
INSTALLED_APPS = [
    ...
    "rest_framework"
    "usuario", # inclua essa linha
]
```

-   Edite o arquivo `settings.py` e inclua a configuração abaixo:

```python
AUTH_USER_MODEL = "usuario.Usuario"
```

> Essa configuração indica ao Django que a classe `Usuario` da app `usuario` será utilizada como classe de usuário padrão.

-   Edite o arquivo `urls.py` e inclua as rotas da app `usuario`:

```python
...
from usuario.router import router as usuario_router
...

urlpatterns = [
    ...
    path("api/", include(usuario_router.urls)),
]
```

> Ela será acessada através da rota `/api/usuario/`.

**Removendo arquivos temporários, migrations e o banco de dados**

```shell
find . -name "__pycache__" -type d -exec rm -r {} +
find . -path "*/migrations/*.pyc" -delete
find . -path "*/migrations/*.py" -not -name "__init__.py" -delete
rm -rf __pypackages__ pdm.lock
rm db.sqlite3
```

**Reinstalando as dependências**

```shell
pdm install
```

**Criando o banco de dados e executando as migrações**

-   Crie novamente o banco de dados e execute as migrações:

```shell
pdm run python manage.py makemigrations
pdm run python manage.py migrate
```

**Criando um novo usuário**

-   Crie um novo superusuário:

```shell
pdm run python manage.py createsuperuser
```

# 2. Mudanças no Usuario.

Fazer as alterações.

# 3. Autenticação com o SimpleJWT

Vamos utilizar o **SimpleJWT** para a autenticação no **Django REST Framework**.

> **Resumindo**, utilizaremos o **SimpleJWT** para _autenticação_ e a _estrutura de permissões do Django_ para **autorização**.

**O SimpleJWT**

O [SimpleJWT](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/) é um plug-in de autenticação JSON Web Token para o Django REST Framework.

**Instalação e configuração**

-   Para instalar o SimpleJWT, execute o seguinte comando:

```shell
pdm add djangorestframework-simplejwt
```

-   Adicione o `SimpleJWT` no arquivo `settings.py`:

```python
INSTALLED_APPS = [
    ...
    "rest_framework_simplejwt",
    ...
]
```

-   Adicione o `SimpleJWT` no arquivo `settings.py`:

```python
REST_FRAMEWORK = {
    ...
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework_simplejwt.authentication.JWTAuthentication",
    ),
    ...
}
```

-   Adicione o `SimpleJWT` no arquivo `urls.py`:

```python
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    ...
    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
```

Agora nos já temos um novo usuario, com o JWT adicionado.

# 4. Adicionando o Corsheaders no projeto 

No terminal:
```shell 
pdm add django-cors-headers
```

Agora adicione o Cors em seu projeto no arquivo `settings`.

```python
INSTALLED_APPS = [
    ...
    'corsheaders'
    ...
]
```
E tambem adiocione a seguinte linha em *MIDDLEWARE*:

```python
MIDDLEWARE = [
     'corsheaders.middleware.CorsMiddleware',
     'django.middleware.common.CommonMiddleware',
]
```
Note que uma das linhas acima ja existem dentro do seu *MIDDLEWARE*.

Tambem adicione a seguinte linha ao final do seu `settings`

```python
CORS_ALLOW_ALL_ORIGINS = True
```

Essa ultima linha define que todas as origens são permitidas dentro do seu projeto, tambem poderiamos deixar essa opção como *false* e então passar quais seriam as origens permitidas.

Se preferir poderias tambem fazer assim:

```python
CORS_ALLOW_ALL_ORIGINS = False  
```

e então passaria as origens permitidas assim: 

```python
CORS_ALLOWED_ORIGINS = [
    "http://localhost:8080",
    "http://127.0.0.1:8080",
    "http://localhost:5173",
    "http://localhost:3000"
]
```

Mas aqui usaremos o primeiro exemplo para facilitar nosso trabalho.


# 5. CADASTRO

Agora faremos o nosso cadastro, para isso criaremos uma pasta chamada *utils* dentro do usuario, dentro da pasta *utils* faremos um arquivo chamado `cadastro.py`, nesse arquivo faremos o nosso código.

Então vamos começar :D

```python
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.utils.translation import gettext_lazy as _
from rest_framework.response import Response
from rest_framework import status
from ..models import Usuario

@api_view(["POST"])
@authentication_classes([])
@permission_classes([AllowAny])

def cadastrar_usuario(request):
    email = request.data.get("email")
    password = request.data.get("password")
    full_name = request.data.get("full_name")

    if(Usuario.objects.filter(email=email).exists()):
        return Response({"error": _("Email já cadastrado")}, status=status.HTTP_400_BAD_REQUEST)
    else:
        usuario = Usuario.objects.create(email=email, full_name=full_name)
        usuario.set_password(password)
        usuario.save()
         return Response({"message": _("Usuário cadastrado com sucesso")}, status=status.HTTP_201_CREATED)

```

Explicação:


# 6. LOGIN

```python

```

