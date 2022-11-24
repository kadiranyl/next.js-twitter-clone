import Post from 'components/Post'
import { useApp } from 'context/AppContext'
import { useRouter } from 'next/router'
import { HiChevronLeft, HiCheck } from 'react-icons/hi'
import { BsCheck } from 'react-icons/bs'

export default function SettingsRight() {
  const { changeTheme, theme, changeThemeColor, themeColor }: any = useApp()
  const router = useRouter()

  console.log(theme);
  console.log(themeColor);
  

  return (
    <div className="diveded-right">
      <div className="title">
        <div className="flex-row has-back">
          <button className="rounded" onClick={() => router.back()}>
            <HiChevronLeft size={20} />
          </button>
          <h1>Görünüm</h1>
        </div>

      </div>

      <div className="item">
        <p className='top-desc'>
        Kullandığın yazı tipi boyutunu, rengi ve arka planı yönet. Bu ayarlar, bu tarayıcıdaki tüm Twitter hesaplarını etkiler.
        </p>
        <Post post={{user: "ğ", content: "Twitter'ın merkezinde, tıpkı bunun gibi, Tweet denilen kısa mesajlar vardır. Tweetler fotoğraf, video, bağlantı, metin, etiket ve @Twitter gibi bahsetmeler içerebilir."}} />
      </div>

      <div className="display-item">
        <h3>Renk</h3>
        <form className="flex-row display-item-row" onChange={(e: any) => changeThemeColor(e?.target?.value)}>
          <label htmlFor='blue' className="checkbox-label color-item rounded blue">
            <span className="checkmark">
              <HiCheck size={48} />
            </span>
            <input type="radio" id='blue' name="themeColor" value="blue" defaultChecked={themeColor == "blue"} />
          </label>
          <label htmlFor='yellow' className="checkbox-label color-item rounded yellow">
            <span className="checkmark">
              <HiCheck size={48} />
            </span>
            <input type="radio" id='yellow' name="themeColor" value="yellow" defaultChecked={themeColor == "yellow"} />
          </label>
          <label htmlFor='red' className="checkbox-label color-item rounded red">
            <span className="checkmark">
              <HiCheck size={48} />
            </span>
            <input type="radio" id='red' name="themeColor" value="red" defaultChecked={themeColor == "red"} />
          </label>
          <label htmlFor='purple' className="checkbox-label color-item rounded purple">
            <span className="checkmark">
              <HiCheck size={48} />
            </span>
            <input type="radio" id='purple' name="themeColor" value="purple" defaultChecked={themeColor == "purple"} />
          </label>
          <label htmlFor='orange' className="checkbox-label color-item rounded orange">
            <span className="checkmark">
              <HiCheck size={48} />
            </span>
            <input type="radio" id='orange' name="themeColor" value="orange" defaultChecked={themeColor == "orange"} />
          </label>
          <label htmlFor='green' className="checkbox-label color-item rounded green">
            <span className="checkmark">
              <HiCheck size={48} />
            </span>
            <input type="radio" id='green' name="themeColor" value="green" defaultChecked={themeColor == "green"} />
          </label>
        </form>
      </div>

      <div className="display-item">
        <h3>Arka plan</h3>
        <form className="flex-row display-item-row space-between" onChange={(e: any) => changeTheme(e?.target?.value)}>
          <label htmlFor='light' className="checkbox-label theme-item light">
            <span className="checkmark">
              <BsCheck />
            </span>
            <input type="radio" id='light' name="theme" value="1" defaultChecked={theme == "1"} />
            <p>Varsayılan</p>
          </label>
          <label htmlFor='loess' className="checkbox-label theme-item loess">
            <span className="checkmark">
              <BsCheck />
            </span>
            <input type="radio" id='loess' name="theme" value="2" defaultChecked={theme == "2"} />
            <p>Loş</p>
          </label>
          <label htmlFor='dark' className="checkbox-label theme-item dark">
            <span className="checkmark">
              <BsCheck />
            </span>
            <input type="radio" id='dark' name="theme" value="3" defaultChecked={theme == "3"} />
            <p>Işıklar kapalı</p>
          </label>
        </form>
      </div>
    </div>
  )
}
