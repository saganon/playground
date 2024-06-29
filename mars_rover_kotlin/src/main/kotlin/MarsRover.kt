package org.example

class MarsRover {
    fun execution(movement: String = "FFF"): String {
        val moves = movement.split("")
        var gridX = 0
        var gridY = 0
        var compass = "N"
        val compassHistory = mutableListOf<String>()

        for (element in moves) {
            if (compassHistory.size > 0) {

                if ((compassHistory[compassHistory.size - 1] == "W" && element == "R") || (compassHistory[compassHistory.size - 1] == "E" && element == "L")) {
                    compass = "S"
                } else if ((compassHistory[compassHistory.size - 1] == "S" && element == "R") || (compassHistory[compassHistory.size - 1] == "N" && element == "L")) {
                    compass = "E"
                } else if ((compassHistory[compassHistory.size - 1] == "E" && element == "R") || (compassHistory[compassHistory.size - 1] == "W" && element == "L")) {
                    compass = "N"
                } else if ((compassHistory[compassHistory.size - 1] == "N" && element == "R") || (compassHistory[compassHistory.size - 1] == "S" && element == "L")) {
                    compass = "W"
                }
            }

            if (compass == "N" && element == "F") {
                gridY += 1
            } else if (compass == "S" && element == "F") {
                gridY -= 1
            } else if (compass == "W" && element == "F") {
                gridX += 1
            } else if (compass == "E" && element == "F") {
                gridX -= 1
            }

            compassHistory.add(compass)
        }

        println("compassHistory: $compassHistory")

        return "$gridX:$gridY:$compass"
    }
}