const healthApi = (req,res)=>{
    res.json({
        success:true,
        message: 'server is healthy🤗'
    })
}
export default healthApi;