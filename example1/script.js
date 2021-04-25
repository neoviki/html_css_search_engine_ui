var units_in_cm = 1; /* make it 0 to display in inches*/

var pixel_per_inch = 96; /* 96 pixels */

function inch2cm(value) {
  return value * 2.54;
}

function inch2mm(value) {
  return value * 25.4;
}

function pixel2inch(n_pixel) {
  var value = n_pixel / pixel_per_inch;
  return value;
}

function pixel2cm(n_pixel) {
  var value_in = pixel2inch(n_pixel);
  var value_cm = inch2cm(value_in);
  return value_cm;
}

function calculage_screen_size_in() {
  var width = window.innerWidth;
  var height = window.innerHeight;

  document.getElementById("display_width_area").innerHTML =
    " Width : { " +
    width +
    " px } { " +
    Math.round(pixel2inch(width)) +
    " inch }";

  document.getElementById("display_height_area").innerHTML =
    " Height : { " +
    height +
    " px } { " +
    Math.round(pixel2inch(height)) +
    " inch }";
}

function calculage_screen_size_cm() {
  var width = window.innerWidth;
  var height = window.innerHeight;

  document.getElementById("display_width_area").innerHTML =
    " Width : { " +
    width +
    " px }  { ~ " +
    Math.round(pixel2cm(width)) +
    " cm } ";

  document.getElementById("display_height_area").innerHTML =
    " Height : { " +
    height +
    " px } { ~ " +
    Math.round(pixel2cm(height)) +
    " cm } ";
}

if (units_in_cm == 1) {
  calculage_screen_size_cm();
  window.addEventListener("resize", calculage_screen_size_cm);
} else {
  calculage_screen_size_in();
  window.addEventListener("resize", calculage_screen_size_in);
}

/* Pixel Width Calculation */
/*

Create 4 Square Grids Measurements

Pixel = Width / number of grids

Keep the same measurement for height and width 

Width = 1200   =>  [ 1200 / 4  ]  => [ 4 x 400px grids ]    
Width = 1100   =>  [ Width / 4 ]  => [ 4 x 275px grids ]
Width = 1000   =>  [ Width / 4 ]  => [ 4 x 250px grids ]
Width =  900   =>  [ Width / 4 ]  => [ 4 x 225px grids ]
Width =  800   =>  [ Width / 4 ]  => [ 4 x 200px grids ]
Width =  700   =>  [ Width / 4 ]  => [ 4 x 175px grids ]
Width =  600   =>  [ Width / 4 ]  => [ 4 x 150px grids ]
Width =  500   =>  [ Width / 4 ]  => [ 4 x 125px grids ]
Width =  400   =>  [ Width / 4 ]  => [ 4 x 100px grids ]
Width =  300   =>  [ Width / 4 ]  => [ 4 x 75px  grids ]

*/
