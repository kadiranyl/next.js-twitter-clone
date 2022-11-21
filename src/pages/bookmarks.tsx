import type { NextPage } from 'next'
import Layout from 'components/Layout'
import { HiDotsHorizontal } from 'react-icons/hi'
import Post from 'components/Post'
import data from '../lib/data.json'

const Home: NextPage = () => {

  return (
   <Layout>
      <div className="title">
        <div className="flex-col">
          <h1>Yer İşaretleri</h1>
          <p>@kadiran</p>
        </div>
        <button className="rounded">
          <HiDotsHorizontal size={20} />
        </button>
      </div>
      <div className="home-flow">
    
        {data.posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}

        



      </div>
   </Layout>
  )
}

export default Home
