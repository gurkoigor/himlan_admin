// JavaScript Document

// Cufon Text replacement
Cufon.replace('h2,h5,h6', {
				textShadow: '#fff 1px 1px 0px'
			});
Cufon.replace('h1,#tab>ul li a', {
				textShadow: '#2c2c2c 1px 1px 0px'
			});

Cufon.replace('.tab-active a ', {
				textShadow: '#000 1px 1px 0px'
			});

$(function(){
		  var temp,index=0,parent; 
		   var availableTags = ["Invoice", "java", "php", "coldfusion", "javascript", "asp", "ruby", "python", "c", "scala", "groovy", "haskell", "perl","Zorro","X-men","Quake","Wow"];
		  // ------------------- Tree Structure jQuery Widget ---------------------
		   $('.files').tree({
		expanded: 'li:first'
	});
		   
		  // ------------------- Message Box jQuery Widget ---------------------  
		     $("#message-box").dialog({ autoOpen:false ,buttons: {
				Ok: function() {
					$(this).dialog('close');
				}
			} });
			 
			 
		   $("#message-button").click(function(){   $("#message-box").dialog("open");  });
		   
		   
		   // ------------------- Checkbox & Radio jQuery Widget --------------------- 
		   $(".button").button();
		   $(".buttonset").buttonset();
		   
		  // ------------------- Calender jQuery Widget --------------------- 
		  $("#calender").datepicker({ showOtherMonths: true });

		  var dates = $("#from, #to" ).datepicker({
				defaultDate: "+1w",
				changeMonth: true,
				numberOfMonths: 1,
				dateFormat: 'yy-mm-dd'
			});
		
		  //------------------Side Menu jQuery Widget ---------------------  
		  
		 $(".side-menu li ul li:first").css("border-top","none");
		 $(".side-menu li a").click(function(event){  $(this).parent().children("ul").slideToggle('normal'); event.preventDefault();   })
		  $(".side-menu ul li ul:last").addClass("bottom-fix");
		
		// -------------------Autocomplete jQuery Widget ---------------------  
		  
			$("#search").autocomplete({
				source: availableTags
			});
			
//		// Graphs
//		$("#bar table").graphix({width:400,height:340,type:"bar"});
//        $("#area table").graphix({width:400,height:340,type:"area"});
//        $("#pie table").graphix({width:400,height:340,type:"pie"});
//        $("#line table").graphix({width:400,height:340,type:"line"});
//        $("#bubble table").graphix({width:400,height:340,type:"bubble"})
		  
		 //------------------------- Table Widget ------------------------------
		 $('#pagetable').dataTable({
					"sPaginationType": "full_numbers"
			});
			
			$('.without_paginate').dataTable({
				"aaSorting": [[ 2, "desc" ]]
			});
		  
		 // ------------------- Tab jQuery Widget  Coding ---------------------
		 
		 $(".tabs>div:first").show();
		 $("#tab>ul li a").click(function(event){
										
										if(index==$(this).parent().index("#tab>ul li"))
										{
											event.preventDefault();
											return;
										}
										$(".tabs>div:eq("+index+")").fadeOut('fast');
										$("#tab>ul li:eq("+index+")").toggleClass('tab-default tab-active');
										index = $(this).parent().index("#tab>ul li");
										
										
										$(".tabs>div:eq("+index+")").fadeIn('fast');
										
										
										$(this).parent().toggleClass('tab-default tab-active');
									
										
										event.preventDefault();
										});
		 
		
		 
		   $("#tab>ul li:first").addClass('tab-active');
		 
		   var rest = $("#tab>ul li").not(":first").addClass('tab-default');
		   $.each($("#tab>ul li"),function(){
								
								$(this).css("z-index",50-$(this).index());
								
								});
		   
		    // -------------------  AE jQuery Widget Coding ---------------------
			
		  $(".closable>.ae-widget-header").append("<a href='#' class='close'></a>");
		 $(".expandable").append("<a href='#' class='add-expand'></a>");
		//  $(".expandable-overlay").append("<a href='#' class='add-overlay'></a>");
		 $(".expandable").find("p").addClass('hide');
		 
		 $(".ae-widget-content").find("ul li:last").css("border-bottom","none");
		  $(".minimizable>.ae-widget-header").append("<a href='#' class='minus'></a>");
		  $(".ae-widget-sidebar>.ae-widget-header").wrap("<div class='sidebar-wrapper ' />");
		  $.each($(".minimizable"),function(){ 
										
										if(!$(this).hasClass("closable"))
										{
											$(this).find("a.minus").css("right","5px");
										}
										
										
										});
		 
		  $(".error,.warning,.success,.info").each(function(){
									
								 temp = "<p>"+$(this).html()+"</p><a class='mclose' href='#'></>";
									$(this).html(temp);
									
									});
		  
		  
		  
		  $(".close").click(function(event){ 
									 
									 
									 if($(this).parent().parent().hasClass("sidebar-wrapper"))
									{	  
									 $(this).parents(".ae-widget-sidebar:first").fadeOut('normal');  
									}
									else
									 $(this).parents(".ae-widget:first").fadeOut('normal');  
																									 event.preventDefault();  });
		  
		  
		  $(".add-expand").click(function(event){  $(this).parent().find("p").slideToggle('normal'); $(this).toggleClass("minus-expand"); event.preventDefault();  });
		 //  $(".add-overlay").click(function(event){  $(this).parent().find("p").slideToggle('normal'); $(this).toggleClass("minus-overlay"); event.preventDefault();  });
		  
		   $(".mclose").click(function(event){  $(this).parent("div").fadeOut('normal');    event.preventDefault();  });
		   
		   $(".minus").click(function(event){  
									  
									   if($(this).parent().parent().hasClass("sidebar-wrapper"))
									{	  
									 parent = $(this).parent().parent();
									}
									else
									 parent = $(this).parent();
									 
									
									    
									if(parent.next().is(":hidden"))	 
										 parent.toggleClass("header-radius");
										 
									  parent.next().slideToggle('normal',function(){ 		
																							if(parent.next().is(":hidden"))	 
																									 parent.toggleClass("header-radius");
																									 
																									 }); $(this).toggleClass("add-header");  event.preventDefault();
									  
									  
									 });
		   $("#combobox,#exc1").combobox();
		   
		   
		   $("#dock-control").toggle(function(){ 
											
											temp = $("#top-panel").height();
											$("#top-panel").animate({height:10},700,function(){ 
																							 $("#dock-control").css("background-position","0px -32px");
																							 $("#top-panel>div,#top-panel>ul").hide();  });
											
											},
										function(){
											
											$("#top-panel").animate({height:temp},700,function(){ 
																							    $("#dock-control").css("background-position","0px 0px");
																							   $("#top-panel>div,#top-panel>ul").show();  });
											
											});
		   
		   
		   $("select").parent().addClass("ui-helper-clearfix");
		  
		   if($.browser.msie)
		   {
			   if($.browser.version<=7)
			   {
				 
				     $(".float-left").css({
									
									left:-11,
									marginTop:4
									
									});
					
			   }
			  else
			  {
				  $(".float-left").css({
									
									marginLeft:-4,
									marginTop:5
									
									});
			  
			  }
		   }
		   
		   
		   });

 // -------------------Select Box jQuery Plugin ---------------------  

 
 
 (function($) {
		$.widget("ui.combobox", {
			_create: function() {
				var self = this;
				var select = this.element.hide();
				var input = $("<input>")
					.insertAfter(select)
					.autocomplete({
						source: function(request, response) {
							var matcher = new RegExp(request.term, "i");
							response(select.children("option").map(function() {
								var text = $(this).text();
								if (this.value && (!request.term || matcher.test(text)))
									return {
										id: this.value,
										label: text.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(request.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>"),
										value: text
									};
							}));
						},
						delay: 0,
						change: function(event, ui) {
							if (!ui.item) {
								// remove invalid value, as it didn't match anything
								$(this).val("");
								return false;
							}
							select.val(ui.item.id);
							self._trigger("selected", event, {
								item: select.find("[value='" + ui.item.id + "']")
							});
							
						},
						minLength: 0
					})
					.addClass("ui-widget ui-widget-content ui-corner-left");
				$("<button>&nbsp;</button>")
				.attr("tabIndex", -1)
				.attr("title", "Show All Items")
				.insertAfter(input)
				.button({
					icons: {
						primary: "ui-icon-triangle-1-s"
					},
					text: false
				}).removeClass("ui-corner-all")
				.addClass("ui-corner-right ui-button-icon float-left")
				.click(function() {
					// close if already visible
					if (input.autocomplete("widget").is(":visible")) {
						input.autocomplete("close");
						return;
					}
					// pass empty string as value to search for, displaying all results
					input.autocomplete("search", "");
					input.focus();
				});
			}
		});
 
	})(jQuery);