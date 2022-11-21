import type { NextPage } from 'next'
import Layout from 'components/Layout'
import { HiOutlineCog, HiDotsHorizontal } from 'react-icons/hi'
import Image from 'next/image'
import Link from 'next/link'
import Post from 'components/Post'
import Search from 'components/Search'
import Agenda from 'components/Agenda'
import data from '../lib/data.json'

const Explore: NextPage = () => {
  
  return (
   <Layout showSearch={false} showTags={false}>
      <div className="title explore-title">
        <Search />
        <button className="rounded">
          <HiOutlineCog size={20} />
        </button>
      </div>
      <div className="explore-page">

        <div className="latest-new">
          <Image src="/images/example.jpeg" alt="" width={100} height={300} />

          <div className="latest-new-details">
            <div className="sub-title">
              <p>Hava Durumu</p>
              <div className="dot"></div>
              <p>CANLI</p>
            </div>
            <h2>The 2022 Atlantic hurricane season is underway</h2>
          </div>

        </div>
        

        <div className="side-box">
          <h2>İlgini çekebilecek gündemler</h2>
          
          {data.agendas.map((agenda: any, index: any) => (
            <Agenda agenda={agenda} key={index} />
          ))}

          <Link href="/" className="side-box-item">
            <span className="show-more">
              Daha fazla göster
            </span>
          </Link>

        </div>
      </div>
   </Layout>
  )
}

export default Explore
