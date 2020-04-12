import {combineReducers} from 'redux';

const initialState = {
  name: 'Angga Maualna',
};

const initialRegister = {
  title: 'Register Page',
  desc: 'ini adalah desc untuk register',
};

const RegisterReducer = (state = initialRegister, action) => {
  return state;
};

const LoginReducer = (state = initialLogin, action) => {
  return state;
};

const initialLogin = {
  info: 'Tolong masukan password anda',
  isLogin: true,
};

const reducer = combineReducers({
  RegisterReducer,
  LoginReducer,
});

export default reducer;
