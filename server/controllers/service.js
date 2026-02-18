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
//getservicesbyid
const getservicesbyid = async ( req, res ) => {
    try{
        const {_id} = req.params;

        const fetchService = await Service.findById(_id)
        res.json({
            success:true,
            data: fetchService,
            message: "successfully fetch service"
        })
    } catch(e){
        res.json({
            success:false,
            message:e.message
        })
    }
}
//delete service
const deleteservice = async ( req, res ) =>{
    const { id } = req.params;
    await Service.deleteOne({ _id:id })
    res.json({
        success:true,
        message: "service delete successfully"
    })
}

export { addService, getservices, getservicesbyid, deleteservice };