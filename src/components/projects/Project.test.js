import React from 'react';
import { shallow } from 'enzyme';
import Project from './Project';

describe('project component', () => {
  it('renders a snapshot for project', () => {
    const project = {
      title: 'Project',
      url: './url',
      imgUrl: './image',
      summary: 'text',
      id: 'someIdthing'
    };
    const wrapper = shallow(<Project project={project} />);
    expect(wrapper).toMatchSnapshot();
  });
});
