'use client'

import React, { useRef, useState } from 'react'
import { RiSendPlaneLine } from 'react-icons/ri'
import { SiOpenai } from 'react-icons/si'
import { useTranslations } from 'next-intl'

import TextAreaAuto from '@/components/TextAreaAuto'
import { useChat } from '@/store/chats'
import { Flex, IconButton } from '@radix-ui/themes'

interface SendMessageBarProps {
  onSend: (message: string) => void
}

export default function SendMessageBar({ onSend }: SendMessageBarProps) {
  const [message, setMessage] = useState('')
  const [moreClass, setMoreClass] = useState('')
  const [isComposition, setIsComposition] = useState(false)
  const t = useTranslations('chat')
  const iconButtonRef = useRef<HTMLButtonElement>(null)

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
        <SiOpenai size="20" />
        <TextAreaAuto
          className="max-h-56 flex-1"
          placeholder={t('sendMessagePlaceholder')}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onFocus={() => setMoreClass('!border-accent-700')}
          onBlur={() => setMoreClass('')}
          onCompositionStart={() => setIsComposition(true)}
          onCompositionEnd={() => setIsComposition(false)}
          onKeyDown={(event: any) => {
            if (event.key === 'Enter' && event.shiftKey) {
              // setMessage(message + '\n')
            } else if (event.key === 'Enter' && !isComposition) {
              event.preventDefault()
              onSend(message)
              setMessage('')
            }
          }}
        ></TextAreaAuto>
        <IconButton
          size="2"
          onClick={() => onSend(message)}
          variant="soft"
          ref={iconButtonRef}
        >
          <RiSendPlaneLine />
        </IconButton>
      </Flex>
    </Flex>
  )
}
