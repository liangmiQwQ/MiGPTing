'use client'

import React, { useState } from 'react'
import { SiOpenai } from 'react-icons/si'
import { useTranslations } from 'next-intl'

import TextAreaAuto from '@/components/TextAreaAuto'
import { Box, Flex, TextArea } from '@radix-ui/themes'

export default function SendMessageBar() {
  const [message, setMessage] = useState('')
  const [moreClass, setMoreClass] = useState('')
  const t = useTranslations('chat')

  return (
    <Flex
      className="absolute bottom-0 w-full p-1 py-2"
      justify={'center'}
      align={'center'}
    >
      <Flex
        className={`flex-1 rounded-sm border-[1px] border-solid border-accent-200 p-2 px-3 ${moreClass} duration-100`}
        align={'center'}
        gap="2"
      >
        <SiOpenai size="18" />
        <TextAreaAuto
          className="max-h-56 flex-1"
          placeholder={t('sendMessagePlaceholder')}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onFocus={() => setMoreClass('!border-accent-700')}
          onBlur={() => setMoreClass('')}
        ></TextAreaAuto>
      </Flex>
    </Flex>
  )
}
