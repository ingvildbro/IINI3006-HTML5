let $parkingMap;
let $mapVisible;


$(function () {
    //  Checks if user has hidden map in session.
    if (sessionStorage.mapStatus) {
        $mapVisible = (sessionStorage.mapStatus !== 'hidden');
    } else {
        sessionStorage.setItem('mapStatus', 'visible');
        $mapVisible = true;
    }


    if ($mapVisible) displayMap();


    //  Button listener

});


/*
$($sliderA).on('change', function () {

    draw();
    updateValues();
});*/