<?php



Route::get('/', 'MainPageControllers@index');

Route::get('/home', 'HomeControllers@index')->name('home');

//Auth::routes();

Route::group(['prefix'=>'admin'], function () {

    Route::get('category','CategoryControllers@index');
    Route::get('index','AdminControllers@index');
    Route::get('getcategory','CategoryControllers@getcategory');
});
Route::post('addcategory', 'CategoryControllers@addcategory');

Route::post('remove', 'CategoryControllers@remove');