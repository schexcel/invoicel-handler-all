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