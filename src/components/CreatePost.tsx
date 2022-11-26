import Image from "next/image";
import Link from "next/link";
import { HiOutlineQuestionMarkCircle, HiOutlineEmojiHappy, HiOutlineLocationMarker, HiOutlinePhotograph } from 'react-icons/hi'
import { HiOutlineGif, HiOutlineCalendarDays } from 'react-icons/hi2'
import { useIntl, FormattedMessage } from "react-intl";

export default function CreatePost({content, setContent}: any) {
  const intl = useIntl();
  
  return (
    <div className="post create-post">
        <Link href="/">
        <Image src="/images/user.jpeg" width={48} height={48} alt="kadir" className='rounded' />
        </Link>
        <div className="flex-col">

        <div className="content">
            <input type="text" placeholder={intl.formatMessage({ id: "page.home.whats_happening" })} onChange={(e: any) => setContent(e.target.value)} />
        </div>

        <div className="actions-main">
            <div className="actions">
                <button className="action-item" title={intl.formatMessage({ id: "global.media" })}>
                    <HiOutlinePhotograph size={20} />
                </button>
                <button className="action-item" title={intl.formatMessage({ id: "global.gif" })}>
                    <HiOutlineGif size={20} />
                </button>
                <button className="action-item" title={intl.formatMessage({ id: "global.poll" })}>
                    <HiOutlineQuestionMarkCircle size={20} />
                </button>
                <button className="action-item" title={intl.formatMessage({ id: "global.emoji" })}>
                    <HiOutlineEmojiHappy size={20} />
                </button>
                <button className="action-item" title={intl.formatMessage({ id: "global.schedule" })}>
                    <HiOutlineCalendarDays size={20} />
                </button>
                <button className="action-item" title={intl.formatMessage({ id: "global.location" })} disabled>
                    <HiOutlineLocationMarker size={20} />
                </button>
            </div>

            <div className="actions actions-right">
                {content.length>0 && (
                    <span>asd</span>
                )}
                <button className='small-btn theme-button'>
                    <FormattedMessage id="global.send_tweet" />
                </button>
            </div>
        </div>
        </div>
    </div>
  )
}
