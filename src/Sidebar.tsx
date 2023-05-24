import { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
} from '@chakra-ui/react';
import { RiMenu2Line } from 'react-icons/ri';
import { IconType } from 'react-icons';
import { ReactText } from 'react';

interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string;
  isExternal: boolean;
  children?: ReactNode;
  onClick?: () => void;
  color?: string;
  size?: string;
  variant?: string;
  padding?: string;
  bg?: string;
}

const LinkItems: Array<LinkItemProps> = [];

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
      {LinkItems.map((link) => (
        <NavItem href={link.href} key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  href: string;
}

const NavItem = ({ icon, href, children, ...rest }: NavItemProps) => {
  return (
    <Link href={href} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        textShadow={'0px 0px 40px black'}
        color={'whitesmoke'}
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
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
