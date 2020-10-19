input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    chance = 3
    basic.showNumber(chance)
    while (chance > 0) {
    	
    }
})
let chance = 0
basic.showIcon(IconNames.Heart)
