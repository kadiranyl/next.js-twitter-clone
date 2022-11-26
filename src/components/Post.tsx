import Image from "next/image";
import Link from "next/link";
import { HiDotsHorizontal, HiOutlineChatAlt2, HiRefresh, HiOutlineRefresh, HiHeart, HiOutlineHeart, HiOutlineShare, HiChatAlt2 } from 'react-icons/hi'

export default function Post({post, index}: any) {    
  return (
    <div className="post" key={index}>
        <Link href="/">
        <Image src="/images/user.jpeg" width={48} height={48} alt="kadir" className='rounded' />
        </Link>
        <div className="flex-col">
        <div className="user-infos">

            <div className="user-name">
            <Link href="/">Kadir Yılmaz</Link>
            <p>@kadiran</p>
            <div className="dot"></div>
            <p>18s</p>
            </div>

            <button className='box-more-btn rounded'>
            <HiDotsHorizontal size={16} />
            </button>
        </div>

        <div className="content">
            {post.content}
        </div>

        <div className="actions">
            <button className="action-item blue">
                {false ? (
                <HiChatAlt2 size={20} />
                ) : (
                <HiOutlineChatAlt2 size={20} />
                )}

                {post?.comments?.length>0 && (
                    <span>{post.comments.length}</span>
                )}
            </button>
            <button className="action-item green">
                {false ? (
                    <HiRefresh size={20} />
                ) : (
                    <HiOutlineRefresh size={20} />
                )}

                {post?.retweets?.length>0 && (
                    <span>{post.retweets.length}</span>
                )}
            </button>
            <button className="action-item red">
                {false ? (
                <HiHeart size={20} />
                ) : (
                <HiOutlineHeart size={20} />
                )}

                {post?.likes?.length>0 && (
                    <span>{post.likes.length}</span>
                )}
            </button>
            <button className="action-item blue">
            <HiOutlineShare size={20} />
            </button>
        </div>
        </div>
    </div>
  )
}
