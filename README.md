# Venezuelan Sign Language Translator to Text

>Parte del proyecto titulado "Traductor neuronal de lengua de señas venezolana a texto en tiempo real"

Este proyecto es un traductor de Lengua de Señas Venezolana (LSV) a texto, diseñado para facilitar la comunicación entre personas sordas que usan LSV y personas oyentes. A través de una interfaz amigable e intuitiva, convierte automáticamente los signos en texto escrito, haciendo el proceso accesible y fácil de usar.

## Tabla de contenido

* [Descripción](#descripción)  
* [Características principales](#características-principales)  
* [Demo](#demo)  
* [Screenshots](#screenshots)  
* [Tecnologías y herramientas](#tecnologías-y-herramientas)  
* [Instalación](#instalación)  
* [Uso](#uso)  
* [Proceso](#proceso)  
* [Ejemplos de código](#ejemplos-de-código)  

## Descripción

El traductor toma gestos o señales de la Lengua de Señas Venezolana y los convierte en texto en tiempo real o casi real, con el fin de promover la inclusión y accesibilidad para personas con dificultades auditivas.

Este sistema puede ser de gran utilidad en contextos educativos, laborales, o sociales para mejorar la interacción y comprensión entre usuarios de LSV y personas que no conocen la lengua de señas.

## Características principales

El modelo logró predecir 30 caracteres de la LSV con una precisión de predicción >85%.

Funciones que se pueden añadir:

- Implementar el proyecto en la nube y crear una API para su uso.
- Ampliar el vocabulario del modelo.
- Incorporar un mecanismo de retroalimentación para que el modelo sea más robusto.

## Demo

aqui iran las imagenes o gifs del demo 

## Screenshots

![screenshot main page](./img/SS1.png)

![screenshot main page](./img/SS2.png)

## Tecnologías y herramientas

- Python
- tensorflow
- Keras
- sklearn
- mediapipe
- OpenCV
- Angular

## Instalación

1. Clona este repositorio en tu máquina local:
   ```bash  
   git clone https://github.com/alezly/Venezuelan-Sign-Language-Translator-to-Text.git  
   ```
2. Navega al directorio del proyecto:
   ```console
   cd Venezuelan-Sign-Language-Translator-to-Text
   ```
3. Frontend (Angular):
  `npm install`

4. Backend (Flask - API):
  ```console
  cd api
  # Crea un entorno virtual (recomendado)
  python -m venv venv
  # Actívalo (Linux/Mac)
  source venv/bin/activate
  # O en Windows
  venv\Scripts\activate

  # Instala las dependencias de Python
  pip install -r requirements.txt```

## Uso

### Frontend (Angular)

Inicia el servidor de desarrollo:

`ng serve`

Abra el navegador en `http://localhost:4200/`.

### Backend (Flask)

Desde la carpeta `api`, ejecuta:

`python app.py`

El servidor Flask estará disponible en `http://localhost:5000/`.

## Proceso

## Ejemplos de código
