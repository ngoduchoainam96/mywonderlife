<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coverimg extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_name', "image_name"
    ];
}
