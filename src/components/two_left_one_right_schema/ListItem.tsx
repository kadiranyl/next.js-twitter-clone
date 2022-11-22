import Image from "next/image";
import Link from "next/link";
import {BsPinAngle, BsPinAngleFill} from 'react-icons/bs'

export default function ListItem({ image, name, user, pinned=null }: any) {
  return (
    <Link href="/" className="two-left-one-right-schema">
        <div className="schema-item-details flex-row">
        <Image src={image} width={48} height={48} alt="" className='' />
        <div className="flex-col">
            <span>{name}</span>
            <div className="user-details">
            <Image src={user.avatar} width={16} height={16} alt="" className='rounded' />
            <span>{user.fullname}</span>
            <p>{user.username}</p>
            </div>
        </div>
        </div>
        {pinned !== null ? (
            <button className='box-more-btn rounded'>
                {pinned ? (
                    <BsPinAngleFill size={16} className="pinned" />
                ) : (
                    <BsPinAngle size={16} />
                )}
            </button>
        ) : (
        <button className='small-btn'>
        Takip et
        </button>
        )}
    </Link>
  )
}
