import type { NextPage } from 'next'
import Layout from 'components/Layout'
import SettingsLeft from 'components/settings/SettingsLeft'
import SettingsRight from 'components/settings/SettingsRight'

const SettingsPage: NextPage = () => {
  return (
   <Layout showSidebar={false}>
    <div className="two-diveded-page settings-page">
      <SettingsLeft />
      <SettingsRight />
    </div>

   </Layout>
  )
}

export default SettingsPage
