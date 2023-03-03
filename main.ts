input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    music.stopAllSounds()
})
let list = [0, 1]
basic.forever(function () {
    for (let Wert of list._pickRandom()) {
        while (list == 0) {
            for (let index = 0; index < 20; index++) {
                music.playMelody("B F D E G A C C5 ", 352)
                music.playMelody("E F B D C5 G A C ", 120)
            }
        }
        while (list == 1) {
            for (let index = 0; index < 60; index++) {
                music.playMelody("C5 A E C F G B D ", 428)
            }
        }
    }
})
