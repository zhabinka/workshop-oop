import program from 'commander';
import { description, version } from '../package.json';
import getInfoByIp from '.';

program
  .version(version)
  .description(description)
  .arguments('[ip]')
  .action((ip) => {
    console.log(getInfoByIp(ip));
  });

export default () => {
  program.parse(process.argv);
};
