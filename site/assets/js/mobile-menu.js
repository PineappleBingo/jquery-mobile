jQuery(document).ready(function($){    
  $("body").append("<div id='overlay'></div>");	  
  $("#open-panel").on("click", function(){	
	openMenu();
  });
  
  $("#close-panel").on("click", function(){	
	closeMenu();
  });
  
  $("#overlay").on("click", function(){	
	closeMenu();
  });
  
  var openMenu = function(){
    $("#overlay").show();	
	$("#panel-container").animate({right:"0"}, 500);
	$("#open-panel").hide();
	$("#close-panel").show();
  }	
  
  var closeMenu = function(){
    $("#overlay").hide();	
	$("#panel-container").animate({right:"-280px"}, 500);
	$("#open-panel").show();
	$("#close-panel").hide();
  }
});