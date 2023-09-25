function taiki () {
    basic.pause(randint(1000, 5000))
    mode = 3
    st_time = input.runningTime()
    pins.digitalWritePin(DigitalPin.P0, 1)
}
function get_rt () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        if (mode == 3) {
            mode = 4
            rt = (input.runningTime() - st_time) / 1000
            pins.digitalWritePin(DigitalPin.P0, 0)
            basic.showNumber(rt)
            mode = 999
        }
    }
}
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Square)
    mode = 1
    basic.pause(500)
    basic.clearScreen()
})
function junbi () {
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    mode = 2
}
let st_time = 0
let rt = 0
let mode = 0
basic.showString("RT Pro")
mode = 999
pins.setPull(DigitalPin.P0, PinPullMode.PullDown)
rt = pins.digitalReadPin(DigitalPin.P1)
basic.forever(function () {
    if (mode != 999) {
        if (mode == 1) {
            junbi()
        }
        if (mode == 2) {
            taiki()
        }
        get_rt()
    }
})
