import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("Testing <CourseListRow />", () => {
  it("renders one cell with colspan = 2 when isHeader is true and textSecondCell is not provided", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="first cell test" />);
    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').prop('colSpan')).toEqual('2');
    expect(wrapper.find('th').text()).toEqual('first cell test');
    expect(wrapper.find('tr').prop('style')).toHaveProperty('backgroundColor', '#deb5b545');
  });

  it("renders two cells when isHeader is true and textSecondCell is provided", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="first cell test" textSecondCell="second cell test" />);
    expect(wrapper.find('th')).toHaveLength(2);
    expect(wrapper.find('th').at(0).text()).toEqual('first cell test');
    expect(wrapper.find('th').at(1).text()).toEqual('second cell test');
    expect(wrapper.find('tr').prop('style')).toHaveProperty('backgroundColor', '#deb5b545');
  });

  it("renders two td elements within a tr element when isHeader is false", () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="first cell test" textSecondCell="second cell test" />);
    expect(wrapper.find('td')).toHaveLength(2);
    expect(wrapper.find('td').at(0).text()).toEqual('first cell test');
    expect(wrapper.find('td').at(1).text()).toEqual('second cell test');
    expect(wrapper.find('tr').prop('style')).toHaveProperty('backgroundColor', '#f5f5f5ab');
  });
});
