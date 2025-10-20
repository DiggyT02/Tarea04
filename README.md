#Procedimientos

```
1.Requisitos

Node.js (versión 14 o superior)

MySQL (versión 5.7 o superior)

npm (gestor de paquetes de Node.js)
```
```
2.Instalación

Crear la estructura de archivos con:

server.js

controller.js

routes.js

.env
```

3.Configurar la base de datos:


Crea la base de datos animales_db y la tabla animales 
```
CREATE DATABASE animales_db;
USE animales_db;

CREATE TABLE animales (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    especie VARCHAR(50) NOT NULL,
    edad INT NOT NULL
) ENGINE = INNODB;
```

```
4.Ejecuta:

npm install
```
```
5.Configurar variables de entorno:

Crea un archivo .env 

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=animales_db
PORT=3000
```
```
6.Iniciar el servidor:

nodemon server
```
```
7.Estructura del Proyecto


server.js: Archivo principal que configura el servidor Express y conecta las rutas.



controller.js: Contiene la lógica de negocio para las operaciones CRUD.



routes.js: Define los endpoints de la API.



.env: Almacena las variables de configuración 
```