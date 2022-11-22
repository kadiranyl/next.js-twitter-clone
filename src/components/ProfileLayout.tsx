import type { NextPage } from 'next'
import Layout from 'components/Layout'
import { HiOutlineCalendar, HiDotsHorizontal } from 'react-icons/hi'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function ProfileLayout({children}: any) {
  const router = useRouter()

  return (
    <Layout showMedia={true}>
        <div className="title">
            <div className="flex-col">
            <h1>kadiran</h1>
            <p>2 tweet</p>
            </div>
        </div>
        <div className="profile-page">

            <div className="user-card">
                <Image src="/images/example.jpeg" alt="" width={500} height={200} className="banner" />

                <div className="user-card-content">

                    <div className="flex-row user-card-top">
                    <div className="pp">
                        <Image src="/images/user.jpeg" width={133} height={133} alt="kadir" className='rounded' />
                    </div>
                    {false ? (
                    <button className="small-btn outline-small">
                        Profili düzenle
                    </button>
                    ) : (
                        <div className='flex-row follow-buttons'>
                        <button className='box-more-btn rounded'>
                        <HiDotsHorizontal size={16} />
                        </button>
                        <button className="small-btn">
                            Takip et
                        </button>
                        </div>
                    )}
                    
                    </div>

                    <div className="flex-col username">
                        <span>kadiran</span>
                        <p>@acatay</p>
                    </div>

                    <span>Life goes on</span>

                    <div className="flex-row user-joined">
                        <HiOutlineCalendar size={18} />
                        <p>Kasım 2019 tarihinde katıldı</p>
                    </div>

                    <div className="flex-row follow-follower-count">
                        <Link href="" className="flex-row">
                        <p><b>32</b> Takip edilen</p>
                        </Link>
                        <Link href="" className="flex-row">
                        <p><b>1</b> Takipçi</p>
                        </Link>
                    </div>
                </div>

                <div className="tabs">
                <Link href="/profile" className={router.pathname === "/profile" ? "active" : ""}>
                    Tweetler
                </Link>
                <Link href="/profile/with_replies" className={router.pathname === "/profile/with_replies" ? "active" : ""}>
                    Tweetler ve yanıtlar
                </Link>
                <Link href="/profile/media" className={router.pathname === "/profile/media" ? "active" : ""}>
                    Medya
                </Link>
                <Link href="/profile/likes" className={router.pathname === "/profile/likes" ? "active" : ""}>
                    Beğeni
                </Link>
                </div>
            </div>

            <div className="profile-content">
                {children}
            </div>
        </div>
    </Layout>
  )
}
