<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\GuestController;
use Illuminate\Support\Facades\Route;

Route::get('/', [GuestController::class, 'index'])
    ->name('home');

Route::prefix('admin')->group(function () {
    Route::name('admin.')->group(function () {
        //Route::middleware('auth')->group(function () {

            Route::get('/', [AdminController::class, 'index'])
                ->name('home');

            Route::get('/users', function () {
                return 'user management';
            })->name('users');

        //});
    });
});


//AUTH
Route::middleware('guest')->group(function () {
    //login
    Route::get('login', [AuthController::class, 'loginForm'])
        ->name('loginForm');
    Route::post('login', [AuthController::class, 'login'])
        ->name('login');

    //register

    Route::get('register', [AuthController::class, 'registerForm'])
        ->name('registerForm');
    Route::post('register', [AuthController::class, 'register'])
        ->name('register');

});

//logout
Route::any('logout', [AuthController::class, 'logout'])
    ->name('logout');
