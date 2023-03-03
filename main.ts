input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    music.stopAllSounds()
    for (let index = 0; index < 4; index++) {
        basic.setLedColor(0xff8000)
        music.playMelody("B F D E G A C C5 ", 352)
    }
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    music.stopAllSounds()
    for (let index = 0; index < 4; index++) {
        basic.setLedColor(0x000000)
        music.playMelody("C5 C B D A E G F ", 346)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    music.stopAllSounds()
    for (let index = 0; index < 4; index++) {
        basic.setLedColor(0x0000ff)
        music.playMelody("C5 A E C F G B D ", 428)
    }
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    music.stopAllSounds()
    for (let index = 0; index < 4; index++) {
        basic.setLedColor(0xff0000)
        music.playMelody("E F B D C5 G A C ", 120)
    }
})
basic.forever(function () {
    music.playMelody("B F D E G A C C5 ", 352)
    music.playMelody("C5 C B D A E G F ", 352)
    music.playMelody("B F D E G A C C5 ", 352)
    music.playMelody("C5 A E C F G B D ", 352)
    music.playMelody("G C5 F E A C5 D B", 352)
    music.playMelody("B F D E G A C C5 ", 352)
    music.playMelody("G A C F E G C5 B G A F E C A D B C5 G F ", 352)
    music.playMelody("B F D E G A C C5 ", 352)
    music.playMelody("B F D E G A C C G D F B ", 352)
})
