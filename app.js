
var publication = [
					
					{"title": "Quantified data and social relationships", 
					 "author": "Chris Elsden, Paul Marshall, Aisling O’Kane, Abigail C. Durrant, Rowanne Fleck, John Rooksby, Deborah Lupton.",
					 "year" : "2017", 
					 "pdf" : "doc.pdf", 
					 "proc" : "In Proc. CHI Extended Abstracts (CHI EA ’17) (Forthcoming), ACM.",
					 "abstract" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
					 "publisherLink" : "xxx", 
					},

					{"title": "Trustless Education? A Blockchain System for University Grades.", 
					 "author": "John Rooksby, Kristiyan Dimitrov",
					 "year" : "2017", 
					 "pdf" : "http://johnrooksby.org/papers/DAOworkshop_rooksby.pdf", 
					 "proc" : "Paper presented at New Value Transactions Understanding and Designing for Distributed Autonomous Organisations. Workshop at DIS 2017, 10th June, Edinburgh.",
					 "abstract" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
					},

					{"title": " Technology for Self-Management of Rosacea: A Survey and Field Trial.", 
					 "author": "Davis Buls, John Rooksby",
					 "year" : "2017", 
					 "pdf" : "http://johnrooksby.org/papers/CHI2017_Buls_rosacea.pdf", 
					 "proc" : "In Proc. CHI Extended Abstracts (CHI EA ’17)",
					 "abstract" : "Rosacea is a chronic skin condition with multiple signs and symptoms, but typically associated with reddening of the face. Sufferers usually want to avoid and reduce flare-ups of the condition, and so will try to identify and limit possible triggers. In this paper we report an investigation into technology for managing rosacea, particularly for identifying and tracking triggers. Our study has included: a survey of the existing technology; a survey of the attitudes and opinions of people with rosacea on technology; and finally, the production and evaluation of a prototype for identifying triggers. This work is investigatory and so our formative evaluation and discussion focus on understanding the problem space and establishing directions for future development work.",
					 "publisherLink" : "http://dl.acm.org/citation.cfm?id=3053080"
					},


]


$(function() {
	var HTMLpubTop      = "<div class=\"row\"><div class=\"col-md-9 col-md-offset-0\"><p>";
	var HTMLpubBottom1  = "<br></div><div class=\"col-md-2 col-md-offset-0\"><p> <button type=\"button\" class=\"btn btn-default\" data-toggle=\"collapse\" data-target=\"#demo";	
	var HTMLpubBottom2  = "\">info <i class=\"fa fa-arrow-down fa-fw\"></i> </button> </p></div></div>";
	var publicationRef  = "";
	var HTMLinfoTop1    = "<div class=\"row\"><div class=\"col-md-8 col-md-offset-1\"><div id=\"demo";
	var HTMLinfoTop2    = "\" class=\"collapse\">"
  	var HTMLinfoBottom1 = "<br><br>";
  	var HTMLinfoBottom2 =  "<br><br></div></div></div>";
  	var publisherLabel 	= "";

	$( publication ).each( function (index, item) {

				/* TODO - rethink this so that you create a unique div and then append the links and stuff afterwards */


				/* if theres a pdf we want a link in the reference and a label in the more section */
				if ('pdf' in item) {
					publicationRef = item.author + " " + item.year + " <a href=\"" + item.pdf + "\"> " + item.title + "</a> " + item.proc;
					pdfLabel = " <a href=\"" + item.pdf + "\"><span class=\"label label-success\">PDF</span></a>";
				} else {
					publicationRef = item.author + " " + item.year + " <a href=\"#pdfnotavailable\"> " + item.title + "</a> " + item.proc;
					pdfLabel = "";
				};

				/* insert link label to publisher site if exists */
				if ('publisherLink' in item) {
					publisherLabel = " <a href=\"" + item.publisherLink + "\"><span class=\"label label-info\">Publisher</span></a>";
				} else {
					publisherLabel = "";
				};

 				$(".publications").append(HTMLpubTop + publicationRef + HTMLpubBottom1 + index + HTMLpubBottom2 + HTMLinfoTop1 + index + HTMLinfoTop2 + item.abstract + HTMLinfoBottom1 + pdfLabel + publisherLabel + HTMLinfoBottom2);
			}
		)

});   