export const signup = (user) => {
  return $.ajax({
    type: 'post',
    url: 'users',
    data: user
  });
};

export const login = (user) => {
  return $.ajax({
    type: 'post',
    url: 'users/sign_in',
    data: user
  });
};

export const logout = () => {
  return $.ajax({
    type: 'delete',
    url: 'users/sign_out'
  });
};
