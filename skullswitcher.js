const skullsArray = [
    'broken_bones_skully_golden_landing.png',
    'glow_skully_landing.png',
    'broken_bones_skully_iron_landing.png',
    'enraged_bones_skully_pink_landing.png',
]

let images = [];
function preload() {
    for (let i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

//-- usage --//
preload(
    "https://www.skullyboys.io/img/broken_bones_skully_golden_landing.png",
    "https://www.skullyboys.io/img/glow_skully_landing.png",
    "https://www.skullyboys.io/img/broken_bones_skully_iron_landing.png",
    "https://www.skullyboys.io/img/enraged_bones_skully_pink_landing.png",
    "https://www.skullyboys.io/img/skully_necklace.png"

)

let count = 0
window.setInterval(function () {

    $('img#skull').fadeOut(1000, function () {
        $('img#skull').attr('src', './img/' + skullsArray[count])
    }).fadeIn(1000)
    $('img#necklace').fadeOut(1000, function () {
        $('img#necklace').attr('src', './img/skully_necklace.png')
    }).fadeIn(1000)
    
    count++
    if (count >= skullsArray.length) {
        count = 0
    }
}, 6000)

