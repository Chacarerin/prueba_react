# 🚀 Django + React Full Stack Starter

<div align="center">

![Django](https://img.shields.io/badge/Django-6.0-092E20?style=for-the-badge&logo=django&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15+-336791?style=for-the-badge&logo=postgresql&logoColor=white)

**Un template moderno para proyectos Full Stack con Django REST Framework y React**

[Características](#-características) •
[Requisitos](#-requisitos) •
[Instalación](#-instalación) •
[Estructura](#-estructura-del-proyecto) •
[Uso](#-uso) •
[Tecnologías](#-stack-tecnológico) •
[Contribuir](#-contribuir)

</div>

---

## 📋 Descripción

Este repositorio es un **template de inicio rápido** para desarrollar aplicaciones web modernas utilizando:

- **Backend:** Django 6.0 con Django REST Framework
- **Frontend:** React 19 con Vite como bundler
- **Estilos:** Tailwind CSS v4
- **Base de datos:** PostgreSQL

Es ideal como punto de partida para proyectos académicos, prototipos o aplicaciones de producción que requieran un stack completo y moderno.

---

## ✨ Características

### Backend (Django)
- ✅ Django 6.0 con configuración lista para producción
- ✅ Django REST Framework para APIs RESTful
- ✅ CORS configurado para comunicación frontend-backend
- ✅ PostgreSQL como base de datos
- ✅ Variables de entorno con `python-dotenv`
- ✅ Estructura modular con apps separadas

### Frontend (React)
- ✅ React 19 con Hooks modernos
- ✅ Vite 7 para desarrollo ultra-rápido (HMR)
- ✅ Tailwind CSS v4 con el nuevo plugin de Vite
- ✅ Consumo de APIs con `fetch`
- ✅ Diseño responsive y moderno

### DevOps
- ✅ `.gitignore` completo para Python, Node.js y macOS
- ✅ Configuración de entorno con archivos `.env`
- ✅ Listo para deployment

---

## 📦 Requisitos

Antes de comenzar, asegúrate de tener instalado:

| Software | Versión Mínima | Verificar |
|----------|----------------|-----------|
| Python | 3.12+ | `python --version` |
| Node.js | 20+ | `node --version` |
| npm | 10+ | `npm --version` |
| PostgreSQL | 15+ | `psql --version` |

### Herramientas Recomendadas

- **virtualenvwrapper** - Para gestión de entornos virtuales Python
- **VS Code** - Editor de código recomendado

---

## 🛠️ Instalación

### 1. Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/django-react-starter.git
cd django-react-starter
```

### 2. Configurar el Backend

```bash
# Crear entorno virtual (con virtualenvwrapper)
mkvirtualenv mi_proyecto_venv

# O con venv estándar
python -m venv venv
source venv/bin/activate  # En macOS/Linux

# Instalar dependencias
pip install django djangorestframework django-cors-headers psycopg2-binary python-dotenv
```

### 3. Configurar Base de Datos PostgreSQL

```bash
# Crear usuario y base de datos
psql postgres

# Dentro de psql ejecutar:
CREATE USER mi_usuario WITH PASSWORD 'mi_password';
CREATE DATABASE mi_base_db OWNER mi_usuario;
GRANT ALL PRIVILEGES ON DATABASE mi_base_db TO mi_usuario;
\q
```

### 4. Configurar Variables de Entorno

Crear archivo `backend/.env`:

```env
DB_NAME=mi_base_db
DB_USER=mi_usuario
DB_PASSWORD=mi_password
DB_HOST=localhost
DB_PORT=5432
DEBUG=True
SECRET_KEY=tu-clave-secreta-aqui
```

### 5. Ejecutar Migraciones

```bash
cd backend
python manage.py migrate
```

### 6. Configurar el Frontend

```bash
cd ../frontend
npm install
```

---

## 🏃 Uso

Necesitas **dos terminales** para ejecutar el proyecto completo:

### Terminal 1: Backend (Django)

```bash
# Activar entorno virtual
workon mi_proyecto_venv  # o source venv/bin/activate

# Iniciar servidor
cd backend
python manage.py runserver
```

El backend estará disponible en: `http://127.0.0.1:8000`

### Terminal 2: Frontend (React)

```bash
cd frontend
npm run dev
```

El frontend estará disponible en: `http://localhost:5173`

### Verificar la Conexión

1. Abre `http://localhost:5173` en tu navegador
2. Deberías ver el mensaje **"¡Hola Mundo desde Django API!"**
3. Esto confirma que React está consumiendo correctamente la API de Django

---

## 📁 Estructura del Proyecto

```
django-react-starter/
│
├── backend/                    # Servidor Django
│   ├── config/                 # Configuración del proyecto
│   │   ├── settings.py         # Configuración principal
│   │   ├── urls.py             # URLs principales
│   │   └── wsgi.py
│   ├── core/                   # App principal
│   │   ├── views.py            # Vistas/Endpoints API
│   │   ├── models.py           # Modelos de datos
│   │   └── ...
│   ├── .env                    # Variables de entorno (no versionado)
│   └── manage.py
│
├── frontend/                   # Cliente React
│   ├── src/
│   │   ├── App.jsx             # Componente principal
│   │   ├── index.css           # Estilos Tailwind
│   │   └── main.jsx            # Entry point
│   ├── vite.config.js          # Configuración de Vite
│   ├── package.json
│   └── index.html
│
├── .gitignore                  # Archivos ignorados por git
└── README.md                   # Este archivo
```

---

## 🔧 Stack Tecnológico

### Backend

| Tecnología | Uso |
|------------|-----|
| **Django 6.0** | Framework web principal |
| **Django REST Framework** | Construcción de APIs RESTful |
| **django-cors-headers** | Manejo de CORS para el frontend |
| **psycopg2-binary** | Adaptador PostgreSQL |
| **python-dotenv** | Gestión de variables de entorno |

### Frontend

| Tecnología | Uso |
|------------|-----|
| **React 19** | Librería UI |
| **Vite 7** | Build tool y dev server |
| **Tailwind CSS 4** | Framework de estilos utility-first |

### Base de Datos

| Tecnología | Uso |
|------------|-----|
| **PostgreSQL 15+** | Base de datos relacional |

---

## 🔒 Seguridad

Este template incluye configuraciones de seguridad básicas:

- ✅ Variables sensibles en archivos `.env` (no versionados)
- ✅ CORS restringido a orígenes específicos
- ✅ `.gitignore` completo que excluye archivos sensibles
- ✅ Secret key configurable por entorno

### Archivos Excluidos de Git

- `.env` - Variables de entorno
- `*.sqlite3` - Bases de datos SQLite
- `credentials.*` - Archivos de credenciales
- `node_modules/` - Dependencias de Node
- `__pycache__/` - Cache de Python

---

## 📝 API Endpoints

### Endpoints Disponibles

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/hola/` | Retorna mensaje de prueba |
| GET | `/admin/` | Panel de administración Django |

### Ejemplo de Respuesta

```json
GET /api/hola/

{
    "mensaje": "¡Hola Mundo desde Django API!"
}
```

---

## 🚀 Próximos Pasos

Una vez que tengas el proyecto funcionando, puedes:

1. **Crear nuevas apps Django:**
   ```bash
   python manage.py startapp mi_nueva_app
   ```

2. **Agregar modelos y migraciones:**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

3. **Crear componentes React adicionales**

4. **Configurar autenticación** con JWT o Session

5. **Preparar para producción** con gunicorn, nginx, etc.

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 👨‍💻 Autor

Desarrollado con ❤️ para la comunidad de desarrolladores.

---

<div align="center">

**¿Te fue útil este template?** ⭐ ¡Dale una estrella al repositorio!

</div>
