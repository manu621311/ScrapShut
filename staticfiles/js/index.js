var url='https://backend.scrapshut.com/api/service/post';
var i=0;
$('#button').click(function(){
    $.get(url,function(data,status){
        $('#button').hide("slow");
        $('.head,.main').show("slow");
        indexing(data.results);
    });
});

function indexing(data){
    insert(data)
    i=i+1;
        $('.arrow').click(function(){
            if(i!=data.length){
                insert(data);    
                i=i+1;
            }else{
                i=0;
                insert(data);
                i=i+1;
            }
        });
}
function insert(data){
    $('.tag').empty();
    $('.url').text(data[i].url);
    $('.review_text').text(data[i].review);
    $('.star').text(data[i].rate);
    $('.name').text(data[i].author);
    for(var j=0;j<data[i].tags.length;j++){
        $('.tag').append('<span class="tags">'+data[i].tags[j]+'</span>')  
    }
    if(data[i].fake==true){
        $('.authenticity').text('FAKE');
    }else{
        $('.authenticity').text('GENUINE');
    }
}