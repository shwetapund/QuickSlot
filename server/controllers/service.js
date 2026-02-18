import Service from './../models/Service.js';

const addservice  = async ( req, res ) =>{
    const { name, imgUrl, description, fees, type, rating } = req.body;

    const service = new Service({
        name,
        imgUrl,
        description,
        fees,
        type,
        rating
    })
    try{
        const saveService = await service.save();

        res.json({
            success: true,
            data: saveService,
            message: 'service added successfully'
        });
    } catch(e){
        res.json({
            success:false,
            message:e.message
        })
    }
}

export default addservice;