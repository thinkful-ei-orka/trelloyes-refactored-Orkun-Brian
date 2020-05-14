import React from 'react';
import { render } from '@testing-library/react';
import List from './List';
import ReactDOM from 'react-dom';

describe('<List />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        let propsVar = {header: 'test header', cards:[{id: 'a',title:'Test Card',content:'loren ipsom'}]}
        ReactDOM.render(<List {...propsVar}/>, div);

        ReactDOM.unmountComponentAtNode(div);
});
});
// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
