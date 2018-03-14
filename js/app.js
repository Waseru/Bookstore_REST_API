$(function(){
    console.log('dziala');
    $.ajax({
        url: 'http://127.0.0.1:8000/book/',
        type: 'GET',
        dataType: 'json'
    })
    .done(function(dane){
        for(var i = 0; i < dane.length;i++){
            $('#books').append('<div class="title" data-id="'+dane[i].id+'">'+dane[i].title+'</div>');
            $('#books').append('<div class="data"></div>');
        }

        $('.title').on('click', function(e){
            var dataId = $(this).data('id');
            var stan = $(this).next().css('display');
            //$( '<div class="data">test</div>' ).insertAfter($(this)); - zle podejscie, dodaje mi za kazdym razem
            console.log(stan);
            $(this).next().toggle();
            $.ajax({
                url: 'http://127.0.0.1:8000/book/'+dataId+'/',
                type: 'GET',
                dataType: 'json'
            })
            .done(function(data){;
                console.log($(this))

                if (stan === 'none'){
                    console.log('taki mamy stan block');
                    $('.data').eq(dataId-1).append('<p>ID: '+data.id+'</p>').append('<p>Autor: '+data.author+'</p>')
                    .append('<p>Wydawca: '+data.publisher+'</p>');
                } else if (stan === 'block'){
                    console.log('taki mamy stan none');
                    $('.data').eq(dataId-1).empty();

                }
            })
        })
    })

//    $('#button-1').on('click', function(e){
//        e.preventDefault();
//        console.log('klikaj mnie ochhhh');
//    })
// TODO wykonać ładowanie nowej ksiażki
//To juz dodaje książki jesli na koncu jest frm.submit(); ale to robi automatycznie przy odświeżeniu strony
 // w momencie gdy wypełnione sa pola formularza :/
    var frm = $('#button-1');
    frm.submit(function(e){
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8000/book/',
            data: {
                'author': $("input[name=author]").val(),
                'title': $("input[name=title]").val(),
                'isbn': $("input[name=isbn]").val(),
                'publisher': $("input[name=publisher]").val(),
                'genre': $("input[name=genre]").val(),
            }
        })
        .done(function(data){
            console.log('dziala');
            location.reload();


        })
        .fail(function(xhr, status, err){
        console.log(xhr, status, err);
    })
        e.preventDefault();
    })

//    frm.on('click', function(e){
//        console.log($("input[name=author]").val());
//    })

//jak mam to to działa, ale nie tak jakbym chcial
    frm.submit();


})