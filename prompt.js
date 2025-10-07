export class prompt {
  static getInput(promptText) {
    return new Promise((resolve) => {
      process.stdout.write(promptText);
      process.stdin.once("data", (data) => {
        resolve(data.toString().trim());
      });
    });
  }

  static async getPassword(promptText) {
    return new Promise((resolve) => {
      process.stdout.write(promptText);
      process.stdin.once("data", (data) => {
        resolve(data.toString().trim());
      });
    });
  }
}
