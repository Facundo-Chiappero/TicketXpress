## ESPAÑOL:

# Plataforma de Entradas con Next.js

Este es un proyecto de **venta de entradas para eventos** desarrollado con **Next.js**. Permite a los usuarios registrarse, iniciar sesión, comprar entradas y ver sus eventos próximos. También incluye un panel de administración para gestionar los eventos.

> ⚠️ Esta web es un **proyecto educativo** y **no representa un e-commerce real**. Los eventos son ficticios y no se llevarán a cabo.  
> 💸 Las compras realizadas utilizan **dinero real** mediante la API de Mercado Pago, por lo tanto **no se aceptan reclamos, devoluciones ni compensaciones** por el uso indebido de la plataforma.

## Características

- **Autenticación con NextAuth.js**:
  - Iniciar sesión con **Google** o con **email + contraseña**.
  - Registro de usuarios con **nombre, email y contraseña**.
  - Verificación de **reCAPTCHA** para login y registro con credenciales.
- **Compra de entradas** mediante la **API de Mercado Pago**:
  - Redirección a páginas según el estado del pago: aprobado, pendiente o rechazado.
  - En caso de pago aprobado, el usuario recibe un **correo con un código QR** de la entrada.
- **Visualización de eventos**:
  - Cualquier usuario (logueado o no) puede ver eventos disponibles.
  - Solo los usuarios autenticados pueden realizar compras.
- **Perfil de usuario**:
  - Visualización de entradas compradas para eventos futuros.
  - Si el usuario inició sesión con Google, puede generar una contraseña para usar credenciales luego.
  - Los usuarios con contraseña pueden editar su nombre, correo, contraseña y foto de perfil.
  - Si no tiene foto y se conecta con Google, se le asigna la foto de Google.
- **Panel de administración** (solo para usuarios con rol admin):
  - Crear nuevos eventos.
  - Editar o eliminar eventos existentes.
  - Acceso a todas las funciones disponibles para usuarios comunes.
