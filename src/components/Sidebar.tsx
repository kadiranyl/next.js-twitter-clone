import Image from 'next/image'
import Link from 'next/link'
import { HiSearch, HiDotsHorizontal } from 'react-icons/hi'
import { useStickyBox } from "react-sticky-box";
import Agenda from './Agenda';
import Search from './Search';

export default function Sidebar({showSearch, showTags, showFollowRecommends, showMedia}: any) {
  const agendas = [
    {
      location: "Amerika",
      name: "#Elections",
      tweet_count: 512000,
    },
    {
      location: "Türkiye",
      name: "#ABD_Seçimleri",
      tweet_count: 50000,
    },
    {
      location: "Amerika",
      name: "#Elections",
      tweet_count: 512000,
    },
    {
      location: "Türkiye",
      name: "#ABD_Seçimleri",
      tweet_count: 50000,
    },
    {
      location: "Amerika",
      name: "#Elections",
      tweet_count: 512000,
    },  
    {
      location: "Amerika",
      name: "#Elections",
      tweet_count: 512000,
    },
    {
      location: "Türkiye",
      name: "#ABD_Seçimleri",
      tweet_count: 50000,
    },
    {
      location: "Amerika",
      name: "#Elections",
      tweet_count: 512000,
    },
    {
      location: "Türkiye",
      name: "#ABD_Seçimleri",
      tweet_count: 50000,
    },
    {
      location: "Amerika",
      name: "#Elections",
      tweet_count: 512000,
    },
  ]

  const stickyRef = useStickyBox()

  return (
    <aside>
      <div className="sidebar" ref={stickyRef}>
        {showSearch && (
         <Search />
        )}

        {showMedia && (
          <div className={"sidebar-medias" + (showSearch || showMedia ? " mt" : "")}>
            <Link href="">
              <Image src="/images/user.jpeg" width={114} height={96} alt="" />
            </Link>
            <Link href="">
              <Image src="/images/user.jpeg" width={114} height={96} alt="" />
            </Link>
            <Link href="">
              <Image src="/images/user.jpeg" width={114} height={96} alt="" />
            </Link>
            <Link href="">
              <Image src="/images/user.jpeg" width={114} height={96} alt="" />
            </Link>
            <Link href="">
              <Image src="/images/user.jpeg" width={114} height={96} alt="" />
            </Link>
            <Link href="">
              <Image src="/images/user.jpeg" width={114} height={96} alt="" />
            </Link>
          </div>
        )}

        <div className="sidebar-main">
          {showTags && (
          <div className={"side-box" + (showSearch || showMedia ? " mt" : "")}>
            <h2>İlgini çekebilecek gündemler</h2>
            
            {agendas.map((agenda: any, index) => (
              <Agenda agenda={agenda} key={index} />
            ))}

            <Link href="/" className="side-box-item">
              <span className="show-more">
                Daha fazla göster
              </span>
            </Link>

          </div>
          )}

          {showFollowRecommends && (
          <div className={"side-box" + (showTags ? " mt" : "")}>
            <h2>Kimi takip etmeli</h2>
            
            <Link href="/" className="side-box-item">
              <div className="box-item-details flex-row">
                <Image src="/images/user.jpeg" width={42} height={42} alt="kadir" className='rounded' />
                <div className="flex-col">
                  <span>Kadir Yılmaz</span>
                  <p>@kadiran</p>
                </div>
              </div>
              <button className='small-btn'>
                Takip et
              </button>
            </Link>

            <Link href="/" className="side-box-item">
              <div className="box-item-details flex-row">
                <Image src="/images/user.jpeg" width={42} height={42} alt="kadir" className='rounded' />
                <div className="flex-col">
                  <span>Kadir Yılmaz</span>
                  <p>@kadiran</p>
                </div>
              </div>
              <button className='small-btn'>
                Takip et
              </button>
            </Link>

            <Link href="/" className="side-box-item">
              <div className="box-item-details flex-row">
                <Image src="/images/user.jpeg" width={42} height={42} alt="kadir" className='rounded' />
                <div className="flex-col">
                  <span>Kadir Yılmaz</span>
                  <p>@kadiran</p>
                </div>
              </div>
              <button className='small-btn'>
                Takip et
              </button>
            </Link>

            <Link href="/" className="side-box-item">
              <span className="show-more">
                Daha fazla göster
              </span>
            </Link>

          </div>
          )}
        </div>
      </div>
    </aside>
  )
}
