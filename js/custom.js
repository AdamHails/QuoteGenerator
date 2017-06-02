var url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
var getQuote = function(data) {
    $('#quoteText').html('<i>"' + data.quoteText + '<nbws>"</i>');
    var quote = 'https://twitter.com/intent/tweet?text=' + data.quoteText + ' Author ' + data.quoteAuthor;
    if (data.quoteAuthor === "") {
        data.quoteAuthor = 'Unknown';
    }
    $('#quoteAuthor').text(data.quoteAuthor);
};

function newColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
};

function assignColor() {
    var color = newColor();
    $('body').css("background-color", color);
    $('button').css("background-color", color);
    $('#quoteAuthor, #quoteText, #title').css("color", color);
}

function newQuote() {
    $.getJSON(url, getQuote, 'jsonp');
    assignColor();
}

$(document).ready(function() {
    newQuote();
    $('#newQuote').on('click', function() {
        newQuote()
    });
});
