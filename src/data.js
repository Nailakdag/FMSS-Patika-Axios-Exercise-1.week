import axios from "axios";

// User için request
const getUsers = async (number, setUsers) => {
  const { data: users } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + number
  );
  setUsers(users);
};

// Post için request
const getPost = async (number, setPost) => {
  const { data: post } = await axios(
    "https://jsonplaceholder.typicode.com/posts?id=" + number
  );
  setPost(post);
};
const getData = async (number, setPost, setUsers) => {
  await getUsers(number, setUsers);
  await getPost(number, setPost);
};
export { getData };
