<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Estate;
use App\Car;
use App\User;
use App\Image;
use App\Chat;

class Advert extends Model
{
    protected $table = "adverts";
    public $timestamps=false;

    //after we found relation of databases we should write
    //funtions to make relations with other model that is in relation with like advert and estates
    public function Estates()
    {
        return $this->hasOne(Estates::class);

    }

    public function Car()
    {
        return $this->hasOne(Car::class);

    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function image()
    {
        return $this->hasMany(Image::class);
    }

    public function chat()
    {
        //this has many to many relation with chat
        return $this->belongsToMany(Chat::class);
    }

}
