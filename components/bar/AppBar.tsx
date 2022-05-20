import React from 'react'
import { MenuIcon, InformationCircleIcon, BellIcon} from '@heroicons/react/outline'
import CustomDropdown from '../dropdown/customDropdown'
import { Dropdown } from '../../typings'


const AppBar = () => {
    const study:Dropdown={id:1,title:"Çalışma Alanları", body:["aa","bb"]}
    const history:Dropdown={id:2,title:"Geçmiş", body:["aa","bb"]}
    const stars:Dropdown={id:3,title:"Yıldızlı", body:["aa","bb"]}
    const drafts:Dropdown={id:3,title:"Şablonlar", body:["aa","bb"]}

  return (
    <div className='bg-grayBar-100 flex justify-between'>
        {/* sol kısım */}
        <div className='flex items-center p-2 space-x-2'>

        <div><button><MenuIcon width={16} height={16}/></button></div>
        <div><img src="/Trello-Logo.png" alt="" width={100} height={80}/></div>
        <div><CustomDropdown props={study} /></div>
        <div><CustomDropdown props={history} /></div>
        <div><CustomDropdown props={stars} /></div>
        <div><CustomDropdown props={drafts} /></div>
        <div className='bg-gray-400 p-2 rounded text-gray-600'><button>Oluştur</button></div>
        </div>
       

        {/* sağ kısım */}
        <div className='flex items-center space-x-2 p-2'>
             {/* search */}
             <div className="flex justify-center">
             <div className="xl:w-96">
             <input
             type="search"
      className="
        form-control
        block
        w-full
        
        px-3
        py-1.5
        text-base
        font-normal
        text-black
        bg-gray-300 
        bg-clip-padding
        border border-solid border-gray-500
        rounded
        transition
        ease-in-out
        m-0
      focus:border-blue-600 focus:outline-none
      "
      placeholder="Type query"
           />
        </div>
        </div>

         <div className='text-gray-600'><InformationCircleIcon width={20} height={20} /></div>
         <div className='text-gray-600' ><BellIcon width={20} height={20} /></div>
         <div className='pr-5'><img src="/picturee.png" width={40} height={30} className="rounded-full"/></div>   
        </div>       
        
    </div>
  )
}

export default AppBar