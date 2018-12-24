<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>سایت لیلام</title>
    <link rel="stylesheet" type="text/css" href="/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="/css/app.css">
    <link rel="stylesheet" type="text/css" href="/css/admin.css">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
          integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">

</head>
<body>
@include('layouts.header')
<div class="col-lg-12">
<div class="col-lg-3">
@include('layouts.sidebar')
</div>
<div id="app">
    <div class="col-lg-9">
    <div class="card">
    @yield('content')
</div>
</div>
</div>
</div>
<script type="text/javascript" src="/js/app.js"></script>

</body>
</html>