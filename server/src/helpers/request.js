import axios from 'axios';
import getConfig from '../config';

const createInstance = (req) => {
    return axios.create({
        baseURL: `${getConfig('API_URL')}`,
        headers: {
            cookies: req.get('cookies') || '',
        }
    });
};

export default createInstance;
