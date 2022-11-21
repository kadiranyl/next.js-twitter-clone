import { HiSearch } from 'react-icons/hi'

export default function Search() {
  return (
    <div className="search">
        <HiSearch size={20} />
        <input type="text" placeholder="Twitter'da Ara" />
    </div>
  )
}
