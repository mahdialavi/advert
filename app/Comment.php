<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Post;
class Comment extends Model
{
    protected $table = "comments";
    public $timestamps=false;

    public function Post(){
        return $this->belongsTo(Post::class);

    }
}
