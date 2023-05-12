turnoff = 0

def on_sound_loud():
    global turnoff
    if turnoff == 0:
        basic.show_string("ON")
        ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.WHITE)
        turnoff = 1
    else:
        if turnoff == 1:
            basic.show_string("OFF")
            ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.OFF)
            turnoff = 0
input.on_sound(DetectedSound.LOUD, on_sound_loud)

def on_forever():
    global turnoff
    if turnoff == 0 and ModuleWorld_Digital.button(ModuleWorld_Digital.mwDigitalNum.P0P1,
        ModuleWorld_Digital.enButton.PRESS):
        basic.show_string("ON")
        ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.WHITE)
        turnoff = 1
    else:
        if turnoff == 1 and ModuleWorld_Digital.button(ModuleWorld_Digital.mwDigitalNum.P0P1,
            ModuleWorld_Digital.enButton.PRESS):
            basic.show_string("OFF")
            ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.OFF)
            turnoff = 0
basic.forever(on_forever)