- **Generación de QR** usando [api.qrserver.com](https://api.qrserver.com):
  - El QR es ilustrativo y no redirige a ningún sitio real.

## Tecnologías usadas

- **Next.js** – Framework React con soporte para SSR y API routes.
- **TypeScript** – Tipado estático para mayor robustez.
- **NextAuth.js** – Manejo de autenticación moderna y flexible.
- **Prisma** – ORM para manejar la base de datos PostgreSQL.
- **Zustand** – Estado global liviano y eficaz.
- **Tailwind CSS** – Estilos modernos con clases utilitarias.
- **Mercado Pago API** – Integración de pagos segura.
- **PostgreSQL** – Base de datos relacional potente y escalable.

## Instalación

Clona el repositorio y entra al proyecto:

```bash
git clone https://github.com/Facundo-Chiappero/TicketXpress.git
cd TicketXpress
npm install
```

## Configuración del entorno

1. Crea un archivo .env en la raíz del proyecto y agrega tu string de conexión a PostgreSQL:

```bash
DATABASE_URL=tu-base-de-datos-postgreSQL
```

> Puedes usar servicios como [instagres.com](https://instagres.com) o cualquier otro proveedor.

2. Ejecuta las migraciones y levanta el proyecto:

```bash
npx prisma generate
npx prisma migrate dev
npm run dev
```

### Variables de entorno necesarias

Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables:

<!-- utilicé py y no env porque se ven mejor los comentarios -->

```py
# Mercado Pago (desarrollo)
NEXT_PUBLIC_MP_PUBLIC_KEY="tu_clave_publica_de_mercado_pago"
NEXT_PUBLIC_MP_ACCESS_TOKEN="tu_token_de_acceso_de_mercado_pago"

# URL de la app (ajustar según el entorno)
NEXT_PUBLIC_BASE_URL="https://tu-url-deployada.com"
NEXTAUTH_URL="https://tu-url-deployada.com" # ⚠️ Asegúrate de que coincida con la URL en Google Console y reCAPTCHA

# Base de datos (PostgreSQL)
DATABASE_URL="postgresql://usuario:contraseña@host:puerto/nombre_db?sslmode=require"

# Google (auth + reCAPTCHA)
GOOGLE_CLIENT_ID="tu_google_client_id"
GOOGLE_CLIENT_SECRET="tu_google_client_secret"
NEXT_PUBLIC_GOOGLE_SITE_KEY="tu_google_recaptcha_site_key"
RECAPTCHA_SECRET_KEY="tu_google_recaptcha_secret_key"

# Cloudinary (para subir imágenes)
CLOUDINARY_CLOUD_NAME="tu_cloud_name"
CLOUDINARY_API_KEY="tu_cloudinary_api_key"
CLOUDINARY_API_SECRET="tu_cloudinary_api_secret"

# NextAuth secret
AUTH_SECRET="tu_auth_secret"

# Resend (servicio de emails)
RESEND_API_KEY="tu_resend_api_key" # ⚠️ Verifica también las URLs configuradas en Resend
```

## ENGLISH:

# Ticket Platform with Next.js

This is a **ticket-selling platform for events** built with **Next.js**. It allows users to register, log in, purchase tickets, and view their upcoming events. It also includes an admin panel to manage events.

> ⚠️ This website is an **educational project** and **does not represent a real e-commerce**. All events are fictional and will not take place.  
> 💸 Purchases are made using **real money** through the Mercado Pago API, so **no claims, refunds, or compensations** will be accepted for misuse of the platform.

## Features

- **Authentication with NextAuth.js**:
  - Log in using **Google** or with **email + password**.
  - Register with **name, email, and password**.
  - **reCAPTCHA** verification required for login and registration with credentials.
- **Ticket purchase** via **Mercado Pago API**:
  - Users are redirected to different pages depending on the payment status: approved, pending, or rejected.
  - If payment is approved, the user receives an **email with a QR code** for the ticket.
- **Event viewing**:
  - Any user (logged in or not) can browse available events.
  - Only authenticated users can make purchases.
- **User profile**:
  - View purchased tickets for upcoming events.
  - If the user signed in with Google, they can generate a password to use credentials later.
  - Users with passwords can update their name, email, password, and profile picture.
  - If the user has no profile picture and logs in with Google, the Google picture is used.
- **Admin panel** (for users with admin role only):
  - Create new events.
  - Edit or delete existing events.
  - Access to all features available to regular users.
- **QR code generation** using [api.qrserver.com](https://api.qrserver.com):
  - QR codes are illustrative and do not redirect to any real content.

## Technologies used

- **Next.js** – React framework with SSR and API routes.
- **TypeScript** – Static typing for better reliability.
- **NextAuth.js** – Flexible and modern authentication management.
- **Prisma** – ORM to handle PostgreSQL database.
- **Zustand** – Lightweight and efficient state management.
- **Tailwind CSS** – Modern utility-first CSS framework.
- **Mercado Pago API** – Secure payment gateway integration.
- **PostgreSQL** – Powerful and scalable relational database.

## Installation

Clone the repository and navigate to the project:

```bash
git clone https://github.com/Facundo-Chiappero/TicketXpress.git
cd TicketXpress
npm install
```

## Environment Setup

1. Create a .env file at the root of the project and add your PostgreSQL connection string:

```bash
DATABASE_URL=your-postgresql-connection-url
```

> You can use services like instagres.com or any provider of your choice.

2. Run the migrations and start the project:

```bash
npx prisma generate
npx prisma migrate dev
npm run dev
```

## Required Environment Variables

2. Create a .env file in the project root and add the following variables:

<!-- I used py instead of env because comments are displayed better -->

```py
# Mercado Pago (development)
NEXT_PUBLIC_MP_PUBLIC_KEY="your_mercado_pago_public_key"
NEXT_PUBLIC_MP_ACCESS_TOKEN="your_mercado_pago_access_token"

# App URL (adjust for your environment)
NEXT_PUBLIC_BASE_URL="https://your-deployed-url.com"
NEXTAUTH_URL="https://your-deployed-url.com" # ⚠️ Make sure it matches the URL in Google Console and reCAPTCHA

# Database (PostgreSQL)
DATABASE_URL="postgresql://user:password@host:port/database_name?sslmode=require"

# Google (auth + reCAPTCHA)
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"
NEXT_PUBLIC_GOOGLE_SITE_KEY="your_google_recaptcha_site_key"
RECAPTCHA_SECRET_KEY="your_google_recaptcha_secret_key"

# Cloudinary (for image uploads)
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_cloudinary_api_key"
CLOUDINARY_API_SECRET="your_cloudinary_api_secret"

# NextAuth secret
AUTH_SECRET="your_auth_secret"

# Resend (email service)
RESEND_API_KEY="your_resend_api_key" # ⚠️ Also check the configured URLs in Resend
```
