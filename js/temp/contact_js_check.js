
function js_submit(id_form){
	var dem=0;
	$('#'+id_form+' .input_check_validate').each(function(){
		if(!show_hide_notify($(this))) dem++;
	});

	if(dem>0)
			return false;
	document.getElementById(id_form).submit();
}

$(document).ready(function(){
	$('.input_check_validate').mousedown(function(){
		if($(this).val()==''){
			$(this).removeClass('box_not_valid');
		}
	});
	$('.input_check_validate').blur(function(){
		show_hide_notify($(this));
	});
	$('.box_input_contact.has_notify').each(function(){
		var text_input=$(this).find('input').attr('placeholder');
		$notify_input=$('<div class="notify_input"><div class="content_notify_input">'+text_input+'</div></div>');
		$(this).append($notify_input);
	});
});

function show_hide_notify(input_check){
	var this_notify=$(input_check).attr('data-notify');
		if($(input_check).val()==''){
			$('.'+this_notify).fadeIn();
			$(input_check).parent().addClass('box_not_valid');
			return false;
		}else{
			$(input_check).parent().removeClass('box_not_valid');
			$('.'+this_notify).fadeOut();
			return true;
		}
}


