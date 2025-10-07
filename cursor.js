export class cursor {
  static moveTo(x, y) {
    process.stdout.write(`\x1b[${y};${x}H`);
  }

  static clearScreen() {
    process.stdout.write("\x1b[2J\x1b[0;0H");
  }

  static hide() {
    process.stdout.write("\x1b[?25l");
  }

  static getCursorPos() {
    const stdout = process.stdout;
    const cursorPos = {};

    // Save current cursor position
    stdout.write("\x1b[6n");
    stdout.once("data", (data) => {
      const [y, x] = data.match(/\d+/g).map(Number);
      cursorPos.x = x;
      cursorPos.y = y;
    });

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(cursorPos);
      }, 10);
    });
  }
}
