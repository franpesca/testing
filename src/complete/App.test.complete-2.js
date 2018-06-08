/* leave first line blank for cq */
import App from './App';
import React from 'react';
import { shallow } from 'enzyme';

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
