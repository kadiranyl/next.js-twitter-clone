import Image from 'next/image'
import Link from 'next/link'
import { HiDotsHorizontal } from 'react-icons/hi'

export default function Notification({image, title, description}: any) {
  return (
    <Link href="" className="notification-item">
        <div className="notification-main">
            <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M22.99 11.295l-6.986-2.13-.877-.326-.325-.88L12.67.975c-.092-.303-.372-.51-.688-.51-.316 0-.596.207-.688.51l-2.392 7.84-1.774.657-6.148 1.82c-.306.092-.515.372-.515.69 0 .32.21.6.515.69l7.956 2.358 2.356 7.956c.09.306.37.515.69.515.32 0 .6-.21.69-.514l1.822-6.15.656-1.773 7.84-2.392c.303-.09.51-.37.51-.687 0-.316-.207-.596-.51-.688z" fill='#794BC4'></path></g></svg>

            <div className="notification-content">
                <Image src={image} width={32} height={32} alt="kadir" className='rounded' />
                <p>{title}</p>
                <span>{description}</span>
            </div>
        </div>

        <button className='box-more-btn rounded'>
        <HiDotsHorizontal size={16} />
        </button>
    </Link>
  )
}
