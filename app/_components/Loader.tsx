'use client'

import React, { useEffect } from 'react'

import '@/language/i18n'

import useLanguage from '@/store/language'

interface LoaderProps {
  language: 'en_US' | 'zh_CN'
}

export default function Loader({ language }: LoaderProps) {
  const { setLanguage } = useLanguage()
  useEffect(() => {
    setLanguage(language)
  }, [language, setLanguage])
  return <></>
}
