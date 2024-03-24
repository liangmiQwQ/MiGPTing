'use client'

import React from 'react'
import { notFound } from 'next/navigation'

import { useChat } from '@/store/chats'

export default function page({
  params: { chatID },
}: {
  params: { chatID: number | 'new' }
}) {
  const { chats, addChat } = useChat()

  if (chatID === 'new') {
    addChat({
      message: [
        {
          role: 'assistant',
          content: 'Hello! How can I help you today?',
        },
      ],
      model: 'gpt-4-turbo-preview',
      temperature: 0.7,
      internet: false,
      context: 10,
      title: 'New Chat',
    })
  }
  if (chats.length < chatID) {
    notFound()
  }
  return <div>{}</div>
}
