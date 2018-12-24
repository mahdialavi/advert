<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CategoryControllers extends Controller
{
    public function index()
    {
        return view('admin.category.index');
    }
     public function addcategory(Request $request){

        return $request->Namecategory;
     }

    public function remove(Request $request)
    {
        $id=$request->id;
        $remove = Category::find($id)->delete();
        if ($remove) {
            return "ok";
        }
    }

    public function getcategory()
    {
        return category::all();
    }
}
