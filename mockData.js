import {v4 as uuidv4} from 'uuid'
const mockData=[
 { 
      id:uuidv4(),
     title:'to do',
     tasks:[
         {
             id:uuidv4(),
             title:'learn javascript'
         },
         {
            id:uuidv4(),
            title:'learn typescript'
        },
        {
            id:uuidv4(),
            title:'learn python'
        },
     ]
},
{ 
    id:uuidv4(),
   title:'In progress',
   tasks:[
       {
           id:uuidv4(),
           title:'learn html'
       },
       {
          id:uuidv4(),
          title:'learn type'
      },
      {
          id:uuidv4(),
          title:'learn css'
      },
   ]
},
{ 
    id:uuidv4(),
   title:'Completed',
   tasks:[
       {
           id:uuidv4(),
           title:'learn scss'
       },
       {
          id:uuidv4(),
          title:'learn redux'
      },
      {
          id:uuidv4(),
          title:'learn saga'
      },
   ]
},



]

export default mockData