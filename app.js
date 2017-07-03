
var publication = [
					
					{"title": " Quantified data and social relationships", 
					 "author": "Chris Elsden, Paul Marshall, Aisling O’Kane, Abigail C. Durrant, Rowanne Fleck, John Rooksby, Deborah Lupton.",
					 "year" : "2017", 
					 "link" : "doc.pdf", 
					 "proc" : "In Proc. CHI Extended Abstracts (CHI EA ’17) (Forthcoming), ACM.",
					 "abstract" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
					},

					{"title": "hi again", "author" : "John and Jim", "year" : "2018", "link" : "doc.pdf", "proc" : "proc CHI", "abstract" : ""},
					{"title": "hi yo", "author" : "John 2",  "year" : "2018", "link" : "doc.pdf", "proc" : "proc CHI", "abstract" : ""}


]


$(function() {
	var HTMLpubTop     = "<div class=\"row\"><div class=\"col-md-9 col-md-offset-0\"><p>";
	var HTMLpubBottom1 = "<br></div><div class=\"col-md-2 col-md-offset-0\"><p> <button type=\"button\" class=\"btn btn-default\" data-toggle=\"collapse\" data-target=\"#demo";	
	var HTMLpubBottom2 = "\">info <i class=\"fa fa-arrow-down fa-fw\"></i> </button> </p></div></div>";
	var pubtext		   = "";
	var HTMLinfoTop1   = "<div class=\"row\"><div class=\"col-md-8 col-md-offset-1\"><div id=\"demo";
	var HTMLinfoTop2   = "\" class=\"collapse\">"
  	var HTMLinfoBottom = "<br><br><span class=\"label label-success\">PDF</span> <span class=\"label label-info\">Publisher</span><br><br></div></div></div>";

	$( publication ).each( function (index, item) {

				pubtext = item.author + " " + item.year + " <a href=\"" + item.link + "\"> " + item.title + "</a> " + item.proc;

 				$(".publications").append(HTMLpubTop + pubtext + HTMLpubBottom1 + index + HTMLpubBottom2 + HTMLinfoTop1 + index + HTMLinfoTop2 + item.abstract + HTMLinfoBottom);
			}
		)

});   