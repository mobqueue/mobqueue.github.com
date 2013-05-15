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

$(function() {
  $('#contact_form').submit(function(event) {
    event.preventDefault();
    var this_form = $(this);
    $.ajax({
      type: 'post',
      data: this_form.serialize(),
      url: 'https://api.perfec.tt/public/contactus',
      success: function(res) {
        alert('Your message has been sent!');
      }
    });
  });
});