'use strict';

console.log('\'Allo \'Allo! Content script');

var btn = $('<div>').text('run').appendTo('body');
btn.css({
	position:'fixed',
	right:0,
	top:10,
	zIndex:10000,
	background: '#000',
	color:'#fff',
	fontSize:26,
	cursor: 'pointer'
});

btn.click(function(){
	var tr = $('tr[data-role="list-item"]');
	tr.each(function(){
		var ths = $(this);
		var price = ths.find('span[data-role="bid-price-text"]').text();
		price = parseFloat(price);
		console.log(price);
		if(price>0.35){
			ths.find('input').eq(0).prop('checked', true);
			ths.addClass('selected');
		}
	});
});