import {  Flex, Icon, IconButton, Link, Text } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { RiMenuLine } from 'react-icons/ri';
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";


export function Header() {
  const { onOpen } = useSidebarDrawer();

  return (
  <>
    <Flex
    w='100%'
    maxWidth={1480}
    justifyContent='center'
    alignItems='center'
    textAlign='center'
    h={50}
    bg='#8aa07c' 
    >
      <Text 
        fontSize={[15,20]}
        maxH='90%'
      >
          APRENDER BRINCANDO
      </Text>
    </Flex>
    
   <Flex as='header'>
        <Flex 
          w='100%'
          maxWidth={1480}
          h='20vh'
          px='6'
          align='center'
          bg='green.100'
        >
          <IconButton
              mt='4'
              aria-label="Open navigation"
              icon={<Icon as={RiMenuLine} />}
              fontSize="24"
              variant="unstyled"
              onClick={onOpen}
              mr="2"
            >
            </IconButton>
          <Logo />
        </Flex>
    </Flex>
  </>
  )
}