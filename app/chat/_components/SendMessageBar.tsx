'use client'

import React from 'react'
import { SiOpenai } from 'react-icons/si'

import t, { resources } from '@/language/i18n'
import useLanguage from '@/store/language'
import { Box, TextField } from '@radix-ui/themes'

export default function SendMessageBar() {
  const { language } = useLanguage()

  return (
    <Box className="fixed bottom-0">
      <TextField.Root>
        <TextField.Slot>
          <SiOpenai />
        </TextField.Slot>
        <TextField.Input
          placeholder={t('searchPlaceHolder', language)}
        ></TextField.Input>
      </TextField.Root>
    </Box>
  )
}
