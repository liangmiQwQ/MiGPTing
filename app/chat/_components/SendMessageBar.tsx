'use client'

import React from 'react'
import { SiOpenai } from 'react-icons/si'
import { useTranslations } from 'next-intl'

import { Box, TextField } from '@radix-ui/themes'

export default function SendMessageBar() {
  const t = useTranslations('chat')

  return (
    <Box className="fixed bottom-0">
      <TextField.Root>
        <TextField.Slot>
          <SiOpenai />
        </TextField.Slot>
        <TextField.Input
          placeholder={t('sendMessagePlaceholder')}
        ></TextField.Input>
      </TextField.Root>
    </Box>
  )
}
