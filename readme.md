# 🚀 Django + React Full Stack Starter

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)

¡Bienvenido! Este repositorio contiene una plantilla base (**Starter Kit**) para aplicaciones Full Stack utilizando **React** en el Frontend y **Django** (con Django REST Framework) en el Backend.

## 📁 Estructura del Proyecto

El proyecto está dividido en dos partes principales:

- `frontend/`: Contiene la aplicación de interfaz de usuario creada con React.
- `backend/`: Contiene la API y la lógica de servidor desarrollada en Django.

Además, encontrarás un archivo `bitacora.md` donde se documenta el proceso de desarrollo y notas importantes del proyecto.

## 🛠️ Instalación y Configuración

Para poner en marcha este proyecto en tu entorno local, debes levantar tanto el servidor Backend como el Frontend por separado.

### 1. Configuración del Backend (Django)

Abre una terminal, navega a la carpeta `backend` y ejecuta los siguientes comandos:

```bash
cd backend
# Crear entorno virtual (recomendado)
python -m venv venv
# Activar entorno (En Windows: venv\Scripts\activate)
source venv/bin/activate
# Instalar dependencias
pip install -r requirements.txt
# Aplicar migraciones de base de datos
python manage.py migrate
# Iniciar servidor local
python manage.py runserver
```
La API estará disponible en `http://127.0.0.unused:8000/`.

### 2. Configuración del Frontend (React)

Abre una nueva pestaña de terminal, navega a la carpeta `frontend` y ejecuta los comandos:

```bash
cd frontend
# Instalar los paquetes de Node
npm install
# Iniciar la aplicación en modo desarrollo
npm start
```
La aplicación React se abrirá en `http://localhost:3000/`.

---
*Desarrollado con ❤️ por Rubén Schnettler*
