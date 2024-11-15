const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/menu');

// POST method to POST the person
router.post('/',async(req,res)=>{
    try{
    const menudata = req.body;
    const newMenu = new MenuItem(menudata);
    const response = await newMenu.save();
    console.log('menu saved');
    res.status(200).json(response);
    } catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error'});
    }
  })
  
  //Get method to GET the menu
router.get('/',async(req,res)=>{
try{
    const data = await MenuItem.find();
    console.log('menu fetched');
    res.status(200).json(data);
}catch(err){
    console.log(err);
    res.status(500).json({error:'Internal Server Error'});
}
})

router.get('/:taste',async(req,res)=>{
  try{
    const tastef = req.params.taste;
    if(tastef=='Sweet' || tastef=='Sour' || tastef== 'Spicy'){
      const response = await MenuItem.find({taste: tastef});
      console.log('response fetched');
      res.status(200).json(response);
    }else{
      res.status(404).json({error: 'Invalid work type'});
    }
  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

router.put('/:id',async(req,res)=>{
  try{
    const id = req.params.id;
    const toput = req.body;
    const response =await MenuItem.findByIdAndUpdate(id,toput);
    if(!response){
      res.status(400).json({error:`Menu was not found`});
    }
    console.log(`Menu Update`);
    res.status(200).json({message:`Menu was updated`});
  }catch(err){
    console.log(err);
    res.status(500).json({error:`Internal Server Error`});
  }
})

router.delete('/:id',async(req,res)=>{
  try{
    const todelete =req.params.id;
  const response = await MenuItem.findByIdAndDelete(todelete);
  if(!response){
    res.status(404).json({error:`Menu Not Found`});
  }
  console.log(` Menu was deleted`);
  res.status(200).json({message:`Menu is deleted`});
  }catch(err){
    console.log(err);
    res.status(500).json({error:`Internal Server Error`});
  }
})
//Vedika Walke

module.exports = router;

