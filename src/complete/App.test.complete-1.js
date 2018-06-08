/* leave first line blank for cq */
import App from './App';
import React from 'react';
import { shallow } from 'enzyme';   //controlla che il componente funzioni analizzando come e stato renderizzato. verifica che ci siano cose che ho programmato esserci. 
            //se e vero che componente si e renderizzato, allora mi aspetto che ci sia una tabella con ...bla bla
            //shallow ordina al motote di react di fare un rendering ed estrarre il dom fisico a un primo livello (solo primo livello dell albero)
describe('App', () => {
  it('should have the `th` "Items"', () => {
    const wrapper = shallow(
      <App />
    );
    expect(         //expect to be --> gest, mi aspetto che qualcosa funzioni o sia uguale a qlcosa
      wrapper.contains(<th>Items</th>)  //enzime ti torna un wrapper piu il risultato vero e proprio
    ).toBe(true);       //contains super , il match pero dev essere pefetto
  });
});
