import type { NextPage } from 'next'
import Notification from 'components/notifications/Notification'
import NotificationPageLayout from 'components/notifications/NotificationPageLayout'
import { useIntl } from 'react-intl';

const Notifications: NextPage = () => {
  const intl = useIntl();

  return (
   <NotificationPageLayout>
    <Notification image="/images/user.jpeg" title={intl.formatMessage({ id: "page.notifications.recommended_for_you" })} description="Contagion. https://pic.twitter.com/7E58GB2LbP" />
    <Notification image="/images/user.jpeg" title={intl.formatMessage({ id: "page.notifications.recommended_for_you" })} description="Contagion. https://pic.twitter.com/7E58GB2LbP" />
    <Notification image="/images/user.jpeg" title={intl.formatMessage({ id: "page.notifications.recommended_for_you" })} description="Contagion. https://pic.twitter.com/7E58GB2LbP" />
   </NotificationPageLayout>
  )
}

export default Notifications
