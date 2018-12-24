<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Advert;
class Car extends Model
{
    protected $table = "cars";
    public $timestamps=false;

    public function Advert()
    {
        return $this->belongsTo(Advert::class);
    }
}

