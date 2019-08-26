$('.open_pop').click(function(){
	$('.card').addClass('active');
	$('.bg_popup').fadeIn();

	$('.close-button').click(function(){
		$('.card').removeClass('active');
		$('.bg_popup').fadeOut();
	});

	$('.bg_popup').click(function(){
		$('.card').removeClass('active');
		$('.bg_popup').fadeOut();
	});

})



$(window).on('hashchange', function(){
	if(location.hash.slice(1) === 'register') {
		$('.card').addClass('extend');
		$('#login').removeClass('selected');
		$('#register').addClass('selected');
	} else {
		$('.card').removeClass('extend');
		$('#login').addClass('selected');
		$('#register').removeClass('selected');
	}
});
$(window).trigger('hashchange');


const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function selectItem(e) {
	removeBorder();
	removeShow();
	console.log(this.id);
	this.classList.add('tab-border');
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	tabContentItem.classList.add('show');
}

function removeBorder() {
	tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
	tabContentItems.forEach(item => item.classList.remove('show'));
}

tabItems.forEach(item => item.addEventListener('click', selectItem));


