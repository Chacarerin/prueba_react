# 🚀 Backend API REST (Django REST Framework)

[![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)](https://python.org)
[![Django](https://img.shields.io/badge/Django-092E20?style=flat-square&logo=django&logoColor=white)](https://djangoproject.com)
[![DRF](https://img.shields.io/badge/DRF-REST%20API-red?style=flat-square&logo=django&logoColor=white)](https://www.django-rest-framework.org/)

Backend de la aplicación full-stack React + Django. Expone una API REST que sirve como capa de datos para el frontend React, implementando el patrón de arquitectura desacoplada cliente-servidor.

## 🧠 Contexto Pedagógico y Teórico
La arquitectura desacoplada (Decoupled Architecture) separa completamente el frontend del backend, comunicándolos exclusivamente a través de una API. Este enfoque es el estándar actual de la industria porque permite que ambas capas sean desarrolladas, desplegadas y escaladas de forma independiente. Django REST Framework (DRF) extiende Django para convertir el patrón MVT en una API que devuelve JSON en lugar de HTML renderizado.

## ⚙️ Tecnologías y Frameworks Aplicados
* **Django REST Framework (DRF)**: Elegido sobre alternativas como FastAPI por su integración nativa con el ORM de Django y su sistema de autenticación. DRF proporciona serializadores, viewsets y routers que automatizan la exposición de modelos como endpoints REST.
* **Decorador `@api_view`**: Se utiliza para definir vistas de función simples que responden a métodos HTTP específicos (GET, POST), siendo la forma más directa de construir endpoints en DRF sin la complejidad de ViewSets.

## 🛠️ Desglose Técnico (El "Cómo")
* **`core/views.py`**: Contiene el endpoint `hola_mundo` como prueba de concepto de la integración DRF, retornando una respuesta JSON estructurada.
* **`config/urls.py`**: Enrutador principal que expone los endpoints del backend bajo el prefijo `/api/`.
* **Separación `config/` vs `core/`**: Sigue la convención Django de separar la configuración del proyecto (`config/`) de la lógica de la aplicación (`core/`), facilitando la escalabilidad del backend.

*Desarrollado por Rubén Schnettler.*
