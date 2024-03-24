'use client'

import React, { useEffect } from 'react'
import { notFound, useRouter } from 'next/navigation'

import { useChat } from '@/store/chats'

export default function ChatsLoader({ chatID }: { chatID: number | 'new' }) {
  const router = useRouter()
  const { chats, addChat } = useChat()

  useEffect(() => {
    if (chatID === 'new') {
      const newChatID = chats.length + 1
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
      router.push(`/chat/${newChatID}`)
    } else if (chats.length < chatID) {
      notFound()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div>chatsLoader</div>
}
