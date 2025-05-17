

const users = [];

const registerUser = async (FirstName,LastName,username, email) => {
  if (!FirstName||!LastName||!username || !email) {
    throw new Error("All fields are required");
  }

  const newUser = {FirstName,LastName, username, email }; // password optional
  users.push(newUser);
  return newUser;
};

const getAllUsers = async () => {
  return users;
};

module.exports = {
  registerUser,
  getAllUsers
};


