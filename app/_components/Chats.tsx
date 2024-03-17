'use client'

import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'

import { useChat } from '@/store/chats'
import { Flex, IconButton, Text } from '@radix-ui/themes'

export default function Chats() {
  const { chats } = useChat()

  return (
    <Flex gap="1" direction={'column'}>
      {/* An <a> is a unit for a chat */}
      {chats.map((chat, index) => {
        return (
          <a
            className="underline-none flex !h-8 w-full select-none items-center rounded-xs bg-none p-2 hover:bg-accent-200"
            key={chat.model + chat.title + index}
          >
            <Flex justify={'between'} align={'center'} className="w-full">
              <Text className="text-slate-950">{chat.title}</Text>
              <Flex gap="2">
                <IconButton radius="full" size="1" variant="ghost">
                  <BsThreeDots size={18} className="text-slate-950" />
                </IconButton>
                <IconButton radius="full" size="1" variant="ghost">
                  <MdDelete size={18} className="text-slate-950" />
                </IconButton>
              </Flex>
            </Flex>
          </a>
        )
      })}
    </Flex>
  )
}
