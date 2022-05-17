import { Flex } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/SideBar";


export default function About() {
  return (
    <Flex flexDirection='column'>
          <Header />

          <Sidebar />
        </Flex>
  )
}