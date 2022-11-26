import { AiOutlineTwitter } from 'react-icons/ai'
import { HiOutlineHome, HiHome, HiOutlineHashtag, HiHashtag, HiOutlineBell, HiBell, HiOutlineAnnotation, HiAnnotation, HiOutlineDocumentText, HiDocumentText, HiOutlineUser, HiUser, HiOutlineBookmark, HiBookmark, HiOutlineDotsCircleHorizontal, HiDotsCircleHorizontal, HiDotsHorizontal } from 'react-icons/hi'
import Link from "next/link";
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FormattedMessage } from "react-intl";

export default function Header() {
  const router = useRouter()

  const navLinks = [
    {
      href: "/",
      name: "home",
      icon: <HiOutlineHome size={28} />,
      activeIcon: <HiHome size={28} />
    },
    {
      href: "/explore",
      name: "explore",
      icon: <HiOutlineHashtag size={28} />,
      activeIcon: <HiHashtag size={28} />
    },
    {
      href: "/notifications",
      name: "notifications",
      icon: <HiOutlineBell size={28} />,
      activeIcon: <HiBell size={28} />
    },
    {
      href: "/messages",
      name: "messages",
      icon: <HiOutlineAnnotation size={28} />,
      activeIcon: <HiAnnotation size={28} />
    },
    {
      href: "/bookmarks",
      name: "bookmarks",
      icon: <HiOutlineBookmark size={28} />,
      activeIcon: <HiBookmark size={28} />
    },
    {
      href: "/lists",
      name: "lists",
      icon: <HiOutlineDocumentText size={28} />,
      activeIcon: <HiDocumentText size={28} />
    },
    {
      href: "/profile",
      name: "profile",
      icon: <HiOutlineUser size={28} />,
      activeIcon: <HiUser size={28} />
    },
    {
      href: "/settings/accessibility_display_and_languages",
      name: "more",
      icon: <HiOutlineDotsCircleHorizontal size={28} />,
      activeIcon: <HiDotsCircleHorizontal size={28} />
    },
  ]

  return (
    <header>
      <div className="header-main">
        <Link href="/" className='logo'>
          <AiOutlineTwitter size={36} />
        </Link>
        <nav className='nav-links'>
          
          {navLinks.map((nav, index) => (
          <Link key={index} href={nav.href} className={router.pathname === nav.href ? 'active' : ''}>
            {router.pathname === nav.href ? (
              nav.activeIcon
            ) : (
              nav.icon
            )}
            <span>
              <FormattedMessage id={`page.${nav.name}`} />
            </span>
          </Link>
          ))}
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
