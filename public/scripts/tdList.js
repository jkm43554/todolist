$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});


$("ul").on("click", ".listspan", function(event){
	$(this).parent().fadeOut(200, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$("ul").append("<li><span class='listspan'><span class='trash'>Y</span></span> " + $(this).val() + "</li>");		
		$(this).val("");
	}
});

$(".plus").click(function(){
	$("input[type='text']").fadeToggle();
});