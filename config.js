import fs, { watchFile, unwatchFile, readFileSync } from 'fs';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

global.owner = [
  ['6282147142709', 'ZanzHost', true],
  ['6283893345561', 'ZanzShop', true],
  ['6281226834541', 'Kevin', true],
]
// [number, dia creator/owner?, dia developer?]
// Put your number here
global.mods = [] // Want some help?
global.prems = JSON.parse(readFileSync('./src/premium.json')) // Premium user has unlimited limit
global.wm = 'PANEL BOT'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(file)
})
