## E2E Pruebas Automatizadas Grupo 36
## Integrantes

| Apellidos | Nombres | Correo @uniandes | 
| --------- | --------| ---------------- | 
| Pérez Cerón   |  Daniel Camilo         | dc.perezc1@uniandes.edu.co  |  
| Rojas Estrada |  Cristian Camilo       |  c.rojase@uniandes.edu.co   |  
| Cortes Poveda   |  Jeferson         | j.cortesp2@uniandes.edu.co  |  
| Arias Ariza   |  John Alexander        |  ja.ariasa1@uniandes.edu.co |   


## Prerequisitos

### Instalar Ghost de manera local
siguiendo la documentación oficial ```https://ghost.org/docs/install/local/```
o  siguiendo los pasos descritos en el codelab ``` https://misovirtual.virtual.uniandes.edu.co/codelabs/ghost-local-deployment/index.html```

Al finalizar la instalación se habilitara la aplicación en la url ```http://localhost:2368``` 

Ingrese a la url ```http://localhost:2368/ghost/``` 
diligencie el  formulario para crear un nuevo Sitio en ghost.
tenga especial atencion en los campos "Email Address" y en el campo "Password" ya que estas credenciales las usaremos para la ejecucion de pruebas y deberan ingresar en el archivo ```kraken/properties.json```


Descargar e instalar version de Node JS superior >= 12
https://nodejs.org/en/

Android SDK (ADB) 
Para windows seguir los pasos del siguiente video
https://www.youtube.com/watch?v=tYY7FTV31vM

Para mac  seguir los pasos del siguiente video
https://www.youtube.com/watch?v=daVygBAm1zs

para linux
```sudo apt-get update``` 

```sudo apt-get install android-tools-adb```



## Pasos para instalación

### Kraken 

* Instalar kraken ``` npm install kraken-node -g```

* Clone el repositorio con el comando ```git clone https://github.com/JohnAriasDev/E2EPruebasAutomatizadas.git``` o descargue el zip y descomprímalo.
dentro del proyecto descargado abra el archivo properties.json, alli ingrese la informacion del usuario y contraseña  administrador creado para ghost 

* instale las dependencias con el comando  ```npm install``` desde una terminal 
* ejecutar las pruebas con kraken  ``` npx kraken-node run```

### Cypress 

* Instalar Cypress

* Clone el proyecto y cambie los valores correspondientes en la ruta E2ECypress/cypress/fixtures/datos.json

* en la ruta E2ECypress/ instalar las dependencias con el comando ```npm install```
* para correr las pruebas  ir a la ruta E2ECypress/ y digitar el comando ``` cypress run --headless```

## Funcionalidades
* Logueo : Permite iniciar sesión como administrador de aplicacion, suministrando un usuario y contraseña valida.
* Creación post borrador :Permite la creación de un post borrador ingresando un título y descripcion.
* Creación post con imagen :Permite la creación de un post borrador con informacion de imagen descargada desde listado de galeria.
* Creación post con metadata : Permite la creacion de unpost con informacion de metadata, para motores de busqueda y SEO
* Publicar post programado : Permite publicar un post en una fecha posterior suministrada por cliente.
* Publicar post : Permite publicar un post previamente creado (estado Draft).
* Eliminar post borrador : Permite eliminar post de tipo Draft
* Eliminar post programado : Permite eliminar post de tipo Scheduled
* Eliminar ultimo post generado : Permite eliminar el ultimo post creado
* Crear página : Permite la creación de una página ingresando título de la página y descripción.
* Previsualizar página : Permite realizar la previsualizacion de una pagina previamente creada estado draft
* Publicar página  : Permite la publicación de una pagina.
* Eliminar Página :  Permite la eliminación de una pagina.
* Crear Tag : Permite crear tags para asignacion en post para su clasificación.
* Editar Tag : Permite Editar tags para asignacion en post para su clasificación.
* Listar Tag : Permite listar tags en modulos de post.
* Crear miembros : Permite crear un miembro ingresando información como nombre y correo.
* Crear miembros sin email : Permite validar la no creación de un miembro al no tener correo registrado.
* Editar miembros : Permite editar un miembro ,agregando nueva información o borrando la información que no se requiera.
* Editar miembros sin email Permite editar un miembro ,agregando nueva información o borrando la información que no se requiera.
* Listar miembros : permite interactuar con el listado de miembros. 

## Escenarios de prueba

