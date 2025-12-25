<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Psychologist extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'title',
        'image',
        'expertise',
        'is_active',
        'sort_order',
    ];

    protected function casts(): array
    {
        return [
            'expertise' => 'array',
            'is_active' => 'boolean',
        ];
    }

    public function scopeActive(Builder $query): Builder
    {
        return $query->where('is_active', true);
    }

    public function scopeOrdered(Builder $query): Builder
    {
        return $query->orderBy('sort_order')->orderBy('name');
    }
}
