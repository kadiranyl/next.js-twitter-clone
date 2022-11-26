import SettingsLayout from 'components/SettingsLayout'
import React from 'react'
import { HiOutlineEyeOff, HiOutlinePencil, HiOutlineGlobe, HiOutlineServer } from 'react-icons/hi'
import { FormattedMessage, useIntl } from 'react-intl'
import SettingsItem from 'components/two_left_one_right_schema/SettingsItem'
import { NextPage } from 'next'

const AccessibilityDisplayAndLanguages: NextPage = () => {
  const intl = useIntl();

  return (
    <SettingsLayout active="accessibility_display_and_languages">
      <div className="diveded-right">
        <div className="title">
          <h1><FormattedMessage id="page.settings.accessibility_display_languages" /></h1>
        </div>

        <div className="item">
          <p className='top-desc'>
          <FormattedMessage id="page.settings.accessibility_display_languages.description" />
          </p>
        </div>

        <SettingsItem link="/settings/accessibility" title={intl.formatMessage({ id: "page.settings.accessibility" })} description={intl.formatMessage({ id: "page.settings.accessibility_description" })}>
          <HiOutlineEyeOff size={20} />
        </SettingsItem>

        <SettingsItem link="/settings/display" title={intl.formatMessage({ id: "page.settings.display" })} description={intl.formatMessage({ id: "page.settings.display_description" })}>
          <HiOutlinePencil size={20} />
        </SettingsItem>

        <SettingsItem link="/settings/language" title={intl.formatMessage({ id: "page.settings.languages" })} description={intl.formatMessage({ id: "page.settings.languages_description" })}>
          <HiOutlineGlobe size={20} />
        </SettingsItem>

        <SettingsItem link="/settings/data" title={intl.formatMessage({ id: "page.settings.data_usage" })} description={intl.formatMessage({ id: "page.settings.data_usage_description" })}>
          <HiOutlineServer size={20} />
        </SettingsItem>

      </div>
    </SettingsLayout>
  )
}

export default AccessibilityDisplayAndLanguages