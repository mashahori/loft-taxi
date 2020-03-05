import { loginAction, failureAction, signupAction, logoutAction, addCardAction } from './actions.js'

export const INIT_STATE = {
  authed: localStorage.getItem('user') ? true : false,
  user: {
    email: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).email : '',
    password: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).info : '',
    name: '',
    surname: '',
  },
  card : {
    number: '',
    name: '',
    date: '',
    cvc: '',
  },
  cardIsExist: false,
  error: false,
};

export const rootReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case loginAction.toString():
      return { ...state,
        authed: true,
        user: {
          email: action.payload.email,
          password: action.payload.password,
        }
      };
    case signupAction.toString():
      return { ...state,
        authed: true,
        user: {
          email: action.payload.email,
          password: action.payload.password,
          name: action.payload.name,
          surname: action.payload.surname,
        }
      };
    case logoutAction.toString():
      return { ...state,
        authed: false,
        user: {
          email: '',
          password: '',
        },
      };
    case addCardAction.toString():
      return { ...state,
          card : {
            number: action.payload.number,
            name: action.payload.name,
            date:  action.payload.date,
            cvc:  action.payload.cvc,
          },
          cardIsExist: true,
      };
    case failureAction.toString():
      return { ...state,
        error: true,
        errorMessage: action.payload,
      }
    default:
      return state;
  }
};

export default rootReducer;
