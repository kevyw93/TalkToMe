export const getAllUsers = () => {

  return $.ajax({
    type: 'get',
    url: 'api/users'
  });
};
