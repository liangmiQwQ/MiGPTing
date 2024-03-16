import { Avatar, Flex, Heading, Text } from "@radix-ui/themes";
import React from "react";

export default function SideBar() {
  return (
    <Flex
      className="lg:w-3/12 sm:w-1/3 w-4/5 bg-slate-100 h-full p-7"
      direction={"column"}
      gap="3"
    >
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
    </Flex>
  );
}
