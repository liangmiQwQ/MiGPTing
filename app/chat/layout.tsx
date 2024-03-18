import React from 'react'

import { Box } from '@radix-ui/themes'

import SendMessageBar from './_components/SendMessageBar'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      {children} <SendMessageBar></SendMessageBar>
    </Box>
  )
}
