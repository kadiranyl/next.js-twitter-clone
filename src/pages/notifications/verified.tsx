import type { NextPage } from 'next'
import Link from 'next/link'
import NotificationPageLayout from 'components/notifications/NotificationPageLayout'
import NotFound from 'components/NotFound'
import { FormattedMessage, useIntl } from 'react-intl'

const NotificationsVerified: NextPage = () => {
  const intl = useIntl();

  return (
   <NotificationPageLayout>
    <NotFound image="/images/not_found/notification_verified.png" title={intl.formatMessage({ id: "page.notifications.verified.not_found.title" })}>
    <p><FormattedMessage id="page.notifications.verified.not_found.description" /> <Link href=""><FormattedMessage id="global.learn_more" /></Link></p>
    </NotFound>
   </NotificationPageLayout>
  )
}

export default NotificationsVerified
