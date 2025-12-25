<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class BlogCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
    ];

    public function articles(): HasMany
    {
        return $this->hasMany(BlogArticle::class);
    }

    public function getArticleCountAttribute(): int
    {
        return $this->articles()->published()->count();
    }
}
