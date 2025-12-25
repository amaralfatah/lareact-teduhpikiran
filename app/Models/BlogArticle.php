<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Builder;

class BlogArticle extends Model
{
    use HasFactory;

    protected $fillable = [
        'blog_category_id',
        'title',
        'excerpt',
        'content',
        'image',
        'author',
        'read_time',
        'is_published',
        'published_at',
    ];

    protected function casts(): array
    {
        return [
            'is_published' => 'boolean',
            'published_at' => 'datetime',
        ];
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(BlogCategory::class, 'blog_category_id');
    }

    public function scopePublished(Builder $query): Builder
    {
        return $query->where('is_published', true)
            ->whereNotNull('published_at')
            ->where('published_at', '<=', now());
    }

    public function scopeLatest(Builder $query): Builder
    {
        return $query->orderByDesc('published_at');
    }

    public function getFormattedDateAttribute(): string
    {
        return $this->published_at?->format('d M Y') ?? '-';
    }

    public function getReadTimeTextAttribute(): string
    {
        return $this->read_time . ' min';
    }
}
