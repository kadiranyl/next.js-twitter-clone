import Image from 'next/image'
import Link from 'next/link'
import { useStickyBox } from "react-sticky-box";
import Agenda from './Agenda';
import Search from './Search';
import { FormattedMessage } from "react-intl";
import ListItem from './two_left_one_right_schema/ListItem';
import UserItem from './two_left_one_right_schema/UserItem';

export default function Sidebar({showSearch, showTags, showFollowRecommends, showMedia}: any) {
  const agendas = [
    {
      location: "Amerika",
      name: "#Elections",
      tweet_count: 512000,
    },
    {
      location: "Türkiye",
      name: "#ABD_Seçimleri",
      tweet_count: 50000,
    },
    {
      location: "Amerika",
      name: "#Elections",
      tweet_count: 512000,
    },
    {
      location: "Türkiye",
      name: "#ABD_Seçimleri",
      tweet_count: 50000,
    },
    {
      location: "Amerika",
      name: "#Elections",
      tweet_count: 512000,
    },  
    {
      location: "Amerika",
      name: "#Elections",
      tweet_count: 512000,
    },
    {
      location: "Türkiye",
      name: "#ABD_Seçimleri",
      tweet_count: 50000,
    },
    {
      location: "Amerika",
      name: "#Elections",
      tweet_count: 512000,
    },
    {
      location: "Türkiye",
      name: "#ABD_Seçimleri",
      tweet_count: 50000,
    },
    {
      location: "Amerika",
      name: "#Elections",
      tweet_count: 512000,
    },
  ]

  const stickyRef = useStickyBox()

  return (
    <aside>
      <div className="sidebar" ref={stickyRef}>
        {showSearch && (
         <Search />
        )}

        {showMedia && (
          <div className={"sidebar-medias" + (showSearch || showMedia ? " mt" : "")}>
            <Link href="">
              <Image src="/images/user.jpeg" width={114} height={96} alt="" />
            </Link>
            <Link href="">
              <Image src="/images/user.jpeg" width={114} height={96} alt="" />
            </Link>
            <Link href="">
              <Image src="/images/user.jpeg" width={114} height={96} alt="" />
            </Link>
            <Link href="">
              <Image src="/images/user.jpeg" width={114} height={96} alt="" />
            </Link>
            <Link href="">
              <Image src="/images/user.jpeg" width={114} height={96} alt="" />
            </Link>
            <Link href="">
              <Image src="/images/user.jpeg" width={114} height={96} alt="" />
            </Link>
          </div>
        )}

        <div className="sidebar-main">
          {showTags && (
          <div className={"side-box" + (showSearch || showMedia ? " mt" : "")}>
            <h2>
              <FormattedMessage id="global.trends_for_you" />
            </h2>
            
            {agendas.map((agenda: any, index) => (
              <Agenda agenda={agenda} key={index} />
            ))}

            <Link href="/" className="side-box-item">
              <span className="show-more">
                <FormattedMessage id="global.show_more" />
              </span>
            </Link>

          </div>
          )}

          {showFollowRecommends && (
          <div className={"side-box" + (showTags ? " mt" : "")}>
            <h2>
              <FormattedMessage id="sidebar.who_to_follow" />  
            </h2>

            <UserItem followButton={true} image="/images/user.jpeg" user={{"fullname": "Kadir Yılmaz", "avatar": "/images/user.jpeg"}} bottomText="@kadiran" />
            <UserItem followButton={true} image="/images/user.jpeg" user={{"fullname": "Kadir Yılmaz", "avatar": "/images/user.jpeg"}} bottomText="@kadiran" />
            <UserItem followButton={true} image="/images/user.jpeg" user={{"fullname": "Kadir Yılmaz", "avatar": "/images/user.jpeg"}} bottomText="@kadiran" />

            <Link href="/" className="side-box-item">
              <span className="show-more">
                <FormattedMessage id="global.show_more" />
              </span>
            </Link>
          </div>
          )}
        </div>
      </div>
    </aside>
  )
}
