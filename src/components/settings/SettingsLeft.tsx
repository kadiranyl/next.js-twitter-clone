import UserItem from 'components/two_left_one_right_schema/UserItem'
import Search from 'components/Search'
import OneLeftItem from 'components/two_left_one_right_schema/OneLeftItem.tsx'

export default function SettingsLeft() {
  return (
    <div className="diveded-left">
        <div className="title">
          <h1>Ayarlar</h1>

        </div>

        <div className="diveded-search">
          <Search name="Ayarlarda Ara" />
        </div>

        <OneLeftItem name="Hesabın" />
        <OneLeftItem name="Güvenlik ve hesap erişimi" />
        <OneLeftItem name="Gizlilik ve güvenlik" />
        <OneLeftItem name="Bildirimler" />
        <OneLeftItem name="Erişilebilirlik, ekran ve diller" />
        <OneLeftItem name="Ek kaynaklar" />
    </div>
  )
}
