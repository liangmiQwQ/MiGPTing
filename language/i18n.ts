import en_US from './en_US.json'
import zh_CN from './zh_CN.json'

export const resources: Resources = {
  en_US: { translation: en_US },
  zh_CN: { translation: zh_CN },
}

interface Resources {
  [key: string]: { translation: { [key: string]: string } }
}

function t(key: string, language?: 'en_US' | 'zh_CN') {
  return resources[
    typeof language === 'undefined'
      ? (process.env.LANGUAGE as 'en_US' | 'zh_CN')
      : language
  ].translation[key]
}

export default t
