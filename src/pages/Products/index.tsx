import { Box, SimpleGrid } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/SideBar";


export default function Products() {
  return (
    <>
        <Header />
        <Sidebar />

        <Box 
          maxW='90%'
          margin='0 auto'
        >
          <SimpleGrid 
            flex="1" 
            gap="5" 
            minChildWidth="320px" 
            alignItems='center' 
            mt='8'
          >
            <Box  borderRadius={8} p={['6', '8']}  h='200px' bg='green.100'></Box>
            <Box  borderRadius={8} p={['6', '8']}  h='200px' bg='green.100'></Box>
            <Box  borderRadius={8} p={['6', '8']}  h='200px' bg='green.100'></Box>
            <Box  borderRadius={8} p={['6', '8']}  h='200px' bg='green.100'></Box>
            <Box  borderRadius={8} p={['6', '8']}  h='200px' bg='green.100'></Box>
            <Box  borderRadius={8} p={['6', '8']}  h='200px' bg='green.100'></Box>
            <Box  borderRadius={8} p={['6', '8']}  h='200px' bg='green.100'></Box>
            <Box  borderRadius={8} p={['6', '8']}  h='200px' bg='green.100'></Box>
            <Box  borderRadius={8} p={['6', '8']}  h='200px' bg='green.100'></Box>
        </SimpleGrid>  
        </Box>
    </>
   
    
  )
}