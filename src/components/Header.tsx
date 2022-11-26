import { AiOutlineTwitter } from 'react-icons/ai'
import { HiOutlineHome, HiHome, HiOutlineHashtag, HiHashtag, HiOutlineBell, HiBell, HiOutlineAnnotation, HiAnnotation, HiOutlineDocumentText, HiDocumentText, HiOutlineUser, HiUser, HiOutlineBookmark, HiBookmark, HiOutlineDotsCircleHorizontal, HiDotsCircleHorizontal, HiDotsHorizontal } from 'react-icons/hi'
import Link from "next/link";
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FormattedMessage } from "react-intl";

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
            <span>
              <FormattedMessage id="page.home" />
            </span>
          </Link>
          <Link href="/explore" className={router.pathname === "/explore" ? 'active' : ''}>
            {router.pathname === "/explore" ? (
              <HiHashtag size={28} />
            ) : (
              <HiOutlineHashtag size={28} />
            )}
            <span>
              <FormattedMessage id="page.explore" />
            </span>
          </Link>
          <Link href="/notifications" className={router.pathname.includes("/notifications") ? 'active' : ''}>
            {router.pathname.includes("/notifications") ? (
              <HiBell size={28} />
            ) : (
              <HiOutlineBell size={28} />
            )}
            <span>
              <FormattedMessage id="page.notifications" />
            </span>
          </Link>
          <Link href="/messages" className={router.pathname === "/messages" ? 'active' : ''}>
            {router.pathname === "/messages" ? (
              <HiAnnotation size={28} />
            ) : (
              <HiOutlineAnnotation size={28} />
            )}
            <span>
              <FormattedMessage id="page.messages" />
            </span>
          </Link>
          <Link href="/bookmarks" className={router.pathname === "/bookmarks" ? 'active' : ''}>
            {router.pathname === "/bookmarks" ? (
              <HiBookmark size={28} />
            ) : (
              <HiOutlineBookmark size={28} />
            )}
            <span>
              <FormattedMessage id="page.bookmarks" />
            </span>
          </Link>
          <Link href="/lists" className={router.pathname === "/lists" ? 'active' : ''}>
            {router.pathname === "/lists" ? (
              <HiDocumentText size={28} />
            ) : (
              <HiOutlineDocumentText size={28} />
            )}
            <span>
              <FormattedMessage id="page.lists" />
            </span>
          </Link>
          <Link href="/profile" className={router.pathname.includes("/profile") ? 'active' : ''}>
            {router.pathname.includes("/profile") ? (
              <HiUser size={28} />
            ) : (
              <HiOutlineUser size={28} />
            )}
            <span>
              <FormattedMessage id="page.profile" />
            </span>
          </Link>
          <Link href="/settings/accessibility_display_and_languages" className={router.pathname.includes("/settings") ? 'active' : ''}>
            {router.pathname.includes("/settings") ? (
              <HiDotsCircleHorizontal size={28} />
            ) : (
              <HiOutlineDotsCircleHorizontal size={28} />
            )}
            <span>
              <FormattedMessage id="page.more" />
            </span>
          </Link>
        </nav>
        <button className='btn blue-btn theme-color'>
          <FormattedMessage id="global.send_tweet" />
        </button>
      </div>
      <button className="header-profile">
        <div className="details">
          <Image src="/images/user.jpeg" width={42} height={42} alt="kadir" className='rounded' />
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
