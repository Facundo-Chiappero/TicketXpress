## ESPAÑOL:

🚧 **Trabajo en progreso** – Este proyecto aún está en desarrollo.

# Plataforma de Entradas con Next.js

Este es un proyecto de **venta de entradas para eventos** desarrollado con **Next.js**. Permite a los usuarios comprar entradas, ver sus eventos próximos y a los administradores gestionar eventos (crear, editar y eliminar).

## Características

- **Autenticación con NextAuth**:
  - Iniciar sesión con **Google** o con **email + contraseña**.
- **Compra de entradas** usando la API de **Mercado Pago**.
- **Perfil de usuario**: los usuarios pueden ver los eventos que compraron y que aún no se realizaron.
- **Panel de administrador**: permite crear, editar y eliminar eventos.
- **Interfaz moderna y responsive** con Tailwind CSS.
- **Base de datos gestionada con Prisma**.

## Tecnologías usadas

- **Next.js**: Framework para React con renderizado del lado del servidor.
- **TypeScript**: Tipado estático para JavaScript.
- **NextAuth.js**: Autenticación con múltiples proveedores.
- **Prisma**: ORM para interactuar con la base de datos.
- **Tailwind CSS**: Framework de estilos utilitario.
- **Mercado Pago API**: Pasarela de pagos para realizar compras seguras.

## Instalación

Desde una terminal o cmd, ejecuta los siguientes comandos:

```bash
git clone https://github.com/Facundo-Chiappero/events-manager.git
cd events-manager
npm install
```

Para tener una base de datos postgreSQL puedes usar la pagina [instagres.com](instagres.com) o la de tu preferencia, una vez tengas el connection string en un archivo en la raiz llamado `.env` debes incluir lo siguiente:

```bash
DATABASE_URL=tu-base-de-datos-postgreSQL
```

Luego de eso puedes correr

```bash
npx prisma generate
npx prisma migrate dev
npm run dev
```

## ENGLISH:

> 🚧 **Work in progress** – This project is still under development.

# Ticket Platform with Next.js

This is a **ticket sales platform for events** built with **Next.js**. It allows users to purchase tickets, view upcoming events, and enables administrators to manage events (create, edit, and delete).

## Features

- **Authentication with NextAuth**:
  - Sign in using **Google** or **email + password**.
- **Ticket purchases** using the **Mercado Pago API**.
- **User profile**: users can see the events they've purchased and that haven't taken place yet.
- **Admin panel**: allows creation, editing, and deletion of events.
- **Modern and responsive UI** with Tailwind CSS.
- **Database management with Prisma**.

## Technologies used

- **Next.js**: React framework with server-side rendering.
- **TypeScript**: Static typing for JavaScript.
- **NextAuth.js**: Authentication with multiple providers.
- **Prisma**: ORM to interact with the database.
- **Tailwind CSS**: Utility-first CSS framework.
- **Mercado Pago API**: Payment gateway for secure purchases.

## Installation

From a terminal or command prompt, run the following commands:

```bash
git clone https://github.com/Facundo-Chiappero/events-manager.git
cd events-manager
npm install
```

To set up a PostgreSQL database, you can use instagres.com or any provider of your choice. Once you have the connection string, create a `.env` file in the root directory and include the following:

```bash
DATABASE_URL=your-postgreSQL-database-url
```

After that, run the following:

```bash
npx prisma generate
npx prisma migrate dev
npm run dev
```
