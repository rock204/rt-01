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
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    mode = 1
})
function junbi () {
    basic.pause(1000)
    basic.clearScreen()
    mode = 2
}
let rt = 0
let st_time = 0
let mode = 0
basic.showString("RT ProGPIO")
mode = 999
pins.setPull(DigitalPin.P1, PinPullMode.PullDown)
pins.digitalWritePin(DigitalPin.P0, 0)
basic.forever(function () {
    // 測定前でない
    // 
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
