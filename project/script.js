
$(Document).ready(function(){
    function showModel(){
        $('#prompt-container').show();
        $('html body').css('overvlow', 'hiden');
    }
    function closeModel(){
        $('#prompt-container').hide();
    }
    setTimeout(showModel, 2000);
    $('#close').click(function(){
        closeModel();
    });
    setTimeout(showModel, 2000);
    $('#submit').click(function(){
        closeModel();
    });
   
});