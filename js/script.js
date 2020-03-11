//video player

$('.description__play-icon').on('click',function() {
	$('.description__play-icon').css('display', 'none');
	$('div.description__photo').fadeOut('slow');
	$('div.description__video').fadeIn('slow');
});	

//photos opener

$('div.photos__opener').on('click',function(){
	if($(this).siblings('div.photos__items-hidden').is(":visible")){
		closePhotos();
	} else {
		openPhotos();
	}
});

function openPhotos() {
	$('div.photos__items-hidden').show('slow');
	$('div.photos__show-all').text('Скрыть');
	$('img.photos__arrow').css('transform', 'rotate(180deg)');
}

function closePhotos() {
	$('div.photos__items-hidden').hide('slow');
	$('div.photos__show-all').text('Показать все фото');
	$('img.photos__arrow').css('transform', 'rotate(0)');
}

//text opener

$('div.organizer__opener1').on('click', function(){
	name = ('.' + this.className);
	checkVisibility();
});

$('div.organizer__opener2').on('click', function(){
	name = ('.' + this.className);
	checkVisibility();
});

function checkVisibility() {
	if($(name +'-hidden').is(":visible")){
		closeText();
	} else {
		openText();
	}
}

function openText() {
	$(name + '-hidden').show('slow');
	$(name + '-read-more').text('Скрыть');
	$(name + '-arrow').css('transform', 'rotate(180deg)');
}

function closeText() {
	$(name + '-hidden').hide('slow');
	$(name + '-read-more').text('Читать ещё');
	$(name + '-arrow').css('transform', 'rotate(0)');
}