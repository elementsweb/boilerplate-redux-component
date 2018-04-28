import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { Button } from '../Button';

describe('<Button />', () => {
  let props;

  beforeEach(() => {
    props = {
      counter: 0,
      increment: jest.fn(),
    };
  });

  it('renders correctly', () => {
    const tree = renderer.create(
      <Button {...props}>
        Button
      </Button>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls "onClick" function when clicked', () => {
    const wrapper = shallow(
      <Button {...props}>
        Button
      </Button>
    );
    wrapper.simulate('click');
    expect(props.increment).toHaveBeenCalled();
  });
});
