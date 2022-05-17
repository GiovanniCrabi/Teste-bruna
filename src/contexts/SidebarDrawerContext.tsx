import { useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import {  createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerContextProps {
  children: ReactNode
}

type SidebarDrawerContextData = {
  isOpen?: boolean;
  onClose?(): void;
  onOpen?(): void;
}

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children }:SidebarDrawerContextProps) {
  const disclosure = useDisclosure();

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);