import React from 'react'

import { Box } from '@radix-ui/themes'

import SendMessageBar from './_components/SendMessageBar'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <Box className="relative h-screen w-full overflow-x-clip">
      {children} <SendMessageBar></SendMessageBar>
    </Box>
  )
}
