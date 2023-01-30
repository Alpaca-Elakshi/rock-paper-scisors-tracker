function Updatescores () {
    OLED.clear()
    OLED.writeStringNewLine("Player 1: " + P1)
    OLED.newLine()
    OLED.writeStringNewLine("Player 2: " + P2)
    OLED.newLine()
    OLED.writeStringNewLine("Ties: " + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds" + Rounds)
}
let Ties = 0
let P2 = 0
let P1 = 0
let Rounds = 0
OLED.init(128, 64)
OLED.writeStringNewLine("Game time?")
Rounds = 0
P1 = 0
P2 = 0
Ties = 0
basic.pause(2000)
Updatescores()
