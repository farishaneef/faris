input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # # # #
        . # # # #
        . # # . #
        # # . # #
        . . . . .
        `)
    music.playMelody("C5 B A G F E D C ", 327)
    basic.showLeds(`
        . # # # #
        . # # # #
        . # # . #
        # # . # #
        . . . . .
        `)
})
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
})
