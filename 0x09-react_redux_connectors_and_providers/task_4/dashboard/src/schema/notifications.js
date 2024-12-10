import * as notificationsData from '../../notifications.json';
import { normalize, schema } from 'normalizr';

// Define schemas
const user = new schema.Entity('users');

const message = new schema.Entity(
  'messages',
  {},
  {
    idAttribute: 'guid', // Use `guid` as the unique identifier for messages
  }
);

const notification = new schema.Entity('notifications', {
  author: user,   // Link notifications to users
  context: message, // Link notifications to messages
});

// Normalize notifications data
const normalized = normalize(notificationsData.default, [notification]);

/**
 * Get all notifications for a specific user by their ID.
 * @param {string} userId - The ID of the user.
 * @returns {Array} - List of messages associated with the user's notifications.
 */
export const getAllNotificationsByUser = (userId) => {
  const notifications = normalized.entities.notifications || {};
  const messages = normalized.entities.messages || {};
  const notificationsByUser = [];

  for (const notificationId in notifications) {
    if (notifications[notificationId].author === userId) {
      const messageId = notifications[notificationId].context;
      if (messages[messageId]) {
        notificationsByUser.push(messages[messageId]);
      }
    }
  }

  return notificationsByUser;
};

// Export normalized data for external use
export { normalized };
