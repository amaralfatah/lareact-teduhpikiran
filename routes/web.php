<?php

use App\Http\Controllers\LandingController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', [LandingController::class, 'index'])->name('home');
Route::get('/products', [LandingController::class, 'products'])->name('products');
Route::get('/services', [LandingController::class, 'services'])->name('services');
Route::get('/events', [LandingController::class, 'events'])->name('events');
Route::get('/blog', [LandingController::class, 'blog'])->name('blog');
Route::get('/blog/{article}', [LandingController::class, 'blogShow'])->name('blog.show');
Route::get('/about', [LandingController::class, 'about'])->name('about');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
