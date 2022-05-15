import Head from 'next/head'
import AppBar from '../components/bar/AppBar'
import BoardBar from '../components/bar/BoardBar'
import Kanban from '../components/kanban'

function Home() {
 
  return (
    <div className=" w-screen-7xl min-h-screen bg-hero bg-no-repeat bg-cover	">
      <Head>
        <title>Trello Hack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     
        {/* App Bar */}
        <AppBar/>

        {/* board */}
        <div >
          {/* bar */}
          <div>
            <BoardBar/>
          </div>
          {/* card kısmı */}
          <div className='p-3'>
            <Kanban/>
          </div>
        </div>
        
    
    </div>
  )
}

export default Home
