import Link from "next/link";
import {HiChevronRight} from 'react-icons/hi'

export default function OneLeftItem({ name, active }: any) {
  return (
    <Link href="" className={"two-left-one-right-schema " + (active ? "active" : "")}>
        <div className="schema-item-details flex-row">
          {name}
        </div>
        <button className='box-more-btn rounded'>
        <HiChevronRight size={16} />
        </button>
    </Link>
  )
}
