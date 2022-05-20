import React from 'react'
import { Dropdown } from '../../typings'
import CustomDropdown from '../../components/dropdown/customDropdown'
import { StarIcon, PlusIcon, CalendarIcon, LightningBoltIcon,CursorClickIcon,FilterIcon, DotsVerticalIcon} from '@heroicons/react/outline'

type Props = {}

const BoardBar = (props: Props) => {
  const board:Dropdown={id:1,title:"Pano", body:["aa","bb"]}
  return (
    <div className='flex justify-between'>
      {/* sol */}
      <div className='flex space-x-2 items-center p-2'>
      <div><CustomDropdown props={board} /></div>
        <div><span className='font-bold text-md'>Company Owerview </span></div>
        <div className='w-8 h-8 bg-gray-300 p-2 rounded text-gray-600'><span><StarIcon width={16} height={16}/></span></div>
        <div className='bg-gray-300 p-2 rounded text-gray-600'><button>Trello Workspace</button></div>
        <div className='bg-gray-300 p-2 rounded text-gray-600'><button>Çalışma Alanı</button></div>
        <div className='pr-5'><img src="/picturee.png" width={40} height={30} className="rounded-full"/></div>   
        <div className='bg-blue-600 p-2 rounded text-white'><button className='flex items-center'><PlusIcon width={14} height={14}/>Paylaş</button></div>
      </div>
      
      {/* sağ */}
      <div className='flex space-x-2 items-center p-2'>
      <div className='bg-gray-300 p-2 rounded text-gray-600'><button className='flex items-center'><CalendarIcon width={24} height={24} className="ml-2 mr-2"/>Takvim Power-Up</button></div>
      <div className='bg-gray-300 p-2 rounded text-gray-600'><button className='flex items-center'><LightningBoltIcon width={24} height={24} className="ml-2 mr-2"/>Power-Up'lar</button></div>
      <div className='bg-gray-300 p-2 rounded text-gray-600'><button className='flex items-center'><CursorClickIcon width={24} height={24} className="ml-2 mr-2"/>Otomasyon</button></div>
      <div className='bg-gray-300 p-2 rounded text-gray-600'><button className='flex items-center'><FilterIcon width={24} height={24} className="ml-2 mr-2"/>Filtre</button></div>
      <div className='bg-gray-300 p-2 rounded text-gray-600'><button className='flex items-center'><DotsVerticalIcon width={24} height={24} className="ml-2 mr-2"/>Menüyü Göster</button></div>

      </div>
    </div>
  )
}

export default BoardBar