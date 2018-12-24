@extends('layouts.adminLayouts')
@section('content')

    <div class="card">

    <div class="col-lg-12">
        <div class="col-lg-3">
            <div class="content">
                <i class="fas fa-user"></i>
                <p>1</p>
                <span>تعداد کل کاربران</span>
            </div>

        </div>
        <div class="col-lg-3">
            <div class="content">
                <i class="fas fa-user"></i>
                <p>1</p>
                <span>تعداد کل تبلیغات</span>
            </div>

        </div>
        <div class="col-lg-3">
            <div class="content">
                <i class="fas fa-user"></i>
                <p>1</p>
                <span>تعداد کل سفارشات</span>
            </div>

        </div>

    </div>

    <div class="col-lg-12">

        <div class="panel panel-default" style="margin-top: 30px; text-align: center;">
            <h3>جدیدترین سفارشات</h3>

            <table class="table table-striped" style="margin-top: 50px">
                <thead>
                <tr>
                    <th>نام سفارش</th>
                    <th>تاریخ خرید</th>
                    <th>شماره پیگیری</th>
                    <th>مبلغ</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>

                </tr>

                </tbody>

            </table>


        </div>


    </div>
    </div>

@endsection


