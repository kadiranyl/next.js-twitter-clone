import Image from "next/image";
import Link from "next/link";
import { FormattedMessage } from "react-intl";
import { HiDotsHorizontal } from 'react-icons/hi'

export default function UserHoverCard({onHoverOut, opacityOut, onHover, user}: any) {
  return (
    <div className="post-hover" onMouseLeave={onHoverOut}>

        <div className={"profile-page" + (opacityOut ? " opacity-out" : "")} onMouseEnter={onHover}>

            <div className="user-card">

                <div className="user-card-content">

                    <div className="flex-row user-card-top">
                    <Link href={user.link} className="pp">
                        <Image src={user.avatar} width={56} height={56} alt={user.name} className='rounded' />
                    </Link>
                    {false ? (
                    <button className="small-btn outline-small">
                        <FormattedMessage id="global.edit_profile" />
                    </button>
                    ) : (
                        <div className='flex-row follow-buttons'>
                        <button className='box-more-btn rounded'>
                        <HiDotsHorizontal size={16} />
                        </button>
                        <button className="small-btn">
                        <FormattedMessage id="global.follow" />
                        </button>
                        </div>
                    )}
                    
                    </div>

                        <div className="flex-col username">
                            <Link href="/profile">
                                <span>{user.name}</span>
                            </Link>
                            
                            <Link href="/profile">
                            <p>@{user.displayName}</p>
                            </Link>
                        </div>

                    <span className="biography">{user.biography}</span>

                    <div className="flex-row follow-follower-count">
                        <Link href="" className="flex-row">
                        <p><b>{user.following}</b> <FormattedMessage id="global.following" /></p>
                        </Link>
                        <Link href="" className="flex-row">
                        <p><b>{user.follower}</b> <FormattedMessage id="global.follower" /></p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
