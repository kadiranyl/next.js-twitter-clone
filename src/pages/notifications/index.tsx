import type { NextPage } from 'next'
import Notification from 'components/notifications/Notification'
import NotificationPageLayout from 'components/notifications/NotificationPageLayout'

const Notifications: NextPage = () => {

  return (
   <NotificationPageLayout>
    <Notification image="/images/user.jpeg" title="Senin İçin Önerilenler" description="Contagion. https://pic.twitter.com/7E58GB2LbP" />
    <Notification image="/images/user.jpeg" title="Senin İçin Önerilenler" description="Contagion. https://pic.twitter.com/7E58GB2LbP" />
    <Notification image="/images/user.jpeg" title="Senin İçin Önerilenler" description="Contagion. https://pic.twitter.com/7E58GB2LbP" />
   </NotificationPageLayout>
  )
}

export default Notifications
