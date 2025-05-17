
const { registerUser,getAllUsers} = require('../services/userService');

const userRegistrationDet = async (req, res) => {
   const { FirstName,LastName,username, email } = req.body;

  try {
  
    const user = await registerUser(FirstName,LastName,username, email);

   
    res.status(200).json({
      message: "User registered successfully",
      user,          
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
const getAllUserData=async(req,res)=>{
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
}

module.exports = {
  userRegistrationDet,
  getAllUserData
};
