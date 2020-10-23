
for(let i = 0; i < 16; i++){
    $('#boxContainers').append(`
    <p class='lighterboxes'></p> 
    `)
}
$('#boxContainers').on('click', '.lighterboxes', function (){
    $(this).toggleClass('lightBox')
});