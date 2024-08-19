$(document).ready(function() {    
    $('#text1').hover(
        function() {
            $('#text2').show();
        },
        function() {
            $('#text2').hide();
        }
    );     

    $('#img').click(function() {
        $(this).css({
            'width': '100%',
            'height': '100%' 
        });
    });

    $('#img').mouseout(function() {
        $(this).css({
            'width': '200px',
            'height': '200px' 
        });
    });
   
    $('#caja3').on('dblclick', function() {
        $(this).toggleClass('clicGrande');
    });
});


