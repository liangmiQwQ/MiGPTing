'use server'

import React from 'react'

import { Box } from '@radix-ui/themes'

export default async function layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Box className="relative h-screen w-full overflow-x-clip">{children}</Box>
  )
}
