# Descripción del proyecto y tecnologías utilizadas.

Desarrollo de una aplicación web para poder administrar los productos de una pqueña tienda. El sistema utiliza las tecnologias de:

- React > Frontend
- Vite  > Frontend
- useForm > Fronted
- axios > Fronted
- sileo > Fronted
- useForm > Fronted
- node.js > Backend
- express > Backend
- postgresSQL > Backend
- pg > Backend 
- dotenv > Backend
- zod   > Frontend y Backend

# Requisitos y comandos para instalar las dependencias de ambos proyectos.

- Requisitos para poder ejecutar el proyecto:
1. Tener un contenedor docker activo con postgres
2. Tener instalado en el equipo DBeaver

# Comandos para instalar las dependencias de ambos proyectos (Backend y Frontend):
- Para ejecutar estos comandos es IMPORTANTE abrir en vs code el proyecto SISTEMA_INVENTARIO

1. Backend:
    - 1.1 >  cd backend
    - 1.2 > npm i
2. Backend:
    - 1.1 > Paso OPCIONAL > si sigue en la carpeta backend desde la terminal cd ..
    - 1.2 > cd frontend
    - 1.3 > npm i

# Pasos para crear la base de datos y ejecutar schema.sql y seed.sql

- Para poder crear la BD es IMPORTANTE tener una conexion en DBeaver

1. Crea una nuevo BD con cualquier nombre de preferencia `Sistema_Inventario`
2. Seleccionar las BD previamente creada por defecto
3. Ejecutar los comandos del archivo schema.sql que se encuentra dentro de la carpeta `database`
4. Ejecutar los comandos del archivo seed.sql que se encuentra dentro de la carpeta `database`
5. OPCIONAL pegar el siguiente comando para verificar la tabla `Select * from productos`

# Variables de entorno necesarias y cómo configurarlas

- Backend
1. Dentro de la carpeta de backend existe un archivo .env.example el cual trae las variables necesarias para el proyecto
2. Crear un nuevo archivo .env y pegar las variables del .env.example
3. Configuracion de variables: 
- 3.1 > port = puerto donde desea correr la app puede ser 8000
- 3.2 > db_host = localhost 
- 3.3 > db_port = por defecto postgresSQL asigna el 5432 si no puede ver en que puerto se ejecuta el contenedor de docker con postgres
- 3.4 > db_user = nombre de usuario de BD creado previamente
- 3.5 > db_password = contraseña de la BD creado previamente
- 3.6 > db_name = nombre de la BD creada previamente

- Frontend
1. Dentro de la carpeta frontend existe un archivo .env.example el cual trae las variables necesarias para el proyecto
2. Crear un nuevo archivo .env y pegar la variable del .env.example
3. Configuracion de variable:
- 3.1 > vite_api_url = http://localhost:`puerto que ingreso previamente`/api

# Comandos para iniciar backend y frontend y sus direcciones locales.
* IMPORTANTE para poder correr el proyecto es necesario tener dos terminales abiertas una dentro de la carpeta `backend` y otra en la carpeta `frontend`

- backend (dentro de la carpeta backend desde la terminal)

1. npm run dev
2. direcciones locales > http://localhost:`puerto que ingreso previamente`/api

- frontend (dentro de la carpeta frontend desde la terminal)

1. npm run dev
2. Usualmente vite da el puerto en la terminal pero normalmente puede ser el http://localhost:5174/ o http://localhost:5173/

#  Listado de endpoints y cómo ejecutar o consultar las pruebas
* Para poder ejecutar las pruebas puede usar postman con los metodos indicados

1. Metodo > `GET` > Para ver todos los registros > http://localhost:`Puerto que ingreso previamente`/api/productos
2. Metodo > `GET` > Para ver un registro especifico > http://localhost:`Puerto que ingreso previamente`/api/productos/`ID del producto que desea ver`/producto
3. Metodo > `POST` > Para poder crear un nuevo registro > http://localhost:`Puerto que ingreso previamente`/api/productos
4. Metodo > `PUT` > Para poder actualizar un producto > http://localhost:`Puerto que ingreso previamente`/api/productos/`ID del producto`/producto
5. Metodo > `DELETE` > Para poder borrar un registro > http://localhost:`Puerto que ingreso previamente`/api/productos/`ID del producto`/producto