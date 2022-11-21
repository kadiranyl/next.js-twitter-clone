import type { NextPage } from 'next'
import Layout from 'components/Layout'
import { HiFilter, HiOutlineFilter, HiDotsHorizontal, HiOutlineChatAlt2, HiRefresh, HiOutlineRefresh, HiHeart, HiOutlineHeart, HiOutlineShare } from 'react-icons/hi'
import Image from 'next/image'
import Link from 'next/link'
import Post from 'components/Post'

const Home: NextPage = () => {
  const posts = [
    {
      user: "slEwSGq123EFvcQWEdsf",
      comments: [
        {
          uid: "sdlsakdfklwskelfwle",
          comment: "Harika bir içerik olmuş!"
        },
        {
          uid: "sdlsakdfklwskelfwle",
          comment: "Çok beğendim"
        },
        {
          uid: "sdlsakdfklwskelfwle",
          comment: "kötü"
        },
        {
          uid: "sdlsakdfklwskelfwle",
          comment: "Takibe aldım"
        },
      ],
      retweets: [
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
      ],
      likes: [
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
      ],
      content: (
        <>
        <p>Unlocked 8,133,333 VT Token Burned!🔥🔥🔥</p>
        <br />
        <p>💥As P2E rewards 8,133,333 tokens unlocked burned and removed from the circulation!</p>
        <br />
        <p>#WeAreVTBulls $Vt #VirtualTourist #VTBulls #Metaverse #Vttoken #TouristCats #NFTCommunity</p>
        </>
      )
    },
    {
      user: "slEwSGq123EFvcQWEdsf",
      comments: [
        {
          uid: "sdlsakdfklwskelfwle",
          comment: "Harika bir içerik olmuş!"
        },
        {
          uid: "sdlsakdfklwskelfwle",
          comment: "Çok beğendim"
        },
        {
          uid: "sdlsakdfklwskelfwle",
          comment: "kötü"
        },
        {
          uid: "sdlsakdfklwskelfwle",
          comment: "Takibe aldım"
        },
      ],
      retweets: [
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
      ],
      likes: [
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
      ],
      content: (
        <>
        <p>Unlocked 8,133,333 VT Token Burned!🔥🔥🔥</p>
        <br />
        <p>💥As P2E rewards 8,133,333 tokens unlocked burned and removed from the circulation!</p>
        <br />
        <p>#WeAreVTBulls $Vt #VirtualTourist #VTBulls #Metaverse #Vttoken #TouristCats #NFTCommunity</p>
        </>
      )
    },
    {
      user: "slEwSGq123EFvcQWEdsf",
      comments: [
        {
          uid: "sdlsakdfklwskelfwle",
          comment: "Harika bir içerik olmuş!"
        },
        {
          uid: "sdlsakdfklwskelfwle",
          comment: "Çok beğendim"
        },
        {
          uid: "sdlsakdfklwskelfwle",
          comment: "kötü"
        },
        {
          uid: "sdlsakdfklwskelfwle",
          comment: "Takibe aldım"
        },
      ],
      retweets: [
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
      ],
      likes: [
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
      ],
      content: (
        <>
        <p>Unlocked 8,133,333 VT Token Burned!🔥🔥🔥</p>
        <br />
        <p>💥As P2E rewards 8,133,333 tokens unlocked burned and removed from the circulation!</p>
        <br />
        <p>#WeAreVTBulls $Vt #VirtualTourist #VTBulls #Metaverse #Vttoken #TouristCats #NFTCommunity</p>
        </>
      )
    },
    {
      user: "slEwSGq123EFvcQWEdsf",
      comments: [
        {
          uid: "sdlsakdfklwskelfwle",
          comment: "Harika bir içerik olmuş!"
        },
        {
          uid: "sdlsakdfklwskelfwle",
          comment: "Çok beğendim"
        },
        {
          uid: "sdlsakdfklwskelfwle",
          comment: "kötü"
        },
        {
          uid: "sdlsakdfklwskelfwle",
          comment: "Takibe aldım"
        },
      ],
      retweets: [
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
      ],
      likes: [
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
      ],
      content: (
        <>
        <p>Unlocked 8,133,333 VT Token Burned!🔥🔥🔥</p>
        <br />
        <p>💥As P2E rewards 8,133,333 tokens unlocked burned and removed from the circulation!</p>
        <br />
        <p>#WeAreVTBulls $Vt #VirtualTourist #VTBulls #Metaverse #Vttoken #TouristCats #NFTCommunity</p>
        </>
      )
    },
    {
      user: "slEwSGq123EFvcQWEdsf",
      comments: [
        {
          uid: "sdlsakdfklwskelfwle",
          comment: "Harika bir içerik olmuş!"
        },
        {
          uid: "sdlsakdfklwskelfwle",
          comment: "Çok beğendim"
        },
        {
          uid: "sdlsakdfklwskelfwle",
          comment: "kötü"
        },
        {
          uid: "sdlsakdfklwskelfwle",
          comment: "Takibe aldım"
        },
      ],
      retweets: [
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
      ],
      likes: [
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
      ],
      content: (
        <>
        <p>Unlocked 8,133,333 VT Token Burned!🔥🔥🔥</p>
        <br />
        <p>💥As P2E rewards 8,133,333 tokens unlocked burned and removed from the circulation!</p>
        <br />
        <p>#WeAreVTBulls $Vt #VirtualTourist #VTBulls #Metaverse #Vttoken #TouristCats #NFTCommunity</p>
        </>
      )
    },
    {
      user: "slEwSGq123EFvcQWEdsf",
      comments: [
        {
          uid: "sdlsakdfklwskelfwle",
          comment: "Harika bir içerik olmuş!"
        },
        {
          uid: "sdlsakdfklwskelfwle",
          comment: "Çok beğendim"
        },
        {
          uid: "sdlsakdfklwskelfwle",
          comment: "kötü"
        },
        {
          uid: "sdlsakdfklwskelfwle",
          comment: "Takibe aldım"
        },
      ],
      retweets: [
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
      ],
      likes: [
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
      ],
      content: (
        <>
        <p>Unlocked 8,133,333 VT Token Burned!🔥🔥🔥</p>
        <br />
        <p>💥As P2E rewards 8,133,333 tokens unlocked burned and removed from the circulation!</p>
        <br />
        <p>#WeAreVTBulls $Vt #VirtualTourist #VTBulls #Metaverse #Vttoken #TouristCats #NFTCommunity</p>
        </>
      )
    },
    {
      user: "slEwSGq123EFvcQWEdsf",
      comments: [
        {
          uid: "sdlsakdfklwskelfwle",
          comment: "Harika bir içerik olmuş!"
        },
        {
          uid: "sdlsakdfklwskelfwle",
          comment: "Çok beğendim"
        },
        {
          uid: "sdlsakdfklwskelfwle",
          comment: "kötü"
        },
        {
          uid: "sdlsakdfklwskelfwle",
          comment: "Takibe aldım"
        },
      ],
      retweets: [
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
      ],
      likes: [
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
      ],
      content: (
        <>
        <p>Unlocked 8,133,333 VT Token Burned!🔥🔥🔥</p>
        <br />
        <p>💥As P2E rewards 8,133,333 tokens unlocked burned and removed from the circulation!</p>
        <br />
        <p>#WeAreVTBulls $Vt #VirtualTourist #VTBulls #Metaverse #Vttoken #TouristCats #NFTCommunity</p>
        </>
      )
    },
    {
      user: "slEwSGq123EFvcQWEdsf",
      comments: [
        {
          uid: "sdlsakdfklwskelfwle",
          comment: "Harika bir içerik olmuş!"
        },
        {
          uid: "sdlsakdfklwskelfwle",
          comment: "Çok beğendim"
        },
        {
          uid: "sdlsakdfklwskelfwle",
          comment: "kötü"
        },
        {
          uid: "sdlsakdfklwskelfwle",
          comment: "Takibe aldım"
        },
      ],
      retweets: [
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
      ],
      likes: [
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
        {
          uid: "sdlsakdfklwskelfwle",
        },
      ],
      content: (
        <>
        <p>Unlocked 8,133,333 VT Token Burned!🔥🔥🔥</p>
        <br />
        <p>💥As P2E rewards 8,133,333 tokens unlocked burned and removed from the circulation!</p>
        <br />
        <p>#WeAreVTBulls $Vt #VirtualTourist #VTBulls #Metaverse #Vttoken #TouristCats #NFTCommunity</p>
        </>
      )
    },
  ]
  return (
   <Layout>
      <div className="title">
        <h1>Ana Sayfa</h1>
        <button className="rounded">
          <HiOutlineFilter size={20} />
        </button>
      </div>
      <div className="home-flow">
    
        {posts.map(post => (
          <Post post={post} />
        ))}

        



      </div>
   </Layout>
  )
}

export default Home
