// import React from 'react';
// import '@testing-library/jest-dom/extend-expect';
// import { render, fireEvent } from '@testing-library/react';
//
// import  { Context }  from './App.js';
//
//
// let isLoggedIn = '';
//
// const login =() => {
//   isLoggedIn = 'isLoggedIn';
// }
//
// const Mock = () => (
//   <Context.Provider value={{ login, isLoggedIn }}>
//       <Context.Consumer>
//           {(value) => {
//               return <>
//                   <button data-testid="login" type="button" onClick={value.login()}></button>
//                   <div data-testid="state">{value.isLoggedIn}</div>
//               </>
//           }}
//       </Context.Consumer>
//   </Context.Provider>
// );
//
// describe('context', () => {
//   test(('context has logged in'), () => {
//     const { getByTestId } = render(Mock());
//         const div = getByTestId('state');
//         expect(div.textContent).toEqual('');
//   });
//
//   test(('context has logged in'), () => {
//     const { getByTestId } = render(Mock());
//         const div = getByTestId('state');
//         const btn = getByTestId('login');
//         fireEvent.click(btn);
//         expect(div.textContent).toEqual('isLoggedIn');
//   });
// });
