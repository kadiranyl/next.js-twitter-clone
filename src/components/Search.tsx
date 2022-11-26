import { HiSearch } from 'react-icons/hi'
import { useIntl } from "react-intl";

export default function Search({name}: any) {
  const intl = useIntl();

  return (
    <div className="search">
        <HiSearch size={20} />
        <input type="text" placeholder={name ? name : intl.formatMessage({ id: "global.search_twitter" })} />
    </div>
  )
}
