<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Advert;
use App\Chat;
class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function advert()
    {
        //for example one user can have mahy advert but one advert belongs to one user
        return $this->hasMany(Advert::class);
    }
    public function chat()
    {
        //this has many to many relation with chat
        return $this->belongsToMany(Chat::class);
    }
}
