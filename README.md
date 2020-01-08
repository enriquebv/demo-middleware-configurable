# demo-middleware-configurable

Demo de middleware configurable usando Express.

---

## Requisitos

- Node.js
- Yarn

## Install

    $ git clone https://github.com/enriquebv/demo-middleware-configurable.git
    $ cd demo-middleware-configurable
    $ yarn install

## Lanzar servicio

    $ yarn start

## Lanzar servidor de desarrollo

    $ yarn dev

## Explicación

El código para este ejemplo se encuentra [aquí](https://github.com/enriquebv/demo-middleware-configurable/blob/master/middleware.js), y sirve como demostración para generar middlewares configurables, algo que se podria usar por ejemplo en aplicaciones con sistemas de permisos dinamicos, etc.

Nos proporciona mas mantenibilidad de código gracias a que podemos modificar la configuración del middleware desde la ruta.

### ¿Pero esto no se carga el Single Responsibility Principle (SRP)?

A ver, la idea no es hacer un solo middleware en la aplicación que lo haga todo, y que vayamos modificando su comportamiento desde la configuración. **Eso esta mal.**

La idea es que generemos middlewares atómicos que se encarguen de una sola cosa, por ejemplo, comprobar los permisos del usuario, y desde la configuración del middleware, le digamos que permisos debe contener en sesión (o donde tengamos los permisos) el usuario que visita esa ruta para que pueda continuar con su ejecución.
