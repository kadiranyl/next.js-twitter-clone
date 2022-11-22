import type { NextPage } from 'next'
import ProfileLayout from 'components/ProfileLayout'
import Post from 'components/Post'
import data from '../../lib/data.json'

const Profile: NextPage = () => {
  return (
   <ProfileLayout>
      {data.posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
   </ProfileLayout>
  )
}

export default Profile
