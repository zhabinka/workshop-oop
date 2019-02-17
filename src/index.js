import 'source-map-support/register';
import axios from 'axios';

const geoService = 'http://ip-api.com';

async function getInfoByIp(ip = '') {
  const url = `${geoService}/json/${ip}`;
  try {
    const { data } = await axios.get(url);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export default getInfoByIp;
