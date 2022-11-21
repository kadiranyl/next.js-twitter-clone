import Image from 'next/image'
import Link from 'next/link'
import { HiSearch, HiDotsHorizontal } from 'react-icons/hi'
import { useStickyBox } from "react-sticky-box";

export default function Sidebar() {
  const stickyRef = useStickyBox({offsetTop: 20, offsetBottom: 20})

  return (
    <aside>
      <div className="sidebar" ref={stickyRef}>
        <div className="search">
          <HiSearch size={20} />
          <input type="text" placeholder="Twitter'da Ara" />
        </div>

        <div className="sidebar-main">
          <div className="side-box">
            <h2>İlgini çekebilecek gündemler</h2>
            
            <Link href="/" className="side-box-item">
              <div className="box-item-details">
                <p>Amerika konumunda gündemde</p>
                <span>#Elections</span>
                <p className='count'>512 B Tweet</p>
              </div>
              <button className='box-more-btn rounded'>
                <HiDotsHorizontal size={16} />
              </button>
            </Link>

            <Link href="/" className="side-box-item">
              <div className="box-item-details">
                <p>Amerika konumunda gündemde</p>
                <span>#Elections</span>
                <p className='count'>512 B Tweet</p>
              </div>
              <button className='box-more-btn rounded'>
                <HiDotsHorizontal size={16} />
              </button>
            </Link>

            <Link href="/" className="side-box-item">
              <div className="box-item-details">
                <p>Amerika konumunda gündemde</p>
                <span>#Elections</span>
                <p className='count'>512 B Tweet</p>
              </div>
              <button className='box-more-btn rounded'>
                <HiDotsHorizontal size={16} />
              </button>
            </Link>

            <Link href="/" className="side-box-item">
              <div className="box-item-details">
                <p>Amerika konumunda gündemde</p>
                <span>#Elections</span>
                <p className='count'>512 B Tweet</p>
              </div>
              <button className='box-more-btn rounded'>
                <HiDotsHorizontal size={16} />
              </button>
            </Link>

            <Link href="/" className="side-box-item">
              <div className="box-item-details">
                <p>Amerika konumunda gündemde</p>
                <span>#Elections</span>
                <p className='count'>512 B Tweet</p>
              </div>
              <button className='box-more-btn rounded'>
                <HiDotsHorizontal size={16} />
              </button>
            </Link>

            <Link href="/" className="side-box-item">
              <div className="box-item-details">
                <p>Amerika konumunda gündemde</p>
                <span>#Elections</span>
                <p className='count'>512 B Tweet</p>
              </div>
              <button className='box-more-btn rounded'>
                <HiDotsHorizontal size={16} />
              </button>
            </Link>

            <Link href="/" className="side-box-item">
              <div className="box-item-details">
                <p>Amerika konumunda gündemde</p>
                <span>#Elections</span>
                <p className='count'>512 B Tweet</p>
              </div>
              <button className='box-more-btn rounded'>
                <HiDotsHorizontal size={16} />
              </button>
            </Link>

            <Link href="/" className="side-box-item">
              <div className="box-item-details">
                <p>Amerika konumunda gündemde</p>
                <span>#Elections</span>
                <p className='count'>512 B Tweet</p>
              </div>
              <button className='box-more-btn rounded'>
                <HiDotsHorizontal size={16} />
              </button>
            </Link>

            <Link href="/" className="side-box-item">
              <div className="box-item-details">
                <p>Amerika konumunda gündemde</p>
                <span>#Elections</span>
                <p className='count'>512 B Tweet</p>
              </div>
              <button className='box-more-btn rounded'>
                <HiDotsHorizontal size={16} />
              </button>
            </Link>

            <Link href="/" className="side-box-item">
              <div className="box-item-details">
                <p>Amerika konumunda gündemde</p>
                <span>#Elections</span>
                <p className='count'>512 B Tweet</p>
              </div>
              <button className='box-more-btn rounded'>
                <HiDotsHorizontal size={16} />
              </button>
            </Link>

            <Link href="/" className="side-box-item">
              <span className="show-more">
                Daha fazla göster
              </span>
            </Link>

          </div>

          <div className="side-box">
            <h2>Kimi takip etmeli</h2>
            
            <Link href="/" className="side-box-item">
              <div className="box-item-details flex-row">
                <Image src="/images/user.jpeg" width={42} height={42} alt="kadir" className='rounded' />
                <div className="flex-col">
                  <span>Kadir Yılmaz</span>
                  <p>@kadiran</p>
                </div>
              </div>
              <button className='follow-btn'>
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
              <button className='follow-btn'>
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
              <button className='follow-btn'>
                Takip et
              </button>
            </Link>

            <Link href="/" className="side-box-item">
              <span className="show-more">
                Daha fazla göster
              </span>
            </Link>

          </div>
        </div>
      </div>
    </aside>
  )
}
