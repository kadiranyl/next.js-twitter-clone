import Image from "next/image";
import Link from "next/link";
import {HiDotsHorizontal} from 'react-icons/hi'
import { FormattedMessage } from "react-intl";

export default function UserItem({ image, user, bottomText, active, followButton=false }: any) {
  return (
    <Link href="" className={"two-left-one-right-schema " + (active ? "active" : "")}>
        <div className="schema-item-details flex-row">
        <Image src={image} width={48} height={48} alt="" className='rounded' />
        <div className="flex-col">
            <div className="user-details">
            <span>{user.fullname}</span>
            <p>{user.username}</p>
            </div>
            <p className="last-message">{bottomText}</p>
        </div>
        </div>
        {followButton ? (
          <button className='small-btn'>
            <FormattedMessage id="global.follow" />
          </button>
        ) : (
        <button className='box-more-btn rounded'>
        <HiDotsHorizontal size={16} />
        </button>
        )}
    </Link>
  )
}
