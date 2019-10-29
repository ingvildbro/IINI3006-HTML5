const $sliderA = $('#sliderA');
const $sliderB = $('#sliderB');

$(function () {
    draw();
    updateValues();
});

/*
//  ----  DRAWING  ----  //
function draw() {
    const canvas = document.getElementById('pythagoras');
    const a = $sliderA.val() * 5;
    const b = $sliderB.val() * 5;
    canvas.width = (a + b + a);
    canvas.height = (b + a + b);
    if (canvas.getContext) {
        console.log("canvas ok");
        const ctx = canvas.getContext('2d');

        console.log('A: ' + a);
        console.log('B: ' + b);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //  SIDE A - QUAD
        ctx.strokeStyle = '#ffff00';
        ctx.fillStyle = '#ffff80';
        ctx.beginPath();
        ctx.moveTo(0, b);
        ctx.lineTo(a, b);
        ctx.lineTo(a, b + a);
        ctx.lineTo(0, b + a);
        //ctx.lineTo(0, b);
        ctx.stroke();
        ctx.fill();
        //ctx.closePath();


        //  SIDE B - QUAD
        ctx.strokeStyle = '#00bfff';
        ctx.fillStyle = '#80dfff';
        ctx.beginPath();
        ctx.moveTo(a, b + a);
        ctx.lineTo(a + b, b + a);
        ctx.lineTo(a + b, b + a + b);
        ctx.lineTo(a, b + a + b);
        //ctx.lineTo(a, b + a);
        ctx.stroke();
        ctx.fill();

        //  SIDE C - QUAD
        ctx.strokeStyle = '#00ff00';
        ctx.fillStyle = '#80ff80';
        ctx.beginPath();
        ctx.moveTo(a + a, 0);
        ctx.lineTo(a + a + b, a);
        ctx.lineTo(a + b, a + b);
        ctx.lineTo(a, b);
        //ctx.lineTo(a + a, 0);
        ctx.stroke();
        ctx.fill();

        //  TRIANGLE
        ctx.strokeStyle = '#ff0000';
        ctx.fillStyle = '#ff8080';
        ctx.beginPath();
        ctx.moveTo(a, b);
        ctx.lineTo(a + b, a + b);
        ctx.lineTo(a, b + a);
        //ctx.lineTo(a, b);
        //ctx.stroke();
        ctx.fill();
        ctx.stroke();
        // ctx.closePath();

    }

}
*/

//  ----  DRAWING  ----  //
function draw() {
    const canvas = document.getElementById('pythagoras');
    const a = $sliderA.val() * 5;
    const b = $sliderB.val() * 5;
    canvas.width = (a + b + a);
    canvas.height = (b + a + b);
    if (canvas.getContext) {
        console.log("canvas ok");
        const ctx = canvas.getContext('2d');

        console.log('A: ' + a);
        console.log('B: ' + b);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //  SIDE A - QUAD
        ctx.strokeStyle = '#ffff00';
        ctx.fillStyle = '#ffff80';
        ctx.beginPath();
        ctx.moveTo(0, b);
        ctx.lineTo(a, b);
        ctx.lineTo(a, b + a);
        ctx.lineTo(0, b + a);
        //ctx.lineTo(0, b);
        ctx.stroke();
        ctx.fill();
        //ctx.closePath();


        //  SIDE B - QUAD
        ctx.strokeStyle = '#00bfff';
        ctx.fillStyle = '#80dfff';
        ctx.beginPath();
        ctx.moveTo(a, b + a);
        ctx.lineTo(a + b, b + a);
        ctx.lineTo(a + b, b + a + b);
        ctx.lineTo(a, b + a + b);
        //ctx.lineTo(a, b + a);
        ctx.stroke();
        ctx.fill();

        //  SIDE C - QUAD
        ctx.strokeStyle = '#00ff00';
        ctx.fillStyle = '#80ff80';
        ctx.beginPath();
        ctx.moveTo(a + a, 0);
        ctx.lineTo(a + a + b, a);
        ctx.lineTo(a + b, a + b);
        ctx.lineTo(a, b);
        //ctx.lineTo(a + a, 0);
        ctx.stroke();
        ctx.fill();

        //  TRIANGLE
        ctx.strokeStyle = '#ff0000';
        ctx.fillStyle = '#ff8080';
        ctx.beginPath();
        ctx.moveTo(a, b);
        ctx.lineTo(a + b, a + b);
        ctx.lineTo(a, b + a);
        //ctx.lineTo(a, b);
        //ctx.stroke();
        ctx.fill();
        ctx.stroke();
        // ctx.closePath();

    }
}

//  ----  CALCULATING  ----  //
function toPixels(cm) {
    return (cm * 37.8);
}

function calcArea(a, b) {
    return ((a * b) / 2);
}

function calcHypotenus(a, b) {
    return Math.sqrt(Math.pow(a,2) * Math.pow(b, 2));
}

function updateValues() {
    const cmA = $sliderA.val();
    const cmB = $sliderB.val();
    const cmC = calcHypotenus(cmA, cmB);
    const area = calcArea(cmA, cmB);

    // Set values
    $('#area').val(area);
    $('#hypC').val(cmC);
    $('#catA').val(cmA);
    $('#catB').val(cmB);

    /*
    // To pixel -> draw
    const pxA = toPixels(cmA);
    const pxB = toPixels(cmB);

    draw(pxA, pxB);

     */
}

//  ----  SLIDERS  ----  //
$($sliderA).on('change', function () {

    draw();
    updateValues();
});
$($sliderB).on('change', function () {
    draw();
    updateValues();
});
