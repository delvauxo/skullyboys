const skullsArray = [
    'broken_bones_skully_golden_landing.png',
    'glow_skully_landing.png',
    'broken_bones_skully_iron_landing.png',
    'enraged_bones_skully_pink_landing.png',
]

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