import {combineReducers} from 'redux';

const initialState = {
  name: 'Angga Maualna',
};

const initialRegister = {
  form: {
    fullName: '',
    email: '',
    password: '',
  },
  title: 'Register Page',
  desc: 'ini adalah desc untuk register',
};

const RegisterReducer = (state = initialRegister, action) => {
  if (action.type === 'SET_TITLE') {
    return {
      ...state,
      title: 'Ganti Title Baru',
    };
  }
  if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue,
      },
    };
  }
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
