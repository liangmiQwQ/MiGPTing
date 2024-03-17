import React from 'react'

import { Flex } from '@radix-ui/themes'

interface ButtonIconProps {
  children: React.ReactNode
}

export default function ButtonIcon({ children }: ButtonIconProps) {
  return (
    <button className="h-6 w-6 rounded-full hover:bg-accent-400">
      <Flex justify={'center'} align={'center'}>
        {children}
      </Flex>
    </button>
  )
}
