<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Advert;
use App\ChatImage;
class Chat extends Model
{
    protected $table = "chats";
    public $timestamps=false;

    public function user()
    {
        //this has many to many relation with user
        return $this->belongsToMany(User::class);
    }

    public function Advert()
    {
        return $this->belongsToMany(Advert::class);
    }
public function Chatimage(){
    return $this->hasMany(Chatimage::class);

}

}
