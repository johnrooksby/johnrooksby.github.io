
var publication = [
					
					{"title": "Quantified data and social relationships", 
					 "author": "Chris Elsden, Paul Marshall, Aisling O’Kane, Abigail C. Durrant, Rowanne Fleck, John Rooksby, Deborah Lupton.",
					 "year" : "2017", 
					 "pdfLink" : "doc.pdf", 
					 "proc" : "In Proc. CHI Extended Abstracts (CHI EA ’17) (Forthcoming), ACM.",
					 "abstract" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
					 "publisherLink" : "xxx", 
					},

					{"title": "Trustless Education? A Blockchain System for University Grades.", 
					 "author": "John Rooksby, Kristiyan Dimitrov",
					 "year" : "2017", 
					 "pdfLink" : "http://johnrooksby.org/papers/DAOworkshop_rooksby.pdf", 
					 "proc" : "Paper presented at New Value Transactions Understanding and Designing for Distributed Autonomous Organisations. Workshop at DIS 2017, 10th June, Edinburgh.",
					 "abstract" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
					},

					{"title": " Technology for Self-Management of Rosacea: A Survey and Field Trial.", 
					 "author": "Davis Buls, John Rooksby",
					 "year" : "2017", 
					 "pdfLink" : "http://johnrooksby.org/papers/CHI2017_Buls_rosacea.pdf", 
					 "proc" : "In Proc. CHI Extended Abstracts (CHI EA ’17)",
					 "abstract" : "Rosacea is a chronic skin condition with multiple signs and symptoms, but typically associated with reddening of the face. Sufferers usually want to avoid and reduce flare-ups of the condition, and so will try to identify and limit possible triggers. In this paper we report an investigation into technology for managing rosacea, particularly for identifying and tracking triggers. Our study has included: a survey of the existing technology; a survey of the attitudes and opinions of people with rosacea on technology; and finally, the production and evaluation of a prototype for identifying triggers. This work is investigatory and so our formative evaluation and discussion focus on understanding the problem space and establishing directions for future development work.",
					 "publisherLink" : "http://dl.acm.org/citation.cfm?id=3053080"
					},


]


$(function() {


	var HTML      = "<div class=\"row\">" +
					  "<div class=\"col-md-9 col-md-offset-0\">" +
					    "<p> <div id=\"publicationText\">No Title</div> </p> " +
					  "</div>" +
					  "<div class=\"col-md-2 col-md-offset-0\">" +
					    "<p> <button type=\"button\" class=\"btn btn-default\" data-toggle=\"collapse\" data-target=\"#abstractArea\">info <i class=\"fa fa-arrow-down fa-fw\"></i> </button> </p>" +
					  "</div>" +
					"</div>" +
	  				"<div class=\"row\">" + 
	  				  "<div class=\"col-md-8 col-md-offset-1\">" + 
	  				    "<div id=\"abstractArea\" class=\"collapse\"> " + 
	  				      "<div id=\"abstract\">No Abstract</div>" + 
	  				      "<div id=\"labels\"></div>" +
  						"</div>"+
  					  "</div>" + 
  					"</div>";
  	var myDiv = "";
  	var labels = "";
  	var pdfLink = "";


	$( publication ).each( function (index, item) {

		/* create a unique container div per publication */
		myDiv = "publication" + index;
		$(".publications").append("<div id=\"" + myDiv + "\">" + HTML + "</div>");

		/* create a unique abstract area to target with the btn */
		myAbstractDiv = "abstractArea" + index;
 		$("#publication" + index).find("#abstractArea").attr("id", myAbstractDiv);
 		$("#publication" + index).find(".btn").attr("data-target", "#"+myAbstractDiv);

		/* if there are links and labels to put in */
		labels = "";
		pdfLink = "";
		if ('pdfLink' in item) { 
			pdfLink = item.pdfLink;
			labels = labels + "<a href=\"" + pdfLink + "\"><span class=\"label label-success\">pdf</span></a> ";
		} 
		if ('publisherLink' in item) { 
			labels = labels + "<a href=\"" + item.publisherLink + "\"><span class=\"label label-info\">publisher</span></a>";
		}

		/* customise the generic HTML using publication data */
 		$("#publication" + index).find("#publicationText").html(item.author + " (" + item.year + ") <a href =\"" + pdfLink + "\">" + item.title + "</a> " + item.proc);
 		$("#publication" + index).find("#abstract").html(item.abstract);
 		$("#publication" + index).find("#labels").html(labels);









		}
	)

});   