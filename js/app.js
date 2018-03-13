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
            //console.log(dataId);
            var stan = $(this).next().css('display');
            //$( '<div class="data">test</div>' ).insertAfter($(this)); - zle podejscie, dodaje mi za kazdym razem
            console.log(stan);
            $(this).next().toggle();
            $.ajax({
                url: 'http://127.0.0.1:8000/book/'+dataId+'/',
                type: 'GET',
                dataType: 'json'
            })
            .done(function(data){
                //console.log('musi byc none');
                //console.log(stan);
                //console.log(data);
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

    var frm = $('#button-1');
    frm.submit(function(e){
        $.ajax({
            type: frm.attr('POST'),
            url: frm.attr('action'),
            data: frm.serialize(),
        })
        .done(function(data){
            console.log('dziala');

        })
        e.preventDefault();
    })


})