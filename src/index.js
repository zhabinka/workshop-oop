import 'source-map-support/register';
import axios from 'axios';

const geoService = 'http://ip-api.com';

const infoFromRequest = (ip) => {
  const url = `${geoService}/json/${ip}`;

  axios.get(url)
    .then((response) => {
      const { data } = response;

      console.log(data);
    })
    .catch(() => {
      console.log('error!!!!!'); // don't work
    });
};

const getInfoByIp = (userIp) => {
  if (!userIp) {
    console.log('Error! You did not enter ip. Continue with 134.234.3.2.');
  }
  const currentIp = !userIp ? '134.234.3.2' : userIp; // hardcore

  (async () => {
    await infoFromRequest(currentIp);
  })();
};

export default getInfoByIp;
