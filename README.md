# Invoice Handler Project Setup Guide

This README provides a detailed guide on how to set up and run the Invoice Handler project, including backend and frontend installations.

## Prerequisites

Before you begin, ensure you have XAMPP installed to use Apache and MySQL servers. You will also need Composer for backend dependency management and Node.js with npm for managing frontend dependencies.

## Installation Steps

### 1. Download Source File

Download the following file: [invoice_handler_20240505_v0.1.zip] (#)

- Backend folder: [\backend](#)
- Database file: [\database\database\invoice_handler-20240504.sql](#)
- Frontend folder: [\frontend] (#)

### 2. Directory Setup

Create a base directory for the project:
C:\vizsga03

### 3. Unpack Files
Unpack the [invoice_handler_20240505_v0.1.zip] file into the [C:\vizsga03] directory.

### 4. Start XAMPP
Launch XAMPP Control Panel and start the Apache and MySQL services.

### 5. Database Setup
Open your web browser and go to phpMyAdmin at http://localhost/phpmyadmin.
Create a new database named invoice_handler.
Import the invoice_handler-20240504.sql file into your database through the phpMyAdmin import tab at Database Import.

### 6. Backend Installation
Install backend dependencies:

Terminal1: 
	cd C:\vizsga03\backend
	composer install

### 7. Run Migrations
Execute database migrations to set up your database schema:

Terminal1:
	php artisan migrate


### 8. Run Backend
Start the backend server:

Terminal:
	cd C:\vizsga03\backend
	php artisan serve
	
The backend is now accessible at http://127.0.0.1:8000/invoiceheads

### 9. Frontend Installation
Set up frontend dependencies:

Terminal2:
	cd C:\vizsga03\frontend
	npm install
	
### 10. Run Frontend
Start the frontend development server:

Terminal2
	cd C:\vizsga03\frontend
	npm run dev

The frontend is now accessible at http://localhost:5173.

### 11. Shutdown Procedures
  To stop the frontend:
	Press CTRL+C in the frontend terminal window.
	Confirm with YES.
  To stop the backend:
	Press CTRL+C in the backend terminal window.
	Confirm with YES.

## Additional Notes
This guide assumes that you are using Windows OS. If you encounter any issues during setup, ensure all paths are correctly specified and that all prerequisites are properly installed.

------------------------------HUN----------------------------------------------------
# Invoice Handler Project telepítési útmutató

Ez a README részletes útmutatót nyújt a Invoice Handler Project beállításához és futtatásához, beleértve a backend és frontend telepítéseket is.

## Előfeltételek

Mielőtt elkezdené, győződjön meg arról, hogy az XAMPP telepítve van az Apache és a MySQL kiszolgálók használatához. Szüksége lesz a Composerre a backend-függőségek kezeléséhez és a Node.js-re az npm-mel a frontend-függőségek kezeléséhez.

## Telepítési lépések

### 1. Töltse le a forrásfájt

Töltse le a következő fájlt: [invoice_handler_20240505_v0.1.zip] (#)

- Backend mappa: [\backend](#)
- Database fájl: [\database\database\invoice_handler-20240504.sql](#)
- Frontend mappa: [\frontend] (#)

### 2. Könyvtárak létrehozása

Hozzon létre egy alapkönyvtárat a projekthez:
C:\vizsga03

### 3. Csomagolja ki a fájlokat
Csomagolja ki az [invoice_handler_20240505_v0.1.zip] fájlt a [C:\vizsga03] könyvtárba.

### 4. Indítsa el az XAMPP-t
Indítsa el az XAMPP Vezérlőpultot, és indítsa el az Apache és a MySQL szolgáltatásokat.

### 5. Adatbázis beállítása
Nyissa meg webböngészőjét, és lépjen a phpMyAdmin oldalra a http://localhost/phpmyadmin címen.
Hozzon létre egy új adatbázist invoice_handler néven.
Importálja az C:\vizsga03\database\invoice_handler-20240504.sql fájlt az adatbázisába az Adatbázis importálás phpMyAdmin importlapján keresztül.

### 6. Backend telepítés
Telepítse a háttérfüggõségeket:

terminál#1:
  cd C:\vizsga03\backend
  composer install

### 7. Futtassa az áttelepítéseket (migrations)
Hajtsa végre az adatbázis-áttelepítéseket az adatbázisséma beállításához:

terminál#1:
 php artisan migrate

### 8. Futtassa a backend-et
Indítsa el a backend-kiszolgálót:

Terminál#1:
  cd C:\vizsga03\backend
  php artisan serve

A backend mostantól elérhető a http://127.0.0.1:8000/invoiceheads címen.

### 9. Frontend telepítés
frontend függőségek beállítása:

terminál#2:
  cd C:\vizsga03\frontend
  npm install

### 10. Futtassa a Frontendet
Indítsa el a frontend fejlesztőkiszolgálót:

terminál#2:
  cd C:\vizsga03\frontend
  npm run dev

A frontend mostantól elérhető a http://localhost:5173 címen.

### 11. Leállítási eljárások
  A frontend leállítása:
	Nyomja meg a CTRL+C billentyűkombinációt a frontend terminál#2 ablakában.
	Erősítse meg a YES gombbal.
  A backend leállítása:
	Nyomja meg a CTRL+C billentyűkombinációt a backend terminál#1 ablakában.
	Erősítse meg a YES gombbal.

## További megjegyzések
Ez az útmutató feltételezi, hogy Windows operációs rendszert használ. Ha a telepítés során problémákat tapasztal, győződjön meg arról, hogy az összes elérési út helyesen van megadva, és minden előfeltétel megfelelően telepítve van.
