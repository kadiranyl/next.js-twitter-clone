import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import ProfileLayout from 'components/ProfileLayout'
import Post from 'components/Post'
import data from '../../lib/data.json'

const ProfileMedia: NextPage = () => {
  const router = useRouter()

  return (
    <ProfileLayout>
      {data.posts.map((post, index) => (
        <Post post={post} key={index} user={{avatar: "/images/user.jpeg", link: "/profile", name: "Kadir Yılmaz", displayName: "kadiran", following: "241", follower: "134"}} />
      ))}
    </ProfileLayout>
  )
}

export default ProfileMedia
