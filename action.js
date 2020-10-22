$('#boxContainers').append(`
    <div id='row'>
        <p id='lighterboxes'></p>
        <p></p>
        <p></p>
        <p id='lighterboxes'></p>
    </div>
    <div id='row'>
        <p></p>
        <p id='lighterboxes'></p>
        <p id='lighterboxes'></p>
        <p></p>
    </div>
    <div id='row'>
        <p></p>
        <p id='lighterboxes'></p>
        <p id=lighterboxes'></p>
        <p></p>
    </div>
    <div id='row'>
        <p id='lighterboxes'></p>
        <p></p>
        <p></p>
        <p id='lighterboxes'></p>
    </div>
`)

$('#boxContainers').on('click', '#lighterboxes', function (){

    $('#lighterboxes').toggleClass('lightBox')
});