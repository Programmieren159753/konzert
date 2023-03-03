def on_pin_touch_p1():
    music.stop_all_sounds()
    for index in range(4):
        basic.set_led_color(0xff8000)
        music.play_melody("B F D E G A C C5 ", 352)
input.on_pin_touch_event(TouchPin.P1, input.button_event_down(), on_pin_touch_p1)

def on_button_a():
    music.stop_all_sounds()
    for index2 in range(4):
        basic.set_led_color(0x000000)
        music.play_melody("C5 C B D A E G F ", 346)
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_b():
    music.stop_all_sounds()
    for index3 in range(4):
        basic.set_led_color(0x0000ff)
        music.play_melody("C5 A E C F G B D ", 428)
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

def on_pin_touch_p0():
    music.stop_all_sounds()
    for index4 in range(4):
        basic.set_led_color(0xff0000)
        music.play_melody("E F B D C5 G A C ", 120)
input.on_pin_touch_event(TouchPin.P0, input.button_event_down(), on_pin_touch_p0)

def on_forever():
    music.play_melody("B F D E G A C C5 ", 352)
    music.play_melody("C5 C B D A E G F ", 346)
    music.play_melody("C5 A E C F G B D ", 428)
    music.play_melody("G C5 F E A C5 D B", 500)
basic.forever(on_forever)
