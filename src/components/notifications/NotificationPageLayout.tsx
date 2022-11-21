import Layout from "components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiOutlineFilter, HiOutlineCog } from 'react-icons/hi'

export default function NotificationPageLayout({children, className}: any) {
  const router = useRouter()

  return (
    <Layout>
      <div className="title notifications-title">
        <div className='title-top'>
          <h1>Bildirimler</h1>
          <button className="rounded">
            <HiOutlineCog size={20} />
          </button>
        </div>

        <div className="tabs">
          <Link href="/notifications" className={router.pathname === "/notifications" ? "active" : ""}>
            Tümü
          </Link>
          <Link href="/notifications/verified" className={router.pathname === "/notifications/verified" ? "active" : ""}>
            Onaylanmış
          </Link>
          <Link href="/notifications/mentions" className={router.pathname === "/notifications/mentions" ? "active" : ""}>
            Bahsedenler
          </Link>
        </div>
      </div>
      <div className={"notification-page " + className}>
        {children}
      </div>
   </Layout>
  )
}
