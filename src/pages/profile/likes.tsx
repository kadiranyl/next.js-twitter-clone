import type { NextPage } from 'next'
import ProfileLayout from 'components/ProfileLayout'
import Post from 'components/Post'
import data from '../../lib/data.json'

const ProfileLikes: NextPage = () => {
  return (
   <ProfileLayout>
    {data.posts.map((post, index) => (
          <Post post={post} key={index} user={{avatar: "/images/user.jpeg", link: "/profile", name: "Kadir Yılmaz", displayName: "kadiran", following: "241", follower: "134"}} />
        ))}
   </ProfileLayout>
  )
}

export default ProfileLikes
