<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class LandingController extends Controller
{
    /**
     * Display the landing page.
     */
    public function index(): Response
    {
        return Inertia::render('landing/index');
    }

    /**
     * Display the products page.
     */
    public function products(): Response
    {
        return Inertia::render('landing/products');
    }

    /**
     * Display the services page.
     */
    public function services(): Response
    {
        return Inertia::render('landing/services');
    }

    /**
     * Display the events page.
     */
    public function events(): Response
    {
        return Inertia::render('landing/events');
    }

    /**
     * Display the blog page.
     */
    public function blog(): Response
    {
        return Inertia::render('landing/blog');
    }

    /**
     * Display the about page.
     */
    public function about(): Response
    {
        return Inertia::render('landing/about');
    }
}
