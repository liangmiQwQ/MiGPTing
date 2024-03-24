'use client'

import React from 'react'

import SendMessageBar from '../_components/SendMessageBar'

export default function page({
  params: { chatID },
}: {
  params: { chatID: number | 'new' }
}) {
  return (
    <SendMessageBar
      onSend={(message: string) => {
        console.log(message)
      }}
    ></SendMessageBar>
  )
}
