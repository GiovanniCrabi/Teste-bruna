import { Drawer, DrawerBody, DrawerCloseButton, DrawerOverlay, DrawerContent, DrawerHeader } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { NavLink } from "./NavLink";
import { SidebarNav } from "./SidebarNav";


export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer();

  return (
    <Drawer  isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent bg="green.100" p="4">
          <DrawerCloseButton mt="6" />
          <DrawerHeader>O que você procura? </DrawerHeader>
          <DrawerBody mt='10'>

            <SidebarNav />

          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}