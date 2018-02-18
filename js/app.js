$(function(){
//    console.log('dziala');
//    $.ajax({
//    url: 'http://date.jsontest.com/',
//    type: 'GET',
//    dataType: 'json'
//    })
//    .done(function(dane){
//        console.log(dane);
//        $('#test').text(dane.date);
//    })
//    .fail(function(xhr, status, err){
//        console.log(xhr, status, err);
//    })
//
//    $.ajax({
//        url: 'https://swapi.co/api/people/4/',
//        type: 'GET',
//        dataType: 'json',
//    })
//    .done(function(infoOLudziku){
//        console.log(infoOLudziku);
//        $('#ludzik').text(infoOLudziku.name);
//    })
//    .fail(function (){
//        $('#ludzik').text('Przepraszamy, nie ma takiego ludzika');
//    })

    console.log('dziala');
    $.ajax({
        url: 'http://127.0.0.1:8000/book/',
        type: 'GET',
        dataType: 'json'
    })
    .done(function(dane){
    //console.log(dane[0].title);
    //var book = [];
    for(var i=0;i<dane.length;i++){
        console.log(dane[i].title);
        $('#books').append('<li>'+ dane[i].title + '</li>');
        $('#books').append('<div>');
        //$('#books').text(dane[i].title);
        //console.log($('#books').text(dane[i].title));
        //$('#books').append('<li>'+ $('#books').text(dane[i].title) + '</li>')
    }


    })
})