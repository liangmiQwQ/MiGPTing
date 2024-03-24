'use client'

import React from 'react'

import ChatsLoader from './_components/ChatsLoader'

export default function page({
  params: { chatID },
}: {
  params: { chatID: number | 'new' }
}) {
  return <ChatsLoader chatID={chatID}></ChatsLoader>
}
