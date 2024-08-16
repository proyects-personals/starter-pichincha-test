import axios from 'axios';

const authorId = '181018';

const axiosInstance = axios.create({
  baseURL: 'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros',
  headers: {
    'authorId': authorId,
    'Content-Type': 'application/json'
  },
});

export default axiosInstance;
