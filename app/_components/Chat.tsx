// 'use server'

import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'

import { Chat } from '@/interface/chats'
import { IconButton, Text } from '@radix-ui/themes'

// export default async function Chats({ chat }: { chat: Chat; index: number }) {
export default function Chats({ chat }: { chat: Chat; index: number }) {
  return (
    <a className="underline-none flex !h-8 w-full select-none items-center rounded-xs bg-none p-2 hover:bg-accent-200">
      <span className="flex w-full items-center justify-between">
        <span className="text-slate-950">{chat.title}</span>
        <span className="flex gap-2">
          <IconButton radius="full" size="1" variant="ghost">
            <BsThreeDots size={18} className="text-slate-950" />
          </IconButton>
          <IconButton radius="full" size="1" variant="ghost">
            <MdDelete size={18} className="text-slate-950" />
          </IconButton>
        </span>
      </span>
    </a>
    // <button>{/* <span></span> */}</button>
  )
}
