$('h5 span').live('click' , function(){
	var item = $(this);
	var img = item.parent().next();
	if( img.is(':visible') ){
		img.slideUp();
		item.text('show');
	}else{
		img.slideDown();
		item.text('hide');
	}
});