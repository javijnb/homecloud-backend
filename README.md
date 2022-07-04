# HOMECLOUD - BACKEND

## Índice

1. [Descripción](#overview)
3. [Configuración](#configuration)
4. [Pruebas en local](#local)
6. [Despliegue](#deployment)
8. [Postman](#postman)

## <a name="overview">Descripción</a>

Este repositorio contiene toda la infraestructura perteneciente al backend del proyecto Homecloud desarrollado por @javijnb. Permite recibir peticiones de creación, modificación, eliminación y descarga de ficheros y carpetas de la máquina remota que aloje Homecloud.

## <a name="configuration">Configuración</a>

Lista de directorios
- **docker**: contiene los ficheros para crear la imagen Docker del backend así como el fichero docker-compose.
- **postman**: contiene las peticiones HTTP en formato JSON para probar la API del backend en Postman.
- **node_modules**: contiene los paquetes NPM que necesita este proyecto de NodeJS
- **routes**: contiene los ficheros JS que llevan a cabo cada una de las funcionalidades de la API:
    - *content.js*: devuelve el contenido de un directorio solicitado
    - *dir.js*: permite crear una nueva carpeta en el directorio especificado
    - *download.js*: devuelve el contenido del fichero solicitado
    - *upload.js*: permite subir un fichero a una ruta solicitada


## <a name="local">Pruebas en local</a>
Por defecto, el servicio se iniciará en el puerto 9000 donde atenderá las peticiones HTTP.

Para lanzar el backend, desde la carpeta raíz:

```bash
$ nodemon server
```

## <a name="deployment">Despliegue</a>

## <a name="postman">Postman</a>
En la carpeta *postman/* se encuentra las peticiones HTTP en formato JSON para probar el correcto funcionamiento de la API haciendo uso de la aplicación Postman. Para incorporarlas, seleccionar *File > Importar* en Postman.
