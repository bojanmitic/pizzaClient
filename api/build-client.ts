import axios from 'axios';
import { NextApiRequest } from 'next';

export default ({ req }: { req: NextApiRequest }) => {
  if (typeof window === 'undefined') {
    // we are on the server
    return axios.create({
      baseURL: 'https://localhost:5000/api/',
      headers: req.headers,
    });
  } else {
    //we are on the browser
    return axios.create({
      baseURL: '/',
    });
  }
};
