<?php

use App\Http\Controllers\LandingController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', [LandingController::class, 'index'])->name('home');
Route::get('/produk', [LandingController::class, 'produk'])->name('produk');
Route::get('/layanan', [LandingController::class, 'layanan'])->name('layanan');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
