export const getAllUsers = (user) => {
  return $.ajax({
    type: 'get',
    url: 'api/users'
  });
};
