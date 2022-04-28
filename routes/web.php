<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/{path}', function () {
    return view('welcome');
});

Route::get('/userdetail/{path}', function () {
    return view('welcome');
});

Route::resource('items', 'ItemController');

Route::get('/redirect/{social}', 'App\Http\Controllers\SocialAuthController@redirect');
Route::get('/callback/{social}', 'App\Http\Controllers\SocialAuthController@callback');






