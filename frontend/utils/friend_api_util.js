export const getAllUsers = () => {
  debugger
  return $.ajax({
    type: 'get',
    url: 'api/users'
  });
};
