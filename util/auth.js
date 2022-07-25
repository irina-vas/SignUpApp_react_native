import axios from 'axios';

const API_KEY = 'AIzaSyC60Uje4H5izy4cxO4yfNLCWU-rQsq_HlA';
const authenticate = async (mode, email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true
  });
  const token = response.data.idToken;
  return token;
}

export const createUser = async (email, password) => {
  // await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=' + API_KEY,
  //   {
  //     email: email,
  //     password: password,
  //     returnSecureToken: true
  //   }
  // );

  return authenticate('signUp', email, password);
}

export const login = async (email, password) => {
  return authenticate('signInWithPassword', email, password);
}