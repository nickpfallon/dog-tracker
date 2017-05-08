$.getJSON("https://www.reddit.com/r/shittyaskscience/.json?jsonp=?", function(data) {
    $.each(data.data.children, function(i,item){
        $("<img/>").attr("src", item.data.url).appendTo("#images");
        $("<text/>").attr("src", item.data.title).appendTo("#images");
    });
});
