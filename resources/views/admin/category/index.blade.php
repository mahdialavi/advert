@extends('layouts.adminLayouts')

@section('content')

    <div class="card">
        <div class="card-header" style="text-align: center"><h3>اضافه کردن دسته</h3></div>
    <section class="col-lg-4" xmlns:v-on="http://www.w3.org/1999/xhtml">

        <div class="panel panel-default">


            <div class="panel-heading" style="text-align: center;"><h3>حذف دسته</h3></div>

            <div style="">
                <div class="panel-body">


                    <input type="text" name="" class="form-control"
                           placeholder="عنوان دسته خود را وارد کنید" v-model="Namecategory">

                    <button type="button" class="btn btn-info" v-on:click="addCategory()">حذف دسته</button>

                    <div>


                    </div>

                </div>


            </div>
        </div>


    </section>

    <section class="col-lg-4">

        <div class="panel panel-default">

            <div class="panel-heading"><h3>اضافه کردن زیر دسته</h3></div>

            <div style="">


                <div class="panel-body">

                    <div>

                        <div class="form-group">

                            <select class="form-control">
                                <option></option>
                            </select>
                            <div class="form-group">

                                <select class="form-control">
                                    <option></option>

                                </select>
                            </div>
                            <div class="form-group">
                                <button type="button" class="btn btn-danger">ذخیره</button>
                            </div>
                        </div>

                    </div>

                </div>


            </div>
        </div>

    </section>
    </div>



@endsection
