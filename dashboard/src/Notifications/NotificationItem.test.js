import React from 'react';
import { render } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  it('calls console.log when markAsRead is invoked', () => {
    // Mock console.log
    const consoleLogSpy = jest.spyOn(console, 'log');

    // Render the Notifications component
    const { getByText } = render(<NotificationItem />);

    // Find an element that triggers markAsRead (you may adjust this based on your component)
    const notificationElement = getByText('New course available');

    // Trigger markAsRead (you may pass the necessary props depending on your component implementation)
    fireEvent.click(notificationElement);

    // Assert that console.log was called with the expected message
    expect(consoleLogSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');

    // Clean up
    consoleLogSpy.mockRestore();
  });
});
