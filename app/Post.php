<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Comment;
class Post extends Model
{
    protected $table = "posts";
    public $timestamps=false;

    public function comment()
    {
        return $this->hasMany(Comment::class  );
    }
}
