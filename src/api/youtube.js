export const searchVideos = async (search) => {
  console.log('search', search);
  const apiUrl = `https://content.googleapis.com/youtube/v3/search?part=snippet&q=${search}&maxResults=20&key=AIzaSyCvDvb7_IkrwHc8uksWYib1KFPLTQCnvR4`;
  const response = await fetch(apiUrl);
  return response.json();
};
