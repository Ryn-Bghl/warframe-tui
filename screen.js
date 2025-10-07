import { cursor } from "./cursor.js";

export class screen {
  static clearScreen() {
    process.stdout.write("\x1b[2J\x1b[0;0H");
  }

  static drawBox(x_min, x_max, y_min, y_max) {
    // Clear the entire screen
    this.clearScreen();

    // Draw top horizontal line
    process.stdout.write(
      `\x1b[${y_min};${x_min}H` + "╔" + "═".repeat(x_max - x_min - 1) + "╗"
    );

    // Draw sides
    for (let y = y_min + 1; y < y_max; y++) {
      process.stdout.write(`\x1b[${y};${x_min}H` + "║"); // left
      process.stdout.write(`\x1b[${y};${x_max}H` + "║"); // right
    }

    // Draw bottom horizontal line
    process.stdout.write(
      `\x1b[${y_max};${x_min}H` + "╚" + "═".repeat(x_max - x_min - 1) + "╝"
    );

    // Move cursor to the center of the box
    const centerX = Math.floor((x_min + x_max) / 2);
    const centerY = Math.floor((y_min + y_max) / 2);
    cursor.moveTo(centerX, centerY);
  }
}
