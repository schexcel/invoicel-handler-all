<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GuestController extends Controller
{
    public function index()
    {
        //return 'GuestController - Index';
        return view('guest.index');
    }
}