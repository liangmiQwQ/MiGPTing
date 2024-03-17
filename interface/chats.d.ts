interface Chat {
  title: string
  avatar: {
    assistant: React.ReactNode
    user: React.ReactNode
  }
  model: string
  message: Message[]
  temperature: number
}

interface Message {
  role: 'user' | 'assistant' | 'system'
  content: string
}

type Chats = Chat[]
