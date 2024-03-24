'use client'

import React from 'react'

import { useChat } from '@/store/chats'
import { Flex } from '@radix-ui/themes'

import Chat from './Chat'

export default function Chats() {
  const { chats } = useChat()

  return (
    <Flex gap="1" direction={'column'}>
      {/* An <a> is a unit for a chat */}
      {chats.map((chat, index) => {
        return (
          <Chat
            key={chat.model + chat.title + index}
            index={index}
            chat={chat}
          ></Chat>
        )
      })}
      {/* <Chat chat={chats[0]} index={0}></Chat> */}
    </Flex>
  )
}
