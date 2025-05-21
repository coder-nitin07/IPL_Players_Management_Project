
// Upload the Image to the Cloudinary DB
const uploadFile = async (req, res)=>{
    try {
        if(!req.file){
            return res.status(400).json({ message: 'No File uploaded' });
        }

        res.status(200).json({ 
            message: 'Image Uploaded Successfully',
            imageUrl: req.file.path 
        });
    } catch (err) {
        res.status(500).json({ message: 'Error while Upload the Image to the Cloudinary Database' });
    }
};

module.exports = { uploadFile };