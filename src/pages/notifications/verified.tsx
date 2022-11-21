import type { NextPage } from 'next'
import Link from 'next/link'
import NotificationPageLayout from 'components/notifications/NotificationPageLayout'
import NotFound from 'components/NotFound'

const NotificationsVerified: NextPage = () => {

  return (
   <NotificationPageLayout>
    <NotFound image="/images/not_found/notification_verified.png" title="Burada görecek bir şey yok. Henüz...">
    <p>Onaylanmış bir hesaptan gelen beğeniler, bahsetmeler, Retweetler ve daha birçok şeyi burada bulabilirsin. <Link href="">Daha fazla bilgi al</Link></p>
    </NotFound>
   </NotificationPageLayout>
  )
}

export default NotificationsVerified
