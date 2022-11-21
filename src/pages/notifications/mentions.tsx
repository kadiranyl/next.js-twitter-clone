import type { NextPage } from 'next'
import Post from 'components/Post'
import data from '../../lib/data.json'
import NotificationPageLayout from 'components/notifications/NotificationPageLayout'
import Image from 'next/image'
import Link from 'next/link'

const NotificationsMentions: NextPage = () => {
  return (
    <NotificationPageLayout>
      <div className="page-description">
        <Image src="/images/notifications_mentions.png" alt='' width={598} height={174} />
        <div className="page-description-content">
          <h2>Hangi sohbetlerde senden bahsedildiğini kontrol et</h2>
          <p>İşlem menüsünü (Tweetteki üç küçük nokta) kullanarak etiketini kaldırabilir ve sohbetten ayrılabilirsin. <Link href="">Daha fazla bilgi al</Link></p>
        </div>
      </div>

      {data.posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </NotificationPageLayout>
  )
}

export default NotificationsMentions
