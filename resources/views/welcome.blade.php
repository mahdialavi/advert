@extends("layouts.userlayouts")

@section("content")


    <div class="container">


        <div class="menuright">

            <h3>دسته بندی ها</h3>

            <div class="sidenav" style="width: 250px;">
                <ul>

                    @foreach($categories as $category)

                        <li><a>  {{$category->name}}</a></li>
                    @endforeach
                </ul>
            </div>

        </div>

        <div class="left_column">


            @foreach($adverts as $advert)

                <div class="advert_item">

                    <?php
                    $img = $advert->image;
                    if ($img != null) {
                    ?>

                    <div class="item_image"><img src="{{asset($advert->image) }}"/></div>

                    <?php
                    }else {
                        ?>

                        <div class="item_image"><img src="{{asset('images/no_image.jpg') }}"/></div>

                    <?php
                    }

                    ?>
                        <div class="item_desc">
                        <div class="title">  {{$advert->name}}</div>
                        <div class="price">150 af</div>
                    </div>
                </div>
            @endforeach

        </div>

    </div>
@endsection