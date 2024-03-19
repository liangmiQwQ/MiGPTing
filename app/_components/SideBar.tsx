import React from 'react'
import { FiSettings } from 'react-icons/fi'
import { PiFaceMask } from 'react-icons/pi'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

import { Avatar, Button, Flex, Heading, Text } from '@radix-ui/themes'

import Chats from './Chats'

export default async function SideBar() {
  // const t = await getTranslations(process.env.LANGUAGE)
  const t = await getTranslations('sideBar')

  // const t = (adfsgrwv: any) => '1'

  return (
    <Flex
      className="h-full w-4/5 bg-accent-50 p-7 sm:w-1/3 lg:w-3/12"
      direction={'column'}
      gap="3"
    >
      {/* Heading */}
      <Link href={'/'}>
        <Flex direction={'column'} gap={'2'}>
          <Flex align={'center'} justify={'between'}>
            <Heading className="">{process.env.NAME}</Heading>
            <Avatar
              fallback={process.env.NAME?.charAt(0) as string}
              size={'2'}
              src="../logo.svg"
            ></Avatar>
          </Flex>
          <Text className="text-sm">{process.env.DESCRIPTION}</Text>
        </Flex>
      </Link>
      {/* Settings */}
      <Flex gap="1">
        <Link href={'/mask'} className="flex-1">
          <Button className="w-full gap-1" variant="soft">
            <PiFaceMask />
            {t('mask')}
          </Button>
        </Link>

        <Link href={'/setting'} className="flex-1">
          <Button className="w-full gap-1" variant="soft">
            <FiSettings />
            {t('setting')}
          </Button>
        </Link>

        <Chats></Chats>
      </Flex>
    </Flex>
  )
}
