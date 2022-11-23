import { HiOutlineCog, HiOutlinePencilAlt } from 'react-icons/hi'
import UserItem from 'components/two_left_one_right_schema/UserItem'
import Search from 'components/Search'

export default function Messages() {
  return (
    <div className="messages-section">
        <div className="title">
          <h1>Mesajlar</h1>
          <div className="flex-row">
            <button className="rounded">
              <HiOutlineCog size={20} />
            </button>
            <button className="rounded">
              <HiOutlinePencilAlt size={20} />
            </button>
          </div>

        </div>

        <div className="messages-search">
          <Search name="Direkt Mesajlarda Ara" />
        </div>

        <UserItem image="/images/user.jpeg" user={{"fullname": "Kadir Yılmaz 1", "username": "@kadiran1", "avatar": "/images/user.jpeg"}} lastMessage="Geliyorsun değil mi?" active={true} />
        <UserItem image="/images/user.jpeg" user={{"fullname": "Kadir Yılmaz 2", "username": "@kadiran2", "avatar": "/images/user.jpeg"}} lastMessage="Akşamki partiye gelmek iste..." active={false} />
    </div>
  )
}
