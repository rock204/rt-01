input.onPinPressed(TouchPin.P0, function () {
    if (mode == 3) {
        mode = 4
        rt = (input.runningTime() - st_time) / 1000
        basic.clearScreen()
        basic.showNumber(rt)
        rt_array.push(rt)
        kaisu += 1
        datalogger.log(
        datalogger.createCV("no", kaisu),
        datalogger.createCV("RT", rt)
        )
        if (kaisu >= n) {
            basic.showString("END")
            mode = 999
            print_data()
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
function print_data () {
    serial.writeLine("---reaction time data---")
    for (let カウンター = 0; カウンター <= n - 1; カウンター++) {
        serial.writeNumber(カウンター + 1)
        serial.writeString("--")
        serial.writeLine("" + (rt_array[カウンター]))
    }
    serial.writeLine("------------------------")
    serial.writeValue("min", custom.calculateMin(rt_array))
    serial.writeValue("max", custom.calculateMax(rt_array))
    serial.writeValue("mean", custom.calculateMean(rt_array))
    serial.writeValue("std", custom.calculateStandardDeviation(rt_array))
}
input.onButtonPressed(Button.A, function () {
    mode = 1
    kaisu = 0
    rt_array = []
    datalogger.deleteLog(datalogger.DeleteType.Full)
    datalogger.setColumnTitles(
    "no",
    "RT"
    )
})
function junbi () {
    basic.showIcon(IconNames.Square)
    basic.pause(1000)
    basic.clearScreen()
    mode = 2
}
let kaisu = 0
let rt_array: number[] = []
let st_time = 0
let rt = 0
let n = 0
let mode = 0
basic.showString("RT Pro")
mode = 999
n = 5
datalogger.mirrorToSerial(false)
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
