@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">

                   <form action="/store" method="post">
{{csrf_field()}}

                       <input type="text" name="fname" class="form-control">
                       <input type="text" name="lname" class="form-control">
                       <input type="number" name="age" class="form-control">
                       <input type="text" name="email" class="form-control">
                       <input type="text" name="mobile" class="form-control">
                       <input type="text" name="url" class="form-control">
                       <input type="password" name="password" class="form-control">
                       <textarea class="form-control" name="body"></textarea>



                       <input type="submit" class="btn btn-danger" value="send">



                    @if (count($errors) > 0)
                        <div class="alert alert-danger">
                            <ul>
                                @foreach ($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                    @endif
                    </form>

                </div>
            </div>
        </div>
    </div>
</div>
@endsection
