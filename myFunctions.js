const axios = require("axios");

const squareNumbers = (numbers) => numbers.map((number) => number * number);

const sumSquareNumbers = (numbers) => {
  return squareNumbers(numbers).reduce(
    (accumulator, number) => accumulator + number,
    0
  );
};

const getPostsUsingAxios = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  // Some computation goes here...
  response.data.forEach((post) => (post.body = "User ID: " + post.userId));
  return response.data;
};

const filterGetPostsUsingAxios = async (userId) => {
  let posts = await getPostsUsingAxios();
  return posts.filter((post) => post.userId === userId);
};

const sumOfNumbers = (a, b) => a + b;

module.exports = {
  squareNumbers,
  sumSquareNumbers,
  getPostsUsingAxios,
  filterGetPostsUsingAxios,
  sumOfNumbers
};
