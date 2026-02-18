import Service from './../models/Service.js';

//add-services
const addService  = async ( req, res ) =>{
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
//get services
const getservices = async ( req, res ) => {
    try{
        const getAllService = await Service.find({});
        res.json({
            success: true,
            data: getAllService,
            message: 'services fetch successfully'
        })
    } catch(e){
        res.json({
            success:false,
            message: e.message
        })
    }
}


export { addService, getservices };