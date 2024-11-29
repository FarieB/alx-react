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

// Export normalized data and schema
export { normalizedData, user, message, notification };
