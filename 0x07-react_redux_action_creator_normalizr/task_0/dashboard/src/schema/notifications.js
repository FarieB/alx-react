import * as notificationsData from '../../../notifications.json';

/**
 * Retrieves all notifications for a given user ID.
 * @param {string} userId - The ID of the user.
 * @returns {Array} - Array of notification objects for the user.
 */
export function getAllNotificationsByUser(userId) {
  const { notifications, users } = notificationsData.default || notificationsData;

  return notifications.filter(
    (notification) =>
      users[notification.author] && notification.author === userId
  ).map((notification) => {
    const context = notificationsData.default.contexts[notification.context];
    return { ...notification, ...context };
  });
}
