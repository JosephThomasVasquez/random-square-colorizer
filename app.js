// Get grid element
const grid = document.getElementById("grid");

// Set amount of squares
const squares = 16;
// Set timer to 2 seconds using 8000ms
const ms2Seconds = 8000;

// Map
const lastChanged = {};

//  Create quares and add attributes
// ________________________________________________________________________
const generateSquares = (total) => {
  for (let i = 1; i <= total; i++) {
    const square = document.createElement("div");
    square.classList.add("color-square");
    square.setAttribute("id", i);

    grid.appendChild(square);
  }
};

generateSquares(squares);

// Generate a random integer from 1 to 16
// ________________________________________________________________________
const randomInt = (id) => {
  const randomValue = Math.floor(Math.random() * squares) + 1;
  return randomValue;
};

// Generate 3 random RGB values for styling a squares background
// ________________________________________________________________________
const randomizeColor = () => {
  const rgbValues = [];

  for (let i = 0; i < 3; i++) {
    const randomValue = Math.floor(Math.random() * 255) + 1;
    rgbValues.push(randomValue);
  }

  return rgbValues;
};

const allSquares = document.querySelectorAll(".color-square");

if (allSquares.length === 16) {
  // Run color changer
  // ________________________________________________________________________
  setInterval(() => {
    // get a random square by selecting a random dom element id
    const getSquare = document.getElementById(`${randomInt()}`);

    //   If the element does not exist then insert it into the map and set the current time in ms
    if (!lastChanged[getSquare.id]) {
      lastChanged[getSquare.id] = {
        element: getSquare.id,
        timeChanged: Date.now(),
      };

      // Set a random background color for the square
      getSquare.style.backgroundColor = `rgb(${randomizeColor().join(",")})`;
      getSquare.style.border = "2px solid rgba(0, 0, 0, 0)";

      // Check if the square id exists
    } else if (lastChanged[getSquare.id]) {
      // Check if the time now is greater or equal than 2 seconds which is 8000ms set by the ms2Seconds variable
      const comparedTime =
        Date.now() - lastChanged[getSquare.id].timeChanged >= ms2Seconds;

      if (comparedTime) {
        // Change the color, border and set the time to now
        lastChanged[getSquare.id].timeChanged = Date.now();
        getSquare.style.backgroundColor = `rgb(${randomizeColor().join(",")})`;
        getSquare.style.border = "2px solid rgba(0, 0, 0, 0)";
      } else {
        // getSquare.style.border = "2px solid red";
        getSquare.classList.toggle("flash");
      }
    }
  }, 250);
}
