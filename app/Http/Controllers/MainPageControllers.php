<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MainPageControllers extends Controller
{
    public function index()
    {

        $adverts = $this->getAdverts();

        $categories = DB::table('categories')->get();
        if (sizeof($categories) > 0 && sizeof($adverts) > 0) {
            return view('welcome', ['categories' => $categories, 'adverts' => $adverts]);
        }
    }
    public function getAdverts()
    {
        $images = DB::table('adverts')->leftjoin('images','adverts.id','=','images.advert_id')->get();
        return $images;
        }


    public function join()
    {
        $images = DB::table('images')->leftjoin('adverts','images.advert_id','=','adverts.id')->get();
        return $images;
    }




//    public function index2($city){
//        $advert=DB::table('adverts as a')
//            ->leftjoin('images','a.Id','=','images.advert_id')
//            ->leftjoin('estates','a.Id','=','estates.advert_id')
//            ->leftjoin('cars','a.Id','=','cars.advert_id')
//            ->get();
//
//        return view("show",['advert'=>$advert,'city'=>$city]);
//    }
//
//    public function showadvert(Request $request){
//        $v1 =new  verta();
//        $advert=DB::table('adverts as a')
//            ->leftjoin('images','a.Id','=','images.advert_id')
//            ->leftjoin('estates','a.Id','=','estates.advert_id')
//            ->leftjoin('cars','a.Id','=','cars.advert_id')->paginate(3);
//
//        return $advert;
//
//    }




}
