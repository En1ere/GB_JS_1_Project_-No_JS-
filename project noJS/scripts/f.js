const slider = document.querySelector('.price-slider');
const val_outputs = [
    document.querySelector('.value-left'),
    document.querySelector('.value-right')
];

slider.addEventListener('input', updatePriceLabels);
slider.addEventListener('click', updatePriceUp);


function updatePriceLabels() {
    var sliders = slider.querySelector('.filter__price-input');
    var x, y = 0;

    var val1 = parseInt(sliders[0].value);
    var val2 = parseInt(sliders[1].value);

    // if (val1 >= val2) {
    //     // sliders[0].value = val2 - 0;
    //     sliders[1].value = val1;
    //     return; 
    // }
    // if (val2 <= val1) {
    //     sliders[0].value = val2;
    //     return;
    // }

    if (val1 >= val2 ||
        val2 <= val1) {
        sliders[0].value = val_outputs[0].val();
        sliders[1].value = val_outputs[1].val();
        return;
    }

    if (val1 > 0 || val2 < 99) {
        sliders.css({ "background": "-webkit-gradient(linear, 0 0, 100% 0, color-stop(0, #ccc), color-stop(" + (val1 / 100) + ", #ccc), color-stop(" + (val1 / 100) + ", #9c27b0), color-stop(" + (val2 / 100) + ", #9c27b0), color-stop(" + (val2 / 100) + ", #ccc))" });
    } else {
        sliders.css("background", "");
    }
    val_outputs[0].val(val1);
    val_outputs[1].val(val2);
}

function updatePriceUp() {
    // var sliders = slider.children('input');
    // var val = parseInt(sliders[0].value);
    var sliders = $(this).children('input');

    var val1 = sliders[0].value;
    // sliders.val(val1);
}