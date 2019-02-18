import program from 'commander';
import { description, version } from '../package.json';
import getInfoByIp from '.';

program
  .version(version)
  .description(description)
  .arguments('[ip]')
  .action(async (ip) => {
    const result = await getInfoByIp(ip);
    console.log(result);
  });

export default () => {
  program.parse(process.argv);
};
