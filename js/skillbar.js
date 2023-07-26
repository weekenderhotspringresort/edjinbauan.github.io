
$('#left').click(()=>{
	$('.skill').removeClass('right').addClass('left');
  });
  
  $('#right').click(()=>{
	$('.skill').removeClass('left').addClass('right');
  });


  $( function() {
    $( "#progress" ).skill__progress({
      value: 37
    });
  } );