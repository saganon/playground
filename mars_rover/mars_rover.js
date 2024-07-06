const direction = ["R", "L"];

function marsRover(startDirection, dimenstions, movement) {
  const moves = movement.split("");
  let gridX = 0;
  let gridY = 0;
  let compass = "N";
  const dimX = dimenstions[0];
  const dimY = dimenstions[1];
  let compassHistory = [];

  for (let index = 0; index < moves.length; index++) {
    const element = moves[index];

    if (
      (compassHistory[compassHistory.length - 1] === "W" && element === "R") ||
      (compassHistory[compassHistory.length - 1] === "E" && element === "L")
    ) {
      compass = "S";
    } else if (
      (compassHistory[compassHistory.length - 1] === "S" && element === "R") ||
      (compassHistory[compassHistory.length - 1] === "N" && element === "L")
    ) {
      compass = "E";
    } else if (
      (compassHistory[compassHistory.length - 1] === "E" && element === "R") ||
      (compassHistory[compassHistory.length - 1] === "W" && element === "L")
    ) {
      compass = "N";
    } else if (
      (compassHistory[compassHistory.length - 1] === "N" && element === "R") ||
      (compassHistory[compassHistory.length - 1] === "S" && element === "L")
    ) {
      compass = "W";
    }

    if ((compass === "N" && element === "F") || (compass === "W" && element === "F")) {
      gridY += 1;
    } else if ((compass === "S" && element === "F") || compass === "E" && element === "F") {
      gridY -= 1;
    }

    compassHistory.push(compass);
  }
  console.log("compassHistory", compassHistory);

  if (gridX === dimX || gridX === -1 || gridY === dimY || gridY === -1) {
    return "RIP";
  }

  return `${gridX}:${gridY}:${compass}`;
}

// return marsRover([3, 3], "FFR");

module.exports = marsRover;

// ["F", "F"]
