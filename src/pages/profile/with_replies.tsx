import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import ProfileLayout from 'components/ProfileLayout'
import Post from 'components/Post'
import data from '../../lib/data.json'

const ProfileWithReplies: NextPage = () => {
  const router = useRouter()

  return (
    <ProfileLayout>
      {data.posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </ProfileLayout>
  )
}

export default ProfileWithReplies
