<?php

namespace App\Http\Controllers;

use App\Models\BlogArticle;
use App\Models\BlogCategory;
use App\Models\Event;
use App\Models\Product;
use App\Models\ProductCategory;
use App\Models\Psychologist;
use App\Models\TeamMember;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class LandingController extends Controller
{
    /**
     * Generate proper storage URL for images.
     */
    private function imageUrl(?string $path): ?string
    {
        if (!$path) {
            return null;
        }

        // If already a full URL (http/https), return as-is
        if (str_starts_with($path, 'http://') || str_starts_with($path, 'https://')) {
            return $path;
        }

        // Otherwise, generate storage URL
        return Storage::url($path);
    }

    /**
     * Display the landing page.
     */
    public function index(): Response
    {
        $blogArticles = BlogArticle::with('category')
            ->published()
            ->latest()
            ->take(4)
            ->get()
            ->map(fn($article) => [
                'title' => $article->title,
                'date' => $article->formatted_date,
                'image' => $this->imageUrl($article->image),
                'href' => '/blog/' . $article->id,
            ]);

        return Inertia::render('landing/index', [
            'blogPosts' => $blogArticles,
        ]);
    }

    /**
     * Display the products page.
     */
    public function products(): Response
    {
        $categories = ProductCategory::all()->map(fn($cat) => [
            'id' => $cat->slug,
            'label' => $cat->name,
        ]);

        $products = Product::with('category')
            ->active()
            ->ordered()
            ->get()
            ->groupBy('category.slug')
            ->map(fn($items) => $items->map(fn($product) => [
                'id' => $product->id,
                'title' => $product->title,
                'category' => $product->category->name,
                'image' => $this->imageUrl($product->image),
                'description' => $product->description ?? [],
                'contents' => $product->contents ?? [],
                'downloadUrl' => $product->download_url,
            ]));

        return Inertia::render('landing/products', [
            'categories' => $categories,
            'products' => $products,
        ]);
    }

    /**
     * Display the services page.
     */
    public function services(): Response
    {
        $psychologists = Psychologist::active()
            ->ordered()
            ->get()
            ->map(fn($psych) => [
                'name' => $psych->name,
                'title' => $psych->title,
                'image' => $this->imageUrl($psych->image),
                'expertise' => $psych->expertise ?? [],
            ]);

        return Inertia::render('landing/services', [
            'psychologists' => $psychologists,
        ]);
    }

    /**
     * Display the events page.
     */
    public function events(): Response
    {
        $upcomingEvents = Event::active()
            ->upcoming()
            ->take(8)
            ->get()
            ->map(fn($event) => [
                'title' => $event->title,
                'date' => $event->formatted_date,
                'image' => $this->imageUrl($event->image),
                'description' => $event->description,
            ]);

        $pastEvents = Event::active()
            ->past()
            ->take(8)
            ->get()
            ->map(fn($event) => [
                'title' => $event->title,
                'date' => $event->formatted_date,
                'image' => $this->imageUrl($event->image),
            ]);

        return Inertia::render('landing/events', [
            'upcomingEvents' => $upcomingEvents,
            'pastEvents' => $pastEvents,
        ]);
    }

    /**
     * Display the blog page.
     */
    public function blog(): Response
    {
        $categories = BlogCategory::withCount(['articles' => fn($q) => $q->published()])
            ->get()
            ->map(fn($cat) => [
                'name' => $cat->name,
                'slug' => $cat->slug,
                'count' => $cat->articles_count,
            ]);

        $articles = BlogArticle::with('category')
            ->published()
            ->latest()
            ->get()
            ->map(fn($article) => [
                'id' => $article->id,
                'title' => $article->title,
                'excerpt' => $article->excerpt,
                'category' => $article->category->name,
                'date' => $article->formatted_date,
                'readTime' => $article->read_time_text,
                'image' => $this->imageUrl($article->image),
                'author' => $article->author,
            ]);

        return Inertia::render('landing/blog', [
            'categories' => $categories,
            'articles' => $articles,
        ]);
    }

    /**
     * Display the about page.
     */
    public function about(): Response
    {
        $teamMembers = TeamMember::active()
            ->ordered()
            ->get()
            ->map(fn($member) => [
                'name' => $member->name,
                'role' => $member->role,
                'image' => $this->imageUrl($member->image),
            ]);

        return Inertia::render('landing/about', [
            'teamMembers' => $teamMembers,
        ]);
    }

    /**
     * Display a single blog article.
     */
    public function blogShow(BlogArticle $article): Response
    {
        // Ensure article is published
        if (!$article->is_published) {
            abort(404);
        }

        // Get related articles from same category
        $relatedArticles = BlogArticle::with('category')
            ->where('id', '!=', $article->id)
            ->where('blog_category_id', $article->blog_category_id)
            ->published()
            ->latest()
            ->take(3)
            ->get()
            ->map(fn($related) => [
                'id' => $related->id,
                'title' => $related->title,
                'excerpt' => $related->excerpt,
                'category' => $related->category->name,
                'date' => $related->formatted_date,
                'image' => $this->imageUrl($related->image),
            ]);

        return Inertia::render('landing/blog-show', [
            'article' => [
                'id' => $article->id,
                'title' => $article->title,
                'excerpt' => $article->excerpt,
                'content' => $article->content,
                'category' => $article->category->name,
                'categorySlug' => $article->category->slug,
                'date' => $article->formatted_date,
                'readTime' => $article->read_time_text,
                'image' => $this->imageUrl($article->image),
                'author' => $article->author,
            ],
            'relatedArticles' => $relatedArticles,
        ]);
    }
}
