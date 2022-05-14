import Head from 'next/head'
import AppBar from '../components/bar/AppBar'
import Kanban from '../components/kanban'

function Home() {
 
  return (
    <div className=" w-full bg-primary-light">
      <Head>
        <title>Trello Hack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     
        {/* App Bar */}
        <AppBar/>

        {/* board */}
        <Kanban/>
    
    </div>
  )
}

export default Home
