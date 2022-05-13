import { PlusIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import { useState } from 'react'
import Card from '../components/Card'
import Kanban from '../components/kanban'
import { Cards } from '../typings'

function Home() {
  const [open, setOpen]=useState(false);
  const data: [Cards] = [
    {
      title: 'Done',
      image: '/img-design.png',
      linkCount: 2,
      body: ['açıklama', 'bb', 'ccc', 'gg'],
      date: '23/09/1997',
      type: 'done',
    },
    {
      title: 'Testing',
      image: '/img-design.png',
      linkCount: 1,
      body: ['other things', "something", "thing"],
      date: '20/09/1895',
      type: 'test',
    },
  ]

  console.log('dd', data)
  return (
    <div className=" w-full bg-primary-light">
      <Head>
        <title>Trello Hack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        {/* App Bar */}
        <div className="bg-primary-dark">
          {' '}
          <span> App bar </span>
        </div>
        <Kanban/>
        {/* Board bar */}
        {/* <div className='flex flex-row mt-10 min-h-screen'>
          <div className="flex space-x-4 ">
            {data.map((card) => (
              <Card card={card} />
            ))}
          </div>

          <div className="space-x-2 px-5 py-5">
            {open ? 
              <div className='flex flex-col '>
              <input type="text" className='h-12 pl-2 rounded' placeholder='Liste başlığı girin...'/>
              <div className='space-x-4'>
              <button className='bg-blue-500 text-white text-sm h-8 w-24 mt-2'>Listeye Ekle</button>
              <button className='text-red-500' onClick={()=>setOpen(!open)}>x</button>
              </div>
                 
          </div>
                : <button className="flex items-center bg-gray-200 h-12 w-64 rounded pl-2 text-gray-500 " onClick={()=>setOpen(!open)}>
             
               <PlusIcon width={20} height={20} />
              Başka Liste ekleyin
            </button>}
          </div>
        </div> */}
      </main>
    </div>
  )
}

export default Home
