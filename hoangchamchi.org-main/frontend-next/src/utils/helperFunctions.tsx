// utils/getUserFromCookies.js

import Cookies from 'js-cookie';

// Function to get user and JWT from cookies, providing dummy values if not found
export const getUserFromCookies = () => {
  // Retrieve the hoangchamchi_user and hoangchamchi_jwt from cookies
  const userName = Cookies.get('hoangchamchi_userName') || 'dummyuserName';
  const userId = Cookies.get('hoangchamchi_userId') || 'dummyuserId';
  const jwt = Cookies.get('hoangchamchi_jwt') || 'dummy.JWT.token';

  console.log('User Name:', userName);
  console.log('User ID:', userId);
  console.log('JWT:', jwt);

  // Return the user and jwt token
  return { userName, userId, jwt };
};
