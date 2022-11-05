import PropTypes from 'prop-types';
import {
  NotificationContainer,
  NotificationTitle,
} from 'components/DefaultNotification/DefaultNotification.styled';

export const Notification = ({ message }) => {
  return (
    <NotificationContainer>
      <NotificationTitle>{message}</NotificationTitle>
    </NotificationContainer>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
