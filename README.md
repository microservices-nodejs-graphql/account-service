# AccountService

<p style='text-align: justify;'> Este es un servicio desarrollado con NodeJs en su versión 18.12.1 y NestJs v9.0.0, se encarga de la gestión de cuentas de clientes. El código sigue los principios <b>SOLID</b> y para el desarrollo presenta una arquitectura hexagonal, este servicio se comunica con otro servicio llamado <b>customer-service</b>, tambien se hace uso de <b>Kafka</b> para el envío de mensajes por donde se envian los objetos para su respectiva sincronización.</p>

## Broker Kafka

<p style="text-align: justify"> Como se indico anteriormente la aplicación necesita de un broker de mensajeria para este caso particular es <b>Kafka</b> para ello necesita levantar un broker y modificar la conección en el archivo <b>dev.env</b></p>

## Servidor de desarrollo

<p style='text-align: justify;'> Primero debemos clonar el código del <a href="https://github.com/microservices-nodejs-graphql/account-service">repositorio</a> y con una terminal instalar las dependencias</p> 

```sh
npm i
```

<p style='text-align: justify;'> Luego debemos ejecutar</p> 

```sh
npm run serve
```

<p style='text-align: justify;'> Esto levantará un servidor de desarrollo localhost en el puerto 3001, este puede ser cambiado en el archivo <b>dev.env</b> </p> 


## Construcción

<p style='text-align: justify;'> Los archivos generados a través del proceso de contrucción se almacenan en la carpeta <strong>dist</strong>, para construir el proyecto debemos ejecutar el siguiente comando en una terminal</p> 


```sh
npm run build
```