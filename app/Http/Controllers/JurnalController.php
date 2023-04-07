<?php

namespace App\Http\Controllers;

use App\Models\jurnal;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class JurnalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $id = Auth::getUser()->id;
        $data = User::find($id);
        return  Inertia::render('Dashboard', [
            "data" => [
                "jurnals" => $data->jurnal,
            ]
        ]);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            "title" => "required",
            "date" => "required",
            "time" => "required"
        ]);

        $data = [
            "title" => $request->title,
            "date" => $request->date,
            "time" => $request->time,
            "user_id" => Auth::getUser()->id
        ];
        jurnal::create($data);
        return redirect('/dashboard');
    }

    /**
     * Display the specified resource.
     */
    public function show(jurnal $jurnal)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(jurnal $jurnal, $id)
    {
        //
        $jurnal = jurnal::find($id);
        // dd($jurnal);
        return Inertia::render('Dashboard', [
            "p" => $jurnal
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, jurnal $jurnal)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(jurnal $jurnal, $id)
    {
        //
        $jurnal = jurnal::find($id);
        $jurnal->delete();
        return redirect('/dashboard');
    }
}
