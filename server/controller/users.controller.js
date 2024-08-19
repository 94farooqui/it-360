export const getAllUsers = (req,res) => {
    return res.status(200).json({msg:"Welcome"})
}

export const addUser = (req,res) => {
    return res.status(200).json({msg:"User added"})
}

export const updateUser = (req,res) => {

}

export const deleteUser = (req,res) => {
    console.log(req.params.userId)
    return res.status(200).json({msg:`User deleted ${req.params.userId}`})
}