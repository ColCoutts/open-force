import React from 'react';
import { shallow } from 'enzyme';
import Projects from './Projects';

describe('projects component snapshot', () => {
  it('renders a snapshot', () => {
    const projects = [
      {
        title: 'Project',
        url: './url',
        imgUrl: './image',
        summary: 'text',
        id: 'someIdthing'
      }
    ];

    const wrapper = shallow(<Projects projects={projects} />);
    expect(wrapper).toMatchSnapshot();
  });
});
