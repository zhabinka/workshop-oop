import 'source-map-support/register';
import axios from 'axios';

const geoService = 'http://ip-api.com';

async function getInfoByIp(ip = '') {
  const url = `${geoService}/json/${ip}`;
  const { data } = await axios.get(url);
  return data;
}

export default getInfoByIp;
