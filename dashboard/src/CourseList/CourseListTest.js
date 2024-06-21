import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList Component Tests', () => {
  it('renders correctly with empty array or no listCourses property', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders listCourses correctly', () => {
    const courses = [
      { id: 1, name: 'Course 1', credit: 3 },
      { id: 2, name: 'Course 2', credit: 4 }
    ];
    const wrapper = shallow(<CourseList listCourses={courses} />);
    expect(wrapper.find(CourseListRow)).toHaveLength(courses.length);
  });
});
  