| # | Nombre de escenario | Descripcion de escenario | 
| --------- | --------| ---------------- | 
| 1  |  Create a Draft Post             | realiza logueo exitoso, crea un post ingresando la informacion de titulo,se  filtra por los estado "draft" y se valida la creación del post  |  
| 2  |  publish a post in draft status  |  realiza logueo exitoso, se ingresa a la lista de post ,  filtra por los post con estado  "draft" y realiza la publicación mediante el boton publicar |  
| 3  |  Create a scheduled post         |  realiza logueo exitoso, crea un post ingresando la informacion de titulo, se programa mediante la funcionalidad schedule, se valida en la lista filtrando por los post con estado scheduled  | 
| 4  |  Create a post with image        | realiza logueo exitoso, crea un post ingresando la informacion de titulo, se agrega imagen del listado de la galeria unsplash suministrada por ghost, se carga al post y se valida la creación en la lista de posts  |  
| 5  |  Create a post with metadata     | realiza logueo exitoso, crea un post ingresando la informacion de titulo, se agrega imagen del listado de la galeria unsplash suministrada por ghost, se carga al post , se da clic en las opciones del post, luego en la seccion de metadatos y se agrega la información del titulo y descripcion para los motores de busqueda  y se valida la creación en la lista de posts  |  
| 6  |  Delete Draft post               |  realiza logueo exitoso,  se ingresa al menu post se filtra la lista de tipo draft y se selecciona el post a borrar ,se da click en las propiedades del post y se borra desde el boton eliminar, se valida en la lista de post su eliminación  |  
| 7  |  Delete scheduled post           |  realiza logueo exitoso,  se ingresa al menu post se filtra la lista de tipo scheduled y se selecciona el post a borrar ,se da click en las propiedades del post y se borra desde el boton eliminar, se valida en la lista de post su eliminación  |  
| 8  |  Delete latest post              |  realiza logueo exitoso,  se ingresa al menu post  y se selecciona el ultimo post generado  ,se da click en las propiedades del post y se borra desde el boton eliminar, se valida en la lista de post su eliminación  |  
| 9  |  Create Page                     |  realiza logueo exitoso,  se ingresa al menu page  y se ingresa la informacion para creación, se valida en la lista la creción de la pagina |  
| 10  |  see the  preview page          |  realiza logueo exitoso,  se ingresa al menu page  y se ingresa la informacion para creación, se da click en la previsualización de la pagina, se valida la información de la creación de la pagina |  
| 11  |  Publish Page                   |  realiza logueo exitoso,  se ingresa al menu page  y se ingresa la informacion para creación, se da click en la publicación de la pagina, se valida la información de la creación de la pagina |  
| 12  |  Delete  Page                   |  realiza logueo exitoso,  se ingresa al menu page se filtra la lista de tipo draft y se selecciona del listado la pagina a borrar ,se da click en las propiedades del post y se borra desde el boton eliminar, se valida en la lista de paginas su eliminación  |  
| 13  |  Create a tag succesfuly        |  realiza logueo exitoso,  se ingresa al menu tag, se da click en nuevo tag  se adiciona la informacion de nombre color y slug , se guarda la informacion desde el botón save y se valida en la lista de tags su creación  |  
| 14  |  Create a member succesfuly     |  realiza logueo exitoso,  se ingresa al menu miembro , se da click en nuevo miembro , se adiciona la informacion de nombre y correo , se guarda la informacion desde el botón save y se valida en la lista de miembros  su creación  |  
| 15  |  Create a member without email  |  realiza logueo exitoso,  se ingresa al menu miembro , se da click en nuevo miembro , se adiciona la informacion de nombre y no se suministra correo , se guarda la informacion desde el botón save y valida con el mensaje de error |  
| 16  |  Edit a member succesfuly       |  realiza logueo exitoso,  se ingresa al menu miembro ,se selecciona un miembro de la lista , se modifica la informacion de nombre, se guarda la informacion desde el botón save y se valida el cambio en la lista de miembros |
| 17  |  Edit a member without  email   |  realiza logueo exitoso,  se ingresa al menu miembro ,se selecciona un miembro de la lista , se modifica la informacion de nombre sin el correo , se guarda la informacion desde el botón save y se valida con el mensaje de error generado |
| 18  |  View the member list successfuly   |  realiza logueo exitoso,  se ingresa al menu miembro ,se visualiza la  lista de miembros creados en cualquier estado  |
| 19  |  Edit a tag successfuly         |  realiza logueo exitoso,  se ingresa al menu tag , se selecciona el primer tag de la lista, se modifica la informacion de name , color, description , se da clic en el boton save y se valida en la lista de tags. |
| 20  |  View the tag list successfuly  |  realiza logueo exitoso,  se ingresa al menu tag , se visualiza la lista de tags creados en cualquier estado |



  
