export const getListOfUsers = async (userName) => {
  try {
    const fetchToApi = await fetch(
      `https://api.github.com/search/users?q=${userName}`
    );
    const response = await fetchToApi.json();
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
