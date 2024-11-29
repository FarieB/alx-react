import { normalize, schema } from 'normalizr';
import * as notificationsData from '../../../notifications.json';

// Define the schemas
const user = new schema.Entity('users');
const message = new schema.Entity(
  'messages',
  {},
  { idAttribute: 'guid' }
);
const notification = new schema.Entity(
  'notifications',
  {
    author: user,
    context: message,
  },
  { idAttribute: 'id' }
);

// Normalize the notifications data
const normalizedData = normalize(notificationsData.default || notificationsData, {
  notifications: [notification],
});

/**
 * Retrieves all notifications for a given user ID using the normalized dataset.
 * @param {string} userId - The ID of the user.
 * @returns {Array} - Array of notification context objects for the user.
 */
export function getAllNotificationsByUser(userId) {
  const notifications = normalizedData.entities.notifications;
  const messages = normalizedData.entities.messages;

  return Object.values(notifications)
    .filter((notification) => notification.author === userId)
    .map((notification) => messages[notification.context]);
}

export { normalizedData, user, message, notification };
