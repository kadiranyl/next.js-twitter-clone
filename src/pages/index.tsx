import type { NextPage } from 'next'
import Layout from 'components/Layout'
import { HiOutlineFilter } from 'react-icons/hi'
import Post from 'components/Post'
import data from '../lib/data.json'
import CreatePost from 'components/CreatePost'
import { useState } from 'react'
import { FormattedMessage } from "react-intl";

const Home: NextPage = () => {
  const [content, setContent] = useState(String)

  return (
   <Layout>
      <div className="title">
        <h1>
          <FormattedMessage id="page.home" />
        </h1>
        <button className="rounded">
          <HiOutlineFilter size={20} />
        </button>
      </div>
      <div className="home-flow">
        <CreatePost content={content} setContent={setContent} />

        {data.posts.map((post, index) => (
          <Post post={post} key={index} user={{avatar: "/images/user.jpeg", link: "/profile", name: "Kadir Yılmaz", displayName: "kadiran", following: "241", follower: "134"}} />
        ))}
      </div>
   </Layout>
  )
}

export default Home
