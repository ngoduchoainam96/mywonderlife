<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/posts', 'ImageController@index')->name('posts.all');

Route::post('/posts', 'ImageController@store')->name('posts.store');

Route::get('/coverimgs', 'CoverimgController@index')->name('coverimgs.all');

Route::post('/coverimgs', 'CoverimgController@store')->name('coverimgs.store');

Route::get('/avatarimgs', 'AvatarimgController@index')->name('avatarimgs.all');

Route::post('/avatarimgs', 'AvatarimgController@store')->name('avatarimgs.store');

Route::get('/posts/{post}', 'PostController@show')->name('posts.show');

Route::put('/posts/{post}', 'PostController@update')->name('posts.update');

Route::delete('/posts/{post}', 'PostController@destory')->name('posts.destroy');

Route::get('/user0s', 'User0Controller@index')->name('user0s.all');

Route::get('/user0s/{user0}', 'User0Controller@show')->name('use0s.show');

Route::post('/user0s', 'User0Controller@store')->name('user0s.store');


