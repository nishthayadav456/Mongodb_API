

const mongoose = require("mongoose");
const { userModel } = require("../Model/Model3");


const LoginData = async (req, res) => {
  const { email, password } = req.body;

  try {
  
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (password === user.password) {
      // Implement your authentication logic here (e.g., generate a token)
      return res.status(200).json({ message: "Login successful" });
    } else {
      return res.status(401).json({ message: "Invalid password" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller for handling user registration
const RegisterData = async (req, res) => {
  const { email, password } = req.body;

  try {
 
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

  
    const newUser = new userModel({ email, password });
    await newUser.save();


    return res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { LoginData,RegisterData,};
