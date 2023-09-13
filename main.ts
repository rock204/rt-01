input.onPinPressed(TouchPin.P0, function () {
    if (mode == 3) {
        mode = 4
        rt = (input.runningTime() - st_time) / 1000
        basic.clearScreen()
        basic.showNumber(rt)
        kaisu += 1
        if (kaisu >= n) {
            basic.showString("END")
            mode = 999
        } else {
            mode = 1
        }
    }
})
function taiki () {
    basic.pause(randint(1000, 5000))
    mode = 3
    st_time = input.runningTime()
    basic.showIcon(IconNames.Heart)
}
input.onButtonPressed(Button.A, function () {
    mode = 1
    kaisu = 0
})
function junbi () {
    basic.showIcon(IconNames.Square)
    basic.pause(1000)
    basic.clearScreen()
    mode = 2
}
let kaisu = 0
let st_time = 0
let rt = 0
let n = 0
let mode = 0
basic.showString("RT Pro")
mode = 999
n = 5
basic.forever(function () {
    if (mode != 999) {
        if (mode == 1) {
            junbi()
        }
        if (mode == 2) {
            taiki()
        }
    }
})
