#!/usr/bin/env node
import { program } from 'commander';
import genDiff from '../src/index.js';

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .argument('filepath1')
  .argument('filepath2')
  .option('-f --format <type>', 'output format')
  .action(() => {
    const diff = genDiff();
    return console.log(diff);
  });

program.parse();
