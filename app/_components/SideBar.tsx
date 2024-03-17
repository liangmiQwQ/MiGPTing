import React, { Suspense } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'
import { PiFaceMask } from 'react-icons/pi'
import Link from 'next/link'

import t from '@/language/i18n'
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Link as LinkRadix,
  Text,
} from '@radix-ui/themes'

export default function SideBar() {
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
      </Flex>
      <Flex gap="1">
        {/* An <a> is a unit for a chat */}
        <a className="underline-none flex !h-8 w-full select-none items-center rounded-xs bg-none p-2 hover:bg-accent-200">
          <Flex justify={'between'} align={'center'} className="w-full">
            <Text className="text-slate-950">1. First Chat</Text>
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
      </Flex>
    </Flex>
  )
}
