import React, { Component } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render} from '@testing-library/react';
import {Country} from './country';
import {prettyDOM} from '@testing-library/dom';

test('renders component', () => {
  const component = render(<Country name={ 'ARGENTINA'} imagen={'https://flagcdn.com/w320/cx.png'} continente={'America'} />);
  const name = component.container.querySelector('h1')

})