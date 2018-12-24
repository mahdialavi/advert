<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Advert;
class Estate extends Model
{
    protected $table = "estates";
    public $timestamps=false;

    public function Advert(){
        return $this->belongsTo(Advert::class);


    }

}
