#!/usr/bin/env node
import program from 'commander';
import getInfoByIp from '..';

program
  .version('0.0.2')
  .arguments('[ip]')
  .description('Returns geo information to ip address')
  .action((ip) => {
    console.log(getInfoByIp(ip));
  })
  .parse(process.argv);
