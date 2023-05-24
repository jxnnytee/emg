import { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  VStack,
} from '@chakra-ui/react';
import { RiMenu2Line } from 'react-icons/ri';



interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('black', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text color={'whitesmoke'} fontSize="2xl" ml="0" fontFamily="Poppins" fontWeight="semibold">
          EMGC
        </Text>
        

        <CloseButton ml={-20} color={'white'} display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <VStack mx={8} my={5}  spacing={8} fontSize={'2xl'} align={'start'}  fontWeight={'lighter'} color={'whitesmoke'}>
            <Link 
            href="./"
            ><Text _hover={{ fontWeight:'bold'}}>Home</Text></Link>
            <Link 
            href="./about"
            ><Text _hover={{ fontWeight:'bold'}}>About</Text></Link>
            <Link href="./services" _hover={{ fontWeight:'bold'}}><Text>Services</Text></Link>
            <Link href="./projects" _hover={{ fontWeight:'bold'}}><Text>Projects</Text></Link>
            <Link href="./contact" _hover={{ fontWeight:'bold'}}><Text>Contact</Text></Link>
           
          </VStack>
    </Box>
  );
};



interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      w={'100%'}
      
      alignItems="center"
      bgColor="black"
      justifyContent="flex-start"
      {...rest}
    >
      
      <IconButton
        size="lg"
        fontSize={30}
        bg={'transparent'}
        onClick={onOpen}
        _hover={{
          bg: 'transparent',
          color: 'white',
        }}
        color={'white'}
        aria-label="open menu"
        icon={<RiMenu2Line />}
      />

      <Text color={'whitesmoke'} fontSize="2xl" ml="8" fontFamily="Poppins" fontWeight="semibold">
        EMG
      </Text>
    </Flex>
  );
};

export default function SimpleSidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box display={{ base: 'flex', md: 'none' }} fontFamily={'Poppins'} bgColor={'black'}>
      <SidebarContent onClose={onClose} display={{ base: 'none', md: 'none' }} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}
