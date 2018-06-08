import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

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

describe('App', () => {
  it('should have the `th` "Items"', () => {
    const wrapper = shallow(
      <App />
    );
    expect(
      wrapper.contains(<th>Items</th>)
    ).toBe(true);
  });

  it('should have a `button` element', () => {
    const wrapper = shallow(
      <App />
    );
    expect(
      wrapper.containsMatchingElement(
        <button>Add item</button>
      )
    ).toBe(true);
  });

  it('should have an `input` element', () => {
    const wrapper = shallow(
      <App />
    );
    expect(
      wrapper.containsMatchingElement(
        <input />
      )
    ).toBe(true);
  });

  it('`button` should be disabled', () => {
    const wrapper = shallow(
      <App />
    );
    const button = wrapper.find('button').first();  //find ti fa trovare qualcosa che abbia come stile button, first xk e' il primo che trova nel dom che i interessa 
    expect(
      button.props().disabled    //il primo elemento di classe button, guarda nelle sue props e verifica che ci sia disable
    ).toBe(true);
  });
});
describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });

  it('should have the `th` "Items"', () => {
    expect(
      wrapper.contains(<th>Items</th>)
    ).toBe(true);
  });

  it('should have a `button` element', () => {
    expect(
      wrapper.containsMatchingElement(
        <button>Add item</button>
      )
    ).toBe(true);
  });

  it('should have an `input` element', () => {
    expect(
      wrapper.containsMatchingElement(
        <input />
      )
    ).toBe(true);
  });

  it('`button` should be disabled', () => {
    const button = wrapper.find('button').first();
    expect(
      button.props().disabled
    ).toBe(true);
  });

  describe('the user populates the input', () => {
    const item = 'Vancouver';

    beforeEach(() => {
      const input = wrapper.find('input').first(); //metti nell ogg input il primo ogg del dom che abbia come stile css input
      input.simulate('change', {        //simula il firing di un evento change. x far in modo che e.tar.val funzioni, devo costruirtr un ogg con una proprietA' target che ha dentro un valore value
        target: { value: item }   
      })
    });

    it('should update the state property `item`', () => {
      expect(
        wrapper.state().item      //dello statp prendo il valore di item che dev esser = all altro -item = vancuver-
      ).toEqual(item);
    });

    it('should enable `button`', () => {
      const button = wrapper.find('button').first();
      expect(
        button.props().disabled
      ).toBe(false);
    });
  });
});
