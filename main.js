// var number_picture = 4;

// function previous_picture() {
//     var current_src = document.querySelector("#slider-img").getAttribute("src");
//     var index_img_string = current_src.substring(current_src.indexOf("_") + 1, current_src.indexOf("_") + 2);
//     var index_img_int = Number.parseInt(index_img_string);

//     if (index_img_int == 1){
//         index_img_int = 6;
//     }
//     else{
//         --index_img_int;
//     }

//     var path_img_target = "./assets/img/slider/slider_" + index_img_int.toString() + ".jpg";

//     document.querySelector("#slider-img").setAttribute("src",path_img_target);
    
// }

// function next_picture() {
//     var current_src = document.querySelector("#slider-img").getAttribute("src");
//     var index_img_string = current_src.substring(current_src.indexOf("_") + 1, current_src.indexOf("_") + 2);
//     var index_img_int = Number.parseInt(index_img_string);

//     if (index_img_int == 6){
//         index_img_int = 1;
//     }
//     else{
//         ++index_img_int;
//     }

//     var path_img_target = "./assets/img/slider/slider_" + index_img_int.toString() + ".jpg";

//     document.querySelector("#slider-img").setAttribute("src",path_img_target);
// }
 
// setInterval(next_picture,4000);


var imgSlider = document.querySelector('#lastClone');
var allImgs = document.querySelectorAll('.image-contain-slider img');
// var haaha = document.querySelector('.image-contain-slider');

// alert(imgSlider)

// let counter = 1;
// const size = allImgs[0].clientWidth;

// imgSlider.style.transform = 'translateX(' + -size * counter + 'px)';
