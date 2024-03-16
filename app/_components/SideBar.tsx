import { Avatar, Button, Flex, Heading, Text } from "@radix-ui/themes";
import React from "react";
import { PiFaceMask } from "react-icons/pi";
import { FiSettings } from "react-icons/fi";
import Link from "next/link";

export default function SideBar() {
  return (
    <Flex
      className="lg:w-3/12 sm:w-1/3 w-4/5 bg-accent-50 h-full p-7"
      direction={"column"}
      gap="3"
    >
      {/* Heading */}
      <Flex direction={"column"} gap={"2"}>
        <Flex align={"center"} justify={"between"}>
          <Heading className="">{process.env.name}</Heading>
          <Avatar
            fallback={process.env.name?.charAt(0) as string}
            size={"2"}
            src="../logo.svg"
          ></Avatar>
        </Flex>
        <Text className="text-sm">{process.env.description}</Text>
      </Flex>
      {/* Settings */}
      <Flex gap="1">
        <Link href={"/mask"} className="flex-1">
          <Button className="w-full gap-1" variant="soft">
            <PiFaceMask />
            面具
          </Button>
        </Link>

        <Link href={"/setting"} className="flex-1">
          <Button className="w-full gap-1" variant="soft">
            <FiSettings />
            设置
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}
