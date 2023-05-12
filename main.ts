let A = 0
let B = 0
let turnoff = 0
input.onButtonPressed(Button.A, function () {
    A = 1
    B = 0
})
input.onSound(DetectedSound.Loud, function () {
    if (turnoff == 0 && B == 1) {
        basic.showString("ON")
        turnoff = 1
        ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.White)
    } else if (turnoff == 1 && B == 1) {
        basic.showString("OFF")
        ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.OFF)
        turnoff = 0
    }
})
input.onButtonPressed(Button.B, function () {
    A = 0
    B = 1
})
basic.forever(function () {
    if (turnoff == 0 && (A == 1 && ModuleWorld_Digital.Button(ModuleWorld_Digital.mwDigitalNum.P0P1, ModuleWorld_Digital.enButton.Press))) {
        basic.showString("ON")
        ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.White)
        turnoff = 1
    } else if (turnoff == 1 && (A == 1 && ModuleWorld_Digital.Button(ModuleWorld_Digital.mwDigitalNum.P0P1, ModuleWorld_Digital.enButton.Press))) {
        basic.showString("OFF")
        ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.OFF)
        turnoff = 0
    }
})
