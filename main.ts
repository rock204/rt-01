function taiki () {
    basic.pause(randint(1000, 5000))
    mode = 3
    basic.showIcon(IconNames.Heart)
    st_time = input.runningTime()
}
function get_rt () {
    if (input.pinIsPressed(TouchPin.P0)) {
        mode = 4
        rt = (input.runningTime() - st_time) / 1000
        basic.clearScreen()
        basic.showNumber(rt)
        mode = 999
    }
}
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Square)
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
basic.showString("RT Pro")
mode = 999
basic.forever(function () {
    if (mode != 999) {
        if (mode == 1) {
            junbi()
        }
        if (mode == 2) {
            taiki()
        }
        if (mode == 3) {
            get_rt()
        }
    }
})
