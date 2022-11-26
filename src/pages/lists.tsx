import type { NextPage } from 'next'
import Layout from 'components/Layout'
import { HiDotsHorizontal, HiOutlineDocumentAdd } from 'react-icons/hi'
import FixedListsItem from 'components/lists/FixedListsItem'
import Link from 'next/link'
import ListItem from 'components/two_left_one_right_schema/ListItem'
import { FormattedMessage } from "react-intl";

const Lists: NextPage = () => {
  return (
   <Layout>
      <div className="title">
        <div className="flex-col">
          <h1>
            <FormattedMessage id="page.lists" />
          </h1>
          <p>@kadiran</p>
        </div>
        <div className="flex-row">
          <button className="rounded">
            <HiOutlineDocumentAdd size={20} />
          </button>
          <button className="rounded">
            <HiDotsHorizontal size={20} />
          </button>
        </div>
      </div>
      <div className="lists-page">

        <div className="lists-main">
          <div className="fixed-lists-title">
            <h3>
              <FormattedMessage id="page.lists.pinned_lists" />
            </h3>
            <button type='button'>
              <FormattedMessage id="global.edit" />
            </button>
          </div>

          <div className="fixed-lists-row">
            <FixedListsItem image="/images/list_item.png" name="List2" link="" />
            <FixedListsItem image="/images/list_item.png" name="deneme" link="" />
            <FixedListsItem image="/images/list_item.png" name="Kaliteli" link="" />
            <FixedListsItem image="/images/list_item.png" name="test" link="" />
            <FixedListsItem image="/images/list_item.png" name="Spor" link="" />
          </div>
        </div>

        <div className="lists-main">
          <h3>
            <FormattedMessage id="page.lists.explore_new_lists" />
          </h3>

          <div className="explore-lists flex-col">
            <ListItem image="/images/list_item.png" name="Gözden Kaçmasın Rehberi" user={{"fullname": "Mahmut Zühde", "username": "@mamutzuhde", "avatar": "/images/user.jpeg"}} />
            <ListItem image="/images/list_item.png" name="Gözden Kaçmasın Rehberi" user={{"fullname": "Mahmut Zühde", "username": "@mamutzuhde", "avatar": "/images/user.jpeg"}} />
            <ListItem image="/images/list_item.png" name="Gözden Kaçmasın Rehberi" user={{"fullname": "Mahmut Zühde", "username": "@mamutzuhde", "avatar": "/images/user.jpeg"}} />
            <Link href="/" className="show-more">
              <FormattedMessage id="global.show_more" />
            </Link>
          </div>

        </div>

        <div className="lists-main">
          <h3>
            <FormattedMessage id="page.lists.your_lists" />
          </h3>

          <div className="explore-lists flex-col">
            <ListItem image="/images/list_item.png" name="listem2" user={{"fullname": "Kadir Yılmaz", "username": "@kadiran", "avatar": "/images/user.jpeg"}} pinned={true} />
            <ListItem image="/images/list_item.png" name="listem1" user={{"fullname": "Kadir Yılmaz", "username": "@kadiran", "avatar": "/images/user.jpeg"}} pinned={true} />
            <ListItem image="/images/list_item.png" name="listem3" user={{"fullname": "Kadir Yılmaz", "username": "@kadiran", "avatar": "/images/user.jpeg"}} pinned={false} />
            <ListItem image="/images/list_item.png" name="listem3" user={{"fullname": "Kadir Yılmaz", "username": "@kadiran", "avatar": "/images/user.jpeg"}} pinned={false} />
            <ListItem image="/images/list_item.png" name="listem3" user={{"fullname": "Kadir Yılmaz", "username": "@kadiran", "avatar": "/images/user.jpeg"}} pinned={true} />
            <ListItem image="/images/list_item.png" name="listem3" user={{"fullname": "Kadir Yılmaz", "username": "@kadiran", "avatar": "/images/user.jpeg"}} pinned={false} />
            <ListItem image="/images/list_item.png" name="listem3" user={{"fullname": "Kadir Yılmaz", "username": "@kadiran", "avatar": "/images/user.jpeg"}} pinned={true} />
            <ListItem image="/images/list_item.png" name="listem3" user={{"fullname": "Kadir Yılmaz", "username": "@kadiran", "avatar": "/images/user.jpeg"}} pinned={true} />
          </div>

        </div>

      </div>
   </Layout>
  )
}

export default Lists
