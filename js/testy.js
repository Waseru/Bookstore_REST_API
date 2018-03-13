
//robione z wykładowcą zadania rozgrzewkowe
    console.log('dziala');
    $.ajax({
    url: 'http://date.jsontest.com/',
    type: 'GET',
    dataType: 'json'
    })
    .done(function(dane){
        console.log(dane);
        $('#test').text(dane.date);
    })
    .fail(function(xhr, status, err){
        console.log(xhr, status, err);
    })

    $.ajax({
        url: 'https://swapi.co/api/people/4/',
        type: 'GET',
        dataType: 'json',
    })
    .done(function(infoOLudziku){
        console.log(infoOLudziku);
        $('#ludzik').text(infoOLudziku.name);
    })
    .fail(function (){
        $('#ludzik').text('Przepraszamy, nie ma takiego ludzika');
    })

//dziala ale zle

dodać for na poczatku i iterujac po odpowiednich li dodawac nastepujacym ich elementom div odpowiednie dane.
    $('.title').on('click', function(e){
        var dataId = $(this).data('id');
        $.ajax({
            url: 'http://127.0.0.1:8000/book/'+dataId+'/',
            type: 'GET',
            dataType: 'json'
        })
        .done(function(dane){
            //$(this).next().toggle();
            $('.title').eq(dataId-1).next().toggle();
            $('.title').eq(dataId-1).append('<p>ID: '+dane.id+'</p>').append('<p>Autor: '+dane.author+'</p>')
            .append('<p>Wydawca: '+dane.publisher+'</p>');
            //console.log($(this).next()) //.toggle();

        })
        .fail(function(xhr, status, err){
            console.log(xhr, status, err);
        })
    })


//kolejne próby

$(function(){

    console.log('dziala');
    $.ajax({
        url: 'http://127.0.0.1:8000/book/',
        type: 'GET',
        dataType: 'json'
    })
    .done(function(dane){
    for(var i=0;i<dane.length;i++){
        $('#books').append($('<li class="title" data-id="'+dane[i].id+'">'+ dane[i].title + '</li>')).append($('<div class="divLook">Test</div>'));



    }
    })


//    $('.title').on('click', function(e){
//        var dataId = $(this).data('id');
//        console.log(dataId);
//        console.log('dziala');
//        $.ajax({
//
//            url: 'http://127.0.0.1:8000/book/'+dataId+'/',
//            type: 'GET',
//            dataType: 'json'
//        })
//        .done(function(dane){
//            console,log('dziala');
//        })
//
//    })
//
    $('.title').on('click', function(e){
        var dataId = $(this).data('id');
        console.log(dataId);
        console.log('dziala');
        $.ajax({
            url: 'http://127.0.0.1:8000/book/'+dataId+'/',
            type: 'GET',
            dataType: 'json'
        })
        .done(function(dane){
            //$(this).next().toggle();
            $('.title').eq(dataId-1).next().toggle();
            $('.title').eq(dataId-1).append('<p>ID: '+dane.id+'</p>').append('<p>Autor: '+dane.author+'</p>')
            .append('<p>Wydawca: '+dane.publisher+'</p>');
            //console.log($(this).next()) //.toggle();

        })
        .fail(function(xhr, status, err){
            console.log(xhr, status, err);
        })
    })



})