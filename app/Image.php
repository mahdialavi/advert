<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Advert;
class Image extends Model
{
    protected $table = "images";
    public $timestamps=false;

    public function Advert()
    {
        return $this->belongsTo(Advert::class);
    }
}
