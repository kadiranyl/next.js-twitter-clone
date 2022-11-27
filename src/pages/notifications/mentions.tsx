import type { NextPage } from 'next'
import Post from 'components/Post'
import data from '../../lib/data.json'
import NotificationPageLayout from 'components/notifications/NotificationPageLayout'
import Image from 'next/image'
import Link from 'next/link'
import { FormattedMessage } from 'react-intl'

const NotificationsMentions: NextPage = () => {
  return (
    <NotificationPageLayout>
      <div className="page-description">
        <Image src="/images/notifications_mentions.png" alt='' width={598} height={174} />
        <div className="page-description-content">
          <h2><FormattedMessage id="page.notifications.mentions.title" /></h2>
          <p><FormattedMessage id="page.notifications.mentions.description" /> <Link href=""><FormattedMessage id="global.learn_more" /></Link></p>
        </div>
      </div>

      {data.posts.map((post, index) => (
        <Post post={post} key={index} user={{avatar: "/images/user.jpeg", link: "/profile", name: "Kadir Yılmaz", displayName: "kadiran", following: "241", follower: "134"}} />
      ))}
    </NotificationPageLayout>
  )
}

export default NotificationsMentions
