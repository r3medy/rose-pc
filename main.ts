// TODO: remove "CPU Cooler"
// TODO: remove "Case", sort case tower type
// TODO: remove "Processor"
// TODO: remove "Video Card"
// TODO: remove "Memory", sort by cl, sort by mhz
// TODO: remove "Motherboard", remove size, remove socket
// TODO: remove "Power Supply", remove size, sort by modular type

//  "up", "left", "right", "down"

import keypress from "keypress";

keypress(process.stdin);

process.stdin.on('keypress', function (ch, key) {
  console.log('got "keypress"', key["name"]);
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();