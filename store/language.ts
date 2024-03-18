import { create } from 'zustand'

export interface LanguageState {
  language: 'en_US' | 'zh_CN'
  setLanguage: (language: 'en_US' | 'zh_CN') => void
}

const useLanguage = create<LanguageState>((set) => {
  return {
    language: 'en_US',
    setLanguage: (language: 'en_US' | 'zh_CN') => set({ language }),
  }
})

export default useLanguage
