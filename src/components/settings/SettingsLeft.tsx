import Search from 'components/Search'
import OneLeftItem from 'components/two_left_one_right_schema/OneLeftItem.tsx'
import { FormattedMessage, useIntl } from 'react-intl'

export default function SettingsLeft({active}: any) {
  const intl = useIntl();
  console.log(active);
  

  return (
    <div className="diveded-left">
        <div className="title">
          <h1><FormattedMessage id="page.settings" /></h1>

        </div>

        <div className="diveded-search">
          <Search name={intl.formatMessage({ id: "page.settings.search_settings" })} />
        </div>

        <OneLeftItem name={intl.formatMessage({ id: "global.your_account" })} active={active === "your_account" && true} />
        <OneLeftItem name={intl.formatMessage({ id: "page.settings.security_and_account_access" })} active={active === "security_and_account_access" && true} />
        <OneLeftItem name={intl.formatMessage({ id: "page.settings.privacy_and_safety" })} active={active === "privacy_and_safety" && true} />
        <OneLeftItem name={intl.formatMessage({ id: "page.notifications" })} active={active === "notifications" && true} />
        <OneLeftItem name={intl.formatMessage({ id: "page.settings.accessibility_display_languages" })} active={active === "accessibility_display_and_languages" && true} />
        <OneLeftItem name={intl.formatMessage({ id: "page.settings.additional_resources" })} active={active === "additional_resources" && true} />
    </div>
  )
}
