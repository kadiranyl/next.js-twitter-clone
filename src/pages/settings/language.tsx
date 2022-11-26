import SettingsLayout from 'components/SettingsLayout'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { HiChevronLeft, HiChevronDown } from 'react-icons/hi'
import { FormattedMessage, useIntl } from 'react-intl'
import { NextPage } from 'next'
import Link from 'next/link'

const Language: NextPage = () => {
  const router = useRouter()
  const intl = useIntl();  
  const locales: any = router.locales
  const [language, setLanguage] = useState(router.locale)

  console.log(router);
  

  return (
    <SettingsLayout active="accessibility_display_and_languages">
      <div className="diveded-right">
        <div className="title">
          <div className="flex-row has-back">
            <button className="rounded" onClick={() => router.back()}>
              <HiChevronLeft size={20} />
            </button>
            <h1><FormattedMessage id="page.settings.languages" /></h1>
          </div>

        </div>

        <div className="item language-item">
          <div className="select">
            <div className="select-main">
              <span><FormattedMessage id="page.settings.display_language" /></span>
              <select name="language" id="language" value={language} onChange={(e) => setLanguage(e.target.value)}>
                {[...locales].sort().map((locale, index) => (                  
                  <option value={locale} key={index}>
                    {locale.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
            <HiChevronDown size={26} />
          </div>
          <p className='top-desc'>
          <FormattedMessage id="page.settings.languages_description" />
          </p>
        </div>

        <div className="language-item save">
          <Link href="" locale={language} className="small-btn theme-button">
          <FormattedMessage id="global.save" />
          </Link>
        </div>

      </div>
    </SettingsLayout>
  )
}

export default Language