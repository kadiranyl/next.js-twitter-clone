import { AiOutlineTwitter } from 'react-icons/ai'
import { HiOutlineHome, HiHome, HiOutlineHashtag, HiHashtag, HiOutlineBell, HiBell, HiOutlineAnnotation, HiAnnotation, HiOutlineDocumentText, HiDocumentText, HiOutlineUser, HiUser, HiOutlineBookmark, HiBookmark, HiOutlineDotsCircleHorizontal, HiDotsCircleHorizontal, HiDotsHorizontal } from 'react-icons/hi'
import Link from "next/link";
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Header() {
  const router = useRouter()

  return (
    <header>
      <div className="header-main">
        <Link href="/" className='logo'>
          <AiOutlineTwitter size={36} />
        </Link>
        <nav className='nav-links'>
          <Link href="/" className={router.pathname === "/" ? 'active' : ''}>
            {router.pathname === "/" ? (
              <HiHome size={28} />
            ) : (
              <HiOutlineHome size={28} />
            )}
            <span>Ana Sayfa</span>
          </Link>
          <Link href="/explore" className={router.pathname === "/explore" ? 'active' : ''}>
            {router.pathname === "/explore" ? (
              <HiHashtag size={28} />
            ) : (
              <HiOutlineHashtag size={28} />
            )}
            <span>Keşfet</span>
          </Link>
          <Link href="/notifications" className={router.pathname.includes("/notifications") ? 'active' : ''}>
            {router.pathname.includes("/notifications") ? (
              <HiBell size={28} />
            ) : (
              <HiOutlineBell size={28} />
            )}
            <span>Bildirimler</span>
          </Link>
          <Link href="/messages" className={router.pathname === "/messages" ? 'active' : ''}>
            {router.pathname === "/messages" ? (
              <HiAnnotation size={28} />
            ) : (
              <HiOutlineAnnotation size={28} />
            )}
            <span>Mesajlar</span>
          </Link>
          <Link href="/bookmarks" className={router.pathname === "/bookmarks" ? 'active' : ''}>
            {router.pathname === "/bookmarks" ? (
              <HiBookmark size={28} />
            ) : (
              <HiOutlineBookmark size={28} />
            )}
            <span>Yer İşaretleri</span>
          </Link>
          <Link href="/lists" className={router.pathname === "/lists" ? 'active' : ''}>
            {router.pathname === "/lists" ? (
              <HiDocumentText size={28} />
            ) : (
              <HiOutlineDocumentText size={28} />
            )}
            <span>Listeler</span>
          </Link>
          <Link href="/profile" className={router.pathname.includes("/profile") ? 'active' : ''}>
            {router.pathname.includes("/profile") ? (
              <HiUser size={28} />
            ) : (
              <HiOutlineUser size={28} />
            )}
            <span>Profil</span>
          </Link>
          <Link href="/settings" className={router.pathname.includes("/settings") ? 'active' : ''}>
            {router.pathname.includes("/settings") ? (
              <HiDotsCircleHorizontal size={28} />
            ) : (
              <HiOutlineDotsCircleHorizontal size={28} />
            )}
            <span>Daha Fazla</span>
          </Link>
        </nav>
        <button className='btn blue-btn theme-color'>Tweetle</button>
      </div>
      <button className="header-profile">
        <div className="details">
          <Image src="/images/user.jpeg" width={36} height={36} alt="kadir" className='rounded' />
          <div className="flex-col">
            <span>kadiran</span>
            <p>@acatay</p>
          </div>
        </div>
        <HiDotsHorizontal size={18} />
      </button>
    </header>
  )
}
