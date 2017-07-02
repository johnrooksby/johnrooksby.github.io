
var publication = [
					
					{"title": "hello mum 2017", "author": "John R"},
					{"title": "hi again 2018", "author" : "John and Jim"}

]


$(function() {
	var HTMLpub1 = "<div class=\"row\"><div class=\"col-md-2 col-md-offset-0\"><p><span class=\"label label-info\">workshop paper</span></p></div>";
	var HTMLpub2 = "<div class=\"col-md-9 col-md-offset-0\"><p>";
	var HTMLpub3 = "</p></div></div>";

	$( publication ).each( function (index, item) {
 				$(".publications").append(HTMLpub1 + HTMLpub2 + item.title + item.author + HTMLpub3);
			}
		)

});