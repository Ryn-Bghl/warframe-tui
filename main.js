import { cursor } from "./cursor.js";
import { screen } from "./screen.js";

// Set raw mode and resume the input stream
process.stdin.setRawMode(true);
process.stdin.resume();

// Set encoding to utf8
process.stdin.setEncoding("utf8");

console.log(screen, cursor);

// Clear the entire screen before rendering
screen.clearScreen();

// Get max x and y
const maxX = process.stdout.columns;
const maxY = process.stdout.rows;

// Function to draw a box on the console
// maxX is the width of the box and maxY is the height
function drawBox(maxX, maxY) {
  // Clear the entire screen
  screen.clearScreen();

  // Set cursor to top left
  cursor.moveTo(1, 1);

  screen.drawBox(1, maxX, 1, maxY + 1);
}

// Example box 30 cols wide, 10 rows tall
drawBox(maxX, maxY);

// Exit on Ctrl+C if stdin is a TTY
if (process.stdin.isTTY) {
  process.stdin.on("data", function (key) {
    if (key === "\u0003") {
      // Ctrl+C
      cursor.moveTo(1, 1);
      screen.clearScreen();
      process.exit();
    }
  });
}
