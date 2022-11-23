import { HiSearch } from 'react-icons/hi'

export default function Search({name="Twitter'da Ara"}: any) {
  return (
    <div className="search">
        <HiSearch size={20} />
        <input type="text" placeholder={name} />
    </div>
  )
}
