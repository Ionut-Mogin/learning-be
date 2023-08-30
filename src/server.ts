import bodyParser from 'body-parser';
import express from 'express';
import mongoose, { ConnectOptions, Types } from 'mongoose';
import Elevi from './models/elevi.model';

const router = express();

mongoose.connect("mongodb+srv://ionutmogin:UXcA6HeYgHwEZnDx@cluster0.xgdlnco.mongodb.net/?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
} as ConnectOptions)

router.use(express.json());

router.get("/elevi", async (req, res) => {

    console.log(req.ip);
    
    const {name} = req.query;

    const regEx = new RegExp(name as string, "i");

    const query = name ? {name: regEx} : {};

    await Elevi.find(query).then((elevi) => {
        res.status(200).json(elevi)
    })
})

router.post("/elevi", async (req, res) => {

    try {
        
        const {body} = req;
    
        console.log(body);
        
    
        const newElev = new Elevi({
            _id: new Types.ObjectId(),
            ...body
        }) 
    
        await newElev.save().then((elev) => {
            res.status(200).json(elev)
        })
         
    } catch (error) {
        return res.status(500).json(error)
        
    }

})

router.listen(6969, () => {
    console.log("Listening on port 6969")
}) 