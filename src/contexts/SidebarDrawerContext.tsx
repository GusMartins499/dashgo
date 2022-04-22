import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect } from "react";

interface ISidebarDrawerProviderProps {
  children: React.ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)

export function SidebarDrawerProvider({ children }: ISidebarDrawerProviderProps) {
  const disclouser = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclouser.onClose()
  }, [router.asPath])

  return (
    <SidebarDrawerContext.Provider value={disclouser}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)