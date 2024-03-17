import en_US from './en_US.json'
import zh_CN from './zh_CN.json'

const resources: Resources = {
  en_US: { translation: en_US },
  zh_CN: { translation: zh_CN },
}

interface Resources {
  [key: string]: { translation: { [key: string]: string } }
}

function t(key: string) {
  console.log(process.env.LANGUAGE)
  return resources[process.env.LANGUAGE as 'en_US' | 'zh_CN'].translation[key]
}

export default t
