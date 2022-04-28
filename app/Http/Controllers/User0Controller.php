<?php

namespace App\Http\Controllers;

use App\Models\User0;
use Illuminate\Http\Request;

class User0Controller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user0s = User0::all();
        return response()->json($user0s);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'fullname' => 'required',
            'username' => 'required',
            'password' => 'required',
            'password0' => 'required',
        ]);
        $user0 = User0::create([
            'fullname' => $request -> input('fullname'),
            'username' => $request -> input('username'),
            'password' => $request -> input('password'),
            'password0' => $request -> input('password0'),
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User0  $user0
     * @return \Illuminate\Http\Response
     */
    public function show(User0 $user0)
    {
        return $user0;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User0  $user0
     * @return \Illuminate\Http\Response
     */
    public function edit(User0 $user0)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User0  $user0
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User0 $user0)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User0  $user0
     * @return \Illuminate\Http\Response
     */
    public function destroy(User0 $user0)
    {
        //
    }
}
