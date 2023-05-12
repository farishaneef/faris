let turnoff = 0
input.onSound(DetectedSound.Loud, function () {
    if (turnoff == 0) {
        basic.showString("ON")
        ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.White)
        turnoff = 1
    } else {
        if (turnoff == 1) {
            basic.showString("OFF")
            ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.OFF)
            turnoff = 0
        }
    }
})
basic.forever(function () {
    if (turnoff == 0 && ModuleWorld_Digital.Button(ModuleWorld_Digital.mwDigitalNum.P0P1, ModuleWorld_Digital.enButton.Press)) {
        basic.showString("ON")
        ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.White)
        turnoff = 1
    } else {
        if (turnoff == 1 && ModuleWorld_Digital.Button(ModuleWorld_Digital.mwDigitalNum.P0P1, ModuleWorld_Digital.enButton.Press)) {
            basic.showString("OFF")
            ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.OFF)
            turnoff = 0
        }
    }
})
