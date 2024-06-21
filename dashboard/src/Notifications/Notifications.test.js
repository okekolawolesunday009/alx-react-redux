import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications', () => {
  it('should not rerender with the same list', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
    ];

    const wrapper = shallow(<Notifications listNotifications={notifications} />);
    const instance = wrapper.instance();
    const shouldUpdate = instance.shouldComponentUpdate({ listNotifications: notifications });
    expect(shouldUpdate).toBe(false);
  });

  it('should rerender with a longer list', () => {
    const initialNotifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
    ];

    const newNotifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
      { id: 3, type: 'urgent', value: 'Notification 3' },
    ];

    const wrapper = shallow(<Notifications listNotifications={initialNotifications} />);
    const instance = wrapper.instance();
    const shouldUpdate = instance.shouldComponentUpdate({ listNotifications: newNotifications });
    expect(shouldUpdate).toBe(true);
  });
});
