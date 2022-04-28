<?php

namespace App\Http\Controllers;

use App\Models\Avatarimg;
use Illuminate\Http\Request;

class AvatarimgController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $avatarimgs = Avatarimg::all();
        return response()->json($avatarimgs);
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
        $imagesName = [];
        $response = [];
        $request->validate([
            'user_name' => 'required',
            'images' => 'required',
                'images.*' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);
        if($request->has('images')) {
            foreach($request->file('images') as $image) {
                $filename = time().rand(10,100). '.'.$image->getClientOriginalExtension();
                $image->move(public_path('uploads/'),$filename) ;              
                $avatarimg = Avatarimg::create([
                    'image_name' => $filename,
                    'user_name' => $request -> input('user_name'),
                ]);
            }

            $response["status"] = "successs";
            $response["message"] = "Success! image(s) uploaded";
        }

        else {
            $response["status"] = "failed";
            $response["message"] = "Failed! image(s) not uploaded";
        }
        return response()->json($response);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Avatarimg  $avatarimg
     * @return \Illuminate\Http\Response
     */
    public function show(Avatarimg $avatarimg)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Avatarimg  $avatarimg
     * @return \Illuminate\Http\Response
     */
    public function edit(Avatarimg $avatarimg)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Avatarimg  $avatarimg
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Avatarimg $avatarimg)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Avatarimg  $avatarimg
     * @return \Illuminate\Http\Response
     */
    public function destroy(Avatarimg $avatarimg)
    {
        //
    }
}
