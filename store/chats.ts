import { getCookie, setCookie } from 'cookies-next'
import { create } from 'zustand'

import { Chat } from '@/interface/chats'

interface ChatStore {
  chats: Chat[]
  addChat: (chat: Chat) => void
  deleteChat: (index: number) => void
  setChats: (chats: Chat[]) => void
  setChat: (chat: Chat, index: number) => void
}

export const useChat = create<ChatStore>((set, get) => {
  const localChats =
    getCookie('chats') !== undefined
      ? JSON.parse(getCookie('chats') as string)
      : []

  return {
    chats: localChats,
    addChat: (chat) => {
      // Add chat to the store
      const tempChats = { ...get().chats }
      tempChats.push(chat)

      set(() => ({ chats: tempChats }))
      // Save chat to the cookie
      setCookie('chats', JSON.stringify(tempChats))
    },
    deleteChat: (index) => {
      // Delete chat from the store
      const tempChats = { ...get().chats }
      tempChats.splice(index, 1)
      set(() => ({
        chats: tempChats,
      }))
      // Delete chat from the cookie
      setCookie('chats', JSON.stringify(tempChats))
    },
    setChats: (chats) => {
      // Set chat to the store
      set(() => ({ chats }))
      // Set chat to the cookie
      setCookie('chats', JSON.stringify(chats))
    },
    setChat: (chat, index) => {
      // Set chat to the store
      const tempChats = { ...get().chats }
      tempChats[index] = chat

      set(() => {
        return { chats: tempChats }
      })
      // Set chat to the cookie
      setCookie('chats', JSON.stringify(tempChats))
    },
  }
})
