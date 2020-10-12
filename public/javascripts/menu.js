$(document).ready(function(){
    varelement= $('meta[name="active-menu"]').attr('content');
    $('#'+ element).addClass('active');
});