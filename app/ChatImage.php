<?php

namespace App;

use const Grpc\CHANNEL_CONNECTING;
use Illuminate\Database\Eloquent\Model;
use App\Chat;

class ChatImage extends Model
{
    protected $table = "chat_images";
    public $timestamps=false;
public function chat(){
    return $this->belongsTo(Chat::class);

}
}
