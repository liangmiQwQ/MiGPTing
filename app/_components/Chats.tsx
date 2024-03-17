'use client'

import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'

import { Flex, IconButton, Text } from '@radix-ui/themes'

export default function Chats() {
  const chats: Chats = [
    {
      title: 'First Chat',
      model: 'gpt-4-turbo-preview',
      message: [],
      temperature: 0.4,
      internet: false,
      context: 1,
    },
    {
      title: 'First Chat',
      model: 'gpt-4-turbo-preview',
      message: [],
      temperature: 0.4,
      internet: false,
      context: 4,
    },
    {
      title: 'First Chat',
      model: 'gpt-4-turbo-preview',
      message: [],
      temperature: 0.4,
      internet: false,
      context: 3,
    },
    {
      title: 'First Chat',
      model: 'gpt-4-turbo-preview',
      message: [],
      temperature: 0.4,
      internet: false,
      context: 3,
    },
    {
      title: 'First Chat',
      model: 'gpt-4-turbo-preview',
      message: [],
      temperature: 0.4,
      internet: false,
      context: 9,
    },
  ]
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
