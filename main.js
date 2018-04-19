$('#colorsBtn').click(function(){
	$.getJSON('js/colors.json',function(result){
		for(var i = 0; i < result.colors.length; i++ ){
			$('#swatchPanel').append('<div style="background-color:'+ result.colors[i].code.hex +'" class="colorSwatch">' + result.colors[i].color.toUpperCase() + '<div class="cat">'+result.colors[i].category+'</div>' + '</div');
		}
	});
});