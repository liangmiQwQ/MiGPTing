import React from 'react'
import { getTranslations } from 'next-intl/server'

export default async function page() {
  const t = await getTranslations()
  return <div>{t('mask')}111</div>
}
