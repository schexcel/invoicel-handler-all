GUEST INDEX

<hr>

<a href="{{ route('loginForm') }}">Belépés</a>
<br><br>
@if(Route::has('registerForm'))
    <a href="{{ route('registerForm') }}">Regisztráció</a>
@endif

