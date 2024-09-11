import User from "../model/user.model.js";
import { generateToken } from "../utils/jwt.js";

export const userLogin = async (req,res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
      if (!user || !(await user.comparePassword(password))) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
      const token = generateToken(user);
      res.json({ token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
export const userSignup = async (req,res) => {
    const { username, password } = req.body;
    try {
      const user = new User({ username, password });
      await user.save();
      const token = generateToken(user);
      res.status(201).json({ token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  export const getUserDetails = async (req,res) => {
    if(req.user){
      console.log("Decoded User",req.user)
      const user = await User.findById(req.user.id)
      return res.status(200).json(user)
    }
  }