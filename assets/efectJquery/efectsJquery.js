$( function() {
  $( "#changeW" ).on( "click", function() {
    $( ".containerMain" ).toggleClass( "containerMain2", 300 );
    $( ".contMainTitle h1" ).toggleClass( "contMainTitle2" );
    $( ".contMainMenu ul li a" ).toggleClass( "contMainTitle2" );
    $( ".contMainMenu ul li select" ).toggleClass( "contMainTitle2" );
  });
} );



