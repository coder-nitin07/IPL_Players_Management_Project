
const authorizedRoles = async (req, res, next)=>{
    try {
        const userRole = req.user.role;
        console.log("userRole is", userRole);

        if(userRole === 'Admin'){
            return next();
        }

        return res.status(403).json({ message: 'You are not authorzied for this role.' });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

module.exports = authorizedRoles;