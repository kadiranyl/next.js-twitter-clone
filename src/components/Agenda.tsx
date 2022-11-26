import Link from "next/link";
import { HiDotsHorizontal } from 'react-icons/hi'
import { FormattedMessage } from "react-intl";

export default function Agenda({agenda, key}: any) {
  return (
    <Link href="/" className="side-box-item" key={key}>
        <div className="box-item-details">
        <p>{agenda.location} konumunda gündemde</p>
        <span>{agenda.name}</span>
        <p className='count'>{agenda.tweet_count} <FormattedMessage id="global.tweet" /></p>
        </div>
        <button className='box-more-btn rounded'>
        <HiDotsHorizontal size={16} />
        </button>
    </Link>
  )
}
