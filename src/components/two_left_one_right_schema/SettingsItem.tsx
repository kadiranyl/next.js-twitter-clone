import Link from "next/link";
import {HiChevronRight} from 'react-icons/hi'

export default function SettingsItem({ children, link, title, description }: any) {
  return (
    <Link href={link} className="two-left-one-right-schema settings-item">
        <div className="schema-item-details flex-row">
          <div className="icon">
          {children}
          </div>
          <div className="flex-col">
              <span>{title}</span>
              <p className="last-message">{description}</p>
          </div>
        </div>

        <button className='box-more-btn rounded'>
          <HiChevronRight size={16} />
        </button>
    </Link>
  )
}
