import 'source-map-support/register';
import axios from 'axios';

const geoService = 'http://ip-api.com';

const getInfoByIp = (yourIp = '37.214.79.98') => {
  if (!yourIp || yourIp === '37.214.79.98') { // hardcore
    console.log('Error! You did not enter ip. Continue with 37.214.79.98.');
  }

  const url = `${geoService}/json/${yourIp}`;

  const infoFromRequest = axios.get(url)
    .then((response) => {
      const { data } = response;

      console.log(`Your country: ${data.country}`);
      return data.country;
    });

  return infoFromRequest; // Promise { <pending> } Как извлечь и использовать?
};

export default getInfoByIp;
