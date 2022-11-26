import { HiOutlineCog, HiOutlinePencilAlt } from 'react-icons/hi'
import UserItem from 'components/two_left_one_right_schema/UserItem'
import Search from 'components/Search'
import { FormattedMessage, useIntl } from 'react-intl'

export default function Messages() {
  const intl = useIntl();

  return (
    <div className="diveded-left diveded-left-messages">
        <div className="title">
          <h1><FormattedMessage id="page.messages" /></h1>
          <div className="flex-row">
            <button className="rounded">
              <HiOutlineCog size={20} />
            </button>
            <button className="rounded">
              <HiOutlinePencilAlt size={20} />
            </button>
          </div>

        </div>

        <div className="diveded-search">
          <Search name={intl.formatMessage({ id: "page.messages.search" })}  />
        </div>

        <UserItem image="/images/user.jpeg" user={{"fullname": "Kadir Yılmaz 1", "username": "@kadiran1", "avatar": "/images/user.jpeg"}} bottomText="Geliyorsun değil mi?" active={true} />
        <UserItem image="/images/user.jpeg" user={{"fullname": "Kadir Yılmaz 2", "username": "@kadiran2", "avatar": "/images/user.jpeg"}} bottomText="Akşamki partiye gelmek iste..." active={false} />
        <UserItem image="/images/user.jpeg" user={{"fullname": "Kadir Yılmaz 2", "username": "@kadiran2", "avatar": "/images/user.jpeg"}} bottomText="Akşamki partiye gelmek iste..." active={false} />
        <UserItem image="/images/user.jpeg" user={{"fullname": "Kadir Yılmaz 2", "username": "@kadiran2", "avatar": "/images/user.jpeg"}} bottomText="Akşamki partiye gelmek iste..." active={false} />
        <UserItem image="/images/user.jpeg" user={{"fullname": "Kadir Yılmaz 2", "username": "@kadiran2", "avatar": "/images/user.jpeg"}} bottomText="Akşamki partiye gelmek iste..." active={false} />
        <UserItem image="/images/user.jpeg" user={{"fullname": "Kadir Yılmaz 2", "username": "@kadiran2", "avatar": "/images/user.jpeg"}} bottomText="Akşamki partiye gelmek iste..." active={false} />
        <UserItem image="/images/user.jpeg" user={{"fullname": "Kadir Yılmaz 2", "username": "@kadiran2", "avatar": "/images/user.jpeg"}} bottomText="Akşamki partiye gelmek iste..." active={false} />
        <UserItem image="/images/user.jpeg" user={{"fullname": "Kadir Yılmaz 2", "username": "@kadiran2", "avatar": "/images/user.jpeg"}} bottomText="Akşamki partiye gelmek iste..." active={false} />
        <UserItem image="/images/user.jpeg" user={{"fullname": "Kadir Yılmaz 2", "username": "@kadiran2", "avatar": "/images/user.jpeg"}} bottomText="Akşamki partiye gelmek iste..." active={false} />
        <UserItem image="/images/user.jpeg" user={{"fullname": "Kadir Yılmaz 2", "username": "@kadiran2", "avatar": "/images/user.jpeg"}} bottomText="Akşamki partiye gelmek iste..." active={false} />
        <UserItem image="/images/user.jpeg" user={{"fullname": "Kadir Yılmaz 2", "username": "@kadiran2", "avatar": "/images/user.jpeg"}} bottomText="Akşamki partiye gelmek iste..." active={false} />
        <UserItem image="/images/user.jpeg" user={{"fullname": "Kadir Yılmaz 2", "username": "@kadiran2", "avatar": "/images/user.jpeg"}} bottomText="Akşamki partiye gelmek iste..." active={false} />
        <UserItem image="/images/user.jpeg" user={{"fullname": "Kadir Yılmaz 2", "username": "@kadiran2", "avatar": "/images/user.jpeg"}} bottomText="Akşamki partiye gelmek iste..." active={false} />
        <UserItem image="/images/user.jpeg" user={{"fullname": "Kadir Yılmaz 2", "username": "@kadiran2", "avatar": "/images/user.jpeg"}} bottomText="Akşamki partiye gelmek iste..." active={false} />
        <UserItem image="/images/user.jpeg" user={{"fullname": "Kadir Yılmaz 2", "username": "@kadiran2", "avatar": "/images/user.jpeg"}} bottomText="Akşamki partiye gelmek iste..." active={false} />
        <UserItem image="/images/user.jpeg" user={{"fullname": "Kadir Yılmaz 2", "username": "@kadiran2", "avatar": "/images/user.jpeg"}} bottomText="Akşamki partiye gelmek iste..." active={false} />
        <UserItem image="/images/user.jpeg" user={{"fullname": "Kadir Yılmaz 2", "username": "@kadiran2", "avatar": "/images/user.jpeg"}} bottomText="Akşamki partiye gelmek iste..." active={false} />
    </div>
  )
}
