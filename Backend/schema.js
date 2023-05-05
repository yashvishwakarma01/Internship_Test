const mongoose=require('mongoose')
const schema={
    name:{
        type:String
    },
    last:{
       type:Number
    },
    buy:{
      type:Number
    },
    sell:{
      type:Number
    },
    volume:{
       type:Number
    },
    base_unit:{
      type:String
    },
}

const model=mongoose.model('stocks_data',schema)


module.exports=model;