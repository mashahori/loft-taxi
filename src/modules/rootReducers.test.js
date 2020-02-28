import { rootReducer, INIT_STATE } from './rootReducer.js';
import '@testing-library/jest-dom/extend-expect'

describe('reducers', () => {
  test('LOG_IN', () => {
   const action = {
     type: 'LOG_IN',
     payload: {
       email: 'email',
       password: 'password',
     }
   }

   expect(rootReducer(INIT_STATE, action)).toEqual({
     ...INIT_STATE,
     authed: true,
     user: {
       email: action.payload.email,
       password: action.payload.password,
       },
     });
   });

    test('SIGN_UP', () => {
     const action = {
       type: 'SIGN_UP',
       payload: {
         user: {
         email: 'email',
         password: 'password',
         name: 'name',
         surname: 'surname',
         },
       }
     };

     expect(rootReducer(INIT_STATE, action)).toEqual({
       ...INIT_STATE,
       authed: true,
       user: {
         email: action.payload.email,
         password: action.payload.password,
         name: action.payload.name,
         surname: action.payload.surname,
         },
       });
     });

    test('LOG_OUT', () => {
     const action = {
       type: 'LOG_OUT',
     }

     expect(rootReducer(INIT_STATE, action)).toEqual({
       ...INIT_STATE,
       authed: false,
       user: {
         email: '',
         password: '',
         },
       });
     });

     test('ADD_CARD', () => {
      const action = {
        type: 'ADD_CARD',
        payload: {
          card : {
            number: 'naumber',
            name: 'name',
            date: 'date',
            cvc: 'cvc',
          },
        },
      }

      expect(rootReducer(INIT_STATE, action)).toEqual({
        ...INIT_STATE,
        authed: false,
        card : {
          number: action.payload.number,
          name: action.payload.name,
          date:  action.payload.date,
          cvc:  action.payload.cvc,
          },
        cardIsExist: true,
        });
      });

    test('FAILURE', () => {
     const action = {
       type: 'FAILURE',
       payload: {
         errorMessage: 'error message'
       }
     }

     expect(rootReducer(INIT_STATE, action)).toEqual({
       ...INIT_STATE,
       error: true,
       errorMessage: action.payload,
       });
     });
});
