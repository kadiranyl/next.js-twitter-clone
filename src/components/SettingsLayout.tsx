import type { NextPage } from 'next'
import Layout from 'components/Layout'
import SettingsLeft from './settings/SettingsLeft'

export default function SettingsLayout({children, active}: any) {
  return (
    <Layout showSidebar={false}>
    <div className="two-diveded-page settings-page">
      <SettingsLeft active={active} />
      {children}
    </div>

   </Layout>
  )
}
