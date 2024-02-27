import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconCaution from '../img/notification-svg/caution.svg';
import iconError from '../img/notification-svg/error.svg';
import iconHello from '../img/notification-svg/hello.svg';
import iconOk from '../img/notification-svg/ok.svg';

export function showNotification({
  title = 'Hello',
  message = 'Type in your message, please',
  backgroundColor = 'white',
  icon = iconCaution,
}) {
  return iziToast.show({
    titleSize: '16px',
    title: `${title}`,
    message: `${message}`,
    messageSize: '16px',
    closeOnEscape: true,
    position: 'topRight',
    backgroundColor: `${backgroundColor}`,
    iconUrl: `${icon}`,
  });
}

// ========= Notification Error object

// const notificationError = {
//   title: 'Error',
//   message: 'We are sorry, but you have reached the end of search results.',
//   backgroundColor: '#ef4040',
//   icon: iconError,
// };

// ========== This function awaits the object as argument

// import { showNotification } from './scripts/showNotification';

// showNotification({});
