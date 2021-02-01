const os = require("os"); // Built In

// 3rd party
// const Color = require("color");
const chalk = require("chalk");

// Local
const training = require("./training");
const { sum, subtract } = require("./utility");

const log = console.log;

log("Platform: " + os.platform());
log("Architecture: " + os.arch());

log("\nTraining:\n");
log("Title: ", training.title);
log("Topic: ", training.topic);

log("\nUtility:\n");
log("2 + 3 :", sum(2, 3));
log("5 - 2 :", subtract(5, 2));

log("\nChalk: \n");

log(chalk.bold.red("Hello world!"));

// Use RGB colors in terminal emulators that support it.
log(chalk.keyword("orange")("Yay for orange colored text!"));
log(chalk.green.underline("Underlined greenish color"));

log("\n");
// const color = Color("#7743CE").alpha(0.5).lighten(0.5);
// log(color.hsl().string()); // 'hsla(262, 59%, 81%, 0.5)'

// log(color.cmyk().round().array()); // [ 16, 25, 0, 8, 0.5 ]

// log(color.ansi256().object()); // { ansi256: 183, alpha: 0.5 }
