import Post from 'components/Post'
import { useApp } from 'context/AppContext'
import { useRouter } from 'next/router'
import { HiChevronLeft, HiCheckCircle } from 'react-icons/hi'
import { BsCheck } from 'react-icons/bs'

export default function SettingsRight() {
  const { changeTheme, theme }: any = useApp()
  const router = useRouter()

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
        <div className="flex-row display-item-row">
          <button className="color-item rounded blue">
            {true && (
              <HiCheckCircle color='white' size={24} />
            )}
          </button>
          <button className="color-item rounded yellow">
            {false && (
              <HiCheckCircle color='white' size={24} />
            )}
          </button>
          <button className="color-item rounded red">
            {false && (
              <HiCheckCircle color='white' size={24} />
            )}
          </button>
          <button className="color-item rounded purple">
            {false && (
              <HiCheckCircle color='white' size={24} />
            )}
          </button>
          <button className="color-item rounded orange">
            {false && (
              <HiCheckCircle color='white' size={24} />
            )}
          </button>
          <button className="color-item rounded green">
            {false && (
              <HiCheckCircle color='white' size={24} />
            )}
          </button>
        </div>
      </div>

      <div className="display-item">
        <h3>Arka plan</h3>
        <form className="flex-row display-item-row space-between" onChange={(e: any) => changeTheme(e?.target?.value)}>
          <label htmlFor='light' className="checkbox-label theme-item light">
            <span className="checkmark">
              <BsCheck />
            </span>
            <input type="radio" id='light' name="theme" value="1" checked={theme == "1"} />
            <p>Varsayılan</p>
          </label>
          <label htmlFor='loess' className="checkbox-label theme-item loess">
            <span className="checkmark">
              <BsCheck />
            </span>
            <input type="radio" id='loess' name="theme" value="2" checked={theme == "2"} />
            <p>Loş</p>
          </label>
          <label htmlFor='dark' className="checkbox-label theme-item dark">
            <span className="checkmark">
              <BsCheck />
            </span>
            <input type="radio" id='dark' name="theme" value="3" checked={theme == "3"} />
            <p>Işıklar kapalı</p>
          </label>
        </form>
      </div>
    </div>
  )
}
