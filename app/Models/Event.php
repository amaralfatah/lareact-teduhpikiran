<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'image',
        'event_date',
        'description',
        'is_active',
    ];

    protected function casts(): array
    {
        return [
            'event_date' => 'date',
            'is_active' => 'boolean',
        ];
    }

    public function scopeActive(Builder $query): Builder
    {
        return $query->where('is_active', true);
    }

    public function scopeUpcoming(Builder $query): Builder
    {
        return $query->where('event_date', '>=', now()->startOfDay())
            ->orderBy('event_date');
    }

    public function scopePast(Builder $query): Builder
    {
        return $query->where('event_date', '<', now()->startOfDay())
            ->orderByDesc('event_date');
    }

    public function getFormattedDateAttribute(): string
    {
        return $this->event_date?->translatedFormat('F Y') ?? '-';
    }
}
