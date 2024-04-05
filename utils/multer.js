import multer from "multer";


const storage = multer.diskStorage({
    filename : (req, file, cb) =>{
        cb(null, Date.now() + "_" + file.fieldname);
    }
});


export const StudentPhoto = multer({storage}).single("student-photo")