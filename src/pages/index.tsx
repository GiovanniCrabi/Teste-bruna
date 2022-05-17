import { Box, Button, Divider, Flex, Icon, Link, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import { Header } from "../components/Header";
import { Sidebar } from "../components/SideBar";

import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";


export default function Home() {
  const isWideScreen = useBreakpointValue({
    base: false,
    md: true

  })

  if (!isWideScreen) {
    return (
      <Box>
        <Box>
          <Header />
          <Sidebar />
        </Box>

        <Flex flexDirection='column' alignItems='center' margin='0 auto'  >

          <Text
            mt='4'
            textAlign='center'
            width='90%'
            bg='#8aa07c'
            fontSize='20px'
          >
            JUNTOS POR MAIS DIVERSÃO
          </Text>

          <Box mt='4' maxW='95%'>
            <Image
              src='/images/kidding.webp'
              alt="kidding"
              width='900px'
              height='500px'
            />
          </Box>

          <Text
            as='mark'
            maxW='240px'
            textAlign='center'
            fontSize='20px'
            bg='green.100'
            mt='2'
          >
            Brinquedos e acessórios ecológicos para aprender brincando
          </Text>

          <Button
            alignSelf='center'
            marginLeft='10px'
            colorScheme='green.900'
            variant='outline'
            size='lg'
            borderRadius='0'
            border='4px'
            mt='8'
          >
            Compre já
          </Button>

          <Divider mt='10' />

          <Flex mt='10'>
            <Text fontSize='20px'><strong>OS PREDILETOS</strong></Text>
          </Flex>


          <Flex mt='8'>
            <Flex flexDir='column'>
              <Box alignSelf='center' textAlign='center'>
                <Text fontSize='16px'><strong>PRATINHOS DE MADEIRA COM VENTOSA</strong></Text>
                <Text mt='4' fontSize='16px'> Nossos pratinhos ecológicos vem com uma ventosa que o prende a superfície permitindo que seu bebê explore sozinho os alimentos sem que acabe tudo indo para o chão.  </Text>

                <Flex mt='8' w='90%' margin='0 auto'>
                  <Image
                    src='/images/pratinho.png'
                    alt='pratinho'
                    width='300px'
                    height='300px'
                  />
                </Flex>

                <Button
                  alignSelf='center'
                  marginLeft='10px'
                  colorScheme='green.900'
                  variant='outline'
                  size='lg'
                  borderRadius='0'
                  border='4px'
                  mt='12'
                >
                  Compre já
                </Button>
              </Box>



            </Flex>
          </Flex>

          <Divider mt='20' />

          <Flex mt='8'>
            <Flex flexDir='column'>
              <Box maxW='90%' alignSelf='center' textAlign='center'>
                <Text fontSize='16px'><strong>CAIXA DE FERRAMENTAS</strong></Text>
                <Text mt='4' fontSize='16px'> Permita que seu filho tenha um excelente trabalho com a coordenação motora </Text>

                <Box margin='0 auto'>
                  <Image
                    src='/images/maleta.webp'
                    width='300px'
                    height='300px'
                  />
                </Box>

                <Button
                  alignSelf='center'
                  marginLeft='10px'
                  colorScheme='green.900'
                  variant='outline'
                  size='lg'
                  borderRadius='0'
                  border='4px'
                  mt='2'
                >
                  Compre já
                </Button>
              </Box>

            </Flex>
          </Flex>
          <Flex flexDir='column' mt='20'>
          <Image
            src='/images/logo2.png'
            width='150px'
            height='150px'
          />

          <Flex flexDir='column' textAlign='center'>
            <Text fontSize='30px'> <strong> CONTATOS </strong></Text>
            <Flex flexDir='column'>
              <Stack spacing='5' mt='10'>
                <Link href='https://www.instagram.com/babywoodstore/' isExternal>
                  <Icon as={AiOutlineInstagram} fontSize='20'></Icon>
                </Link>
                <Link as='a' href='mailto:babywoodstore@gmail.com' isExternal>
                  <Icon as={AiOutlineMail} fontSize='20'>  </Icon>
                </Link>
              </Stack>
              <Divider mt='10'/>
            </Flex>
            <Flex>
            </Flex>
          </Flex>
        </Flex> 
        </Flex>
      </Box>
    )
  }

  //Widescreen

  return (
    <Box>
      <Box>
        <Header />
        <Sidebar />
      </Box>

      <Box bg='green.100' mt='0.5'>
        <Flex
          flexDirection='column'
          alignItems='center'
          margin='0 auto'
          bg='white'
          w='70%'
        >

          <Text
            mt='6'
            textAlign='center'
            width='300px'
            bg='#8aa07c'
            fontSize='30px'
          >
            JUNTOS POR MAIS DIVERSÃO
          </Text>

          <Box mt='4' maxW='98%'>
            <Image
              src='/images/kidding.webp'
              alt="kidding"
              width='920px'
              height='500px'
            />
          </Box>

          <Text
            as='mark'
            maxW='240px'
            textAlign='center'
            fontSize='20px'
            bg='green.100'
            mt='2'
          >
            Brinquedos e acessórios ecológicos para aprender brincando
          </Text>

          <Button
            alignSelf='center'
            marginLeft='10px'
            colorScheme='green.900'
            variant='outline'
            size='lg'
            borderRadius='0'
            border='4px'
            mt='10'
          >
            Compre já
          </Button>

          <Divider mt='20' />

          <Flex mt='20'>
            <Text fontSize='40px'><strong>OS PREDILETOS</strong></Text>
          </Flex>


          <Flex mt='8'>
            <Flex justifyContent='space-around'>
              <Box maxW='50%' alignSelf='center' textAlign='center'>
                <Text fontSize='25px'><strong>PRATINHOS DE MADEIRA COM VENTOSA</strong></Text>
                <Text mt='4' fontSize='20px'> Nossos pratinhos ecológicos vem com uma ventosa que o prende a superfície permitindo que seu bebê explore sozinho os alimentos sem que acabe tudo indo para o chão.  </Text>

                <Button
                  alignSelf='center'
                  marginLeft='10px'
                  colorScheme='green.900'
                  variant='outline'
                  size='lg'
                  borderRadius='0'
                  border='4px'
                  mt='10'
                >
                  Compre já
                </Button>
              </Box>

              <Image
                src='/images/pratinho.png'
                alt='pratinho'
                width='300px'
                height='300px'
              />

            </Flex>
          </Flex>

          <Divider mt='20' />

          <Flex mt='8'>
            <Flex justifyContent='space-around'>
              <Image
                src='/images/maleta.webp'
                width='300px'
                height='300px'
              />

              <Box maxW='50%' alignSelf='center' textAlign='center'>
                <Text fontSize='25px'><strong>CAIXA DE FERRAMENTAS</strong></Text>
                <Text mt='4' fontSize='20px'> Permita que seu filho tenha um excelente trabalho com a coordenação motora </Text>

                <Button
                  alignSelf='center'
                  marginLeft='10px'
                  colorScheme='green.900'
                  variant='outline'
                  size='lg'
                  borderRadius='0'
                  border='4px'
                  mt='10'
                >
                  Compre já
                </Button>
              </Box>

            </Flex>
          </Flex>

        </Flex>

        <Divider mt='10' />

        <Flex justifyContent='space-around' mt='10'>
          <Image
            src='/images/logo2.png'
            width='150px'
            height='150px'
          />

          <Flex flexDir='column' textAlign='center'>
            <Text fontSize='30px'> <strong> CONTATOS </strong></Text>
            <Flex flexDir='column'>
              <Stack spacing='5' mt='10'>
                <Link href='https://www.instagram.com/babywoodstore/' isExternal>
                  <Icon as={AiOutlineInstagram} fontSize='20'></Icon>
                </Link>
                <Link as='a' href='mailto:babywoodstore@gmail.com' isExternal>
                  <Icon as={AiOutlineMail} fontSize='20'>  </Icon>
                </Link>
              </Stack>
            </Flex>
            <Flex>
            </Flex>
          </Flex>
        </Flex>
        <Divider mt='10'/>
      </Box>
    </Box>
  )
}
