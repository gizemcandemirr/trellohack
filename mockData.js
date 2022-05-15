import {v4 as uuidv4} from 'uuid'
const mockData=[
 { 
      id:uuidv4(),
     title:'Up Next',
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
   title:'Teams',
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
   title:'Current Projects',
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