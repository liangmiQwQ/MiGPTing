export interface Chat {
  title: string
  avatar?: {
    assistant: React.ReactNode
    user: React.ReactNode
  }
  model:
    | 'gpt-4-turbo-preview'
    | 'gpt-4-vision-preview'
    | 'gpt-3.5-turbo'
    | string
  message: Message[]
  temperature: number
  internet: boolean
  viceModel?:
    | 'gpt-4-turbo-preview'
    | 'gpt-4-vision-preview'
    | 'gpt-3.5-turbo'
    | string
  context: number
}

export interface Message {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export type Chats = Chat[]
export interface Chat {
  title: string
  avatar?: {
    assistant: React.ReactNode
    user: React.ReactNode
  }
  model:
    | 'gpt-4-turbo-preview'
    | 'gpt-4-vision-preview'
    | 'gpt-3.5-turbo'
    | string
  message: Message[]
  temperature: number
  internet: boolean
  viceModel?:
    | 'gpt-4-turbo-preview'
    | 'gpt-4-vision-preview'
    | 'gpt-3.5-turbo'
    | string
  context: number
}

export interface Message {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export type Chats = Chat[]
