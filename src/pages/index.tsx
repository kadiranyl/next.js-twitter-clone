import type { NextPage } from 'next'
import Layout from 'components/Layout'
import { HiOutlineFilter } from 'react-icons/hi'
import Post from 'components/Post'
import data from '../lib/data.json'

const Home: NextPage = () => {

  return (
   <Layout>
      <div className="title">
        <h1>Ana Sayfa</h1>
        <button className="rounded">
          <HiOutlineFilter size={20} />
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
