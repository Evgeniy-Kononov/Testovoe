
  $(document).ready(function(){

  	$('.js-find-text').each(function(){
  		var newText = $(this).text().split(' ').join('</span> <span class="js-click-death">');
  		newText = '<span class="js-click-death">' + newText + '</span>';

  		$(this).html(newText);
  	});
    $('.js-click-death').click(function(){
      $(this).slideToggle(300);
    });
  });
