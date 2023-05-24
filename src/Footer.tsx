import {
  Box,
  Container,
  Stack,

  Text,

  useColorModeValue,
} from '@chakra-ui/react';







export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      bg={'black'}
      fontFamily={'Poppins'}
      color={'whitesmoke'}
      >
      <Container as={Stack} maxW={'6xl'} py={10}>
        
      </Container>

      <Box
        borderTopWidth={1}
       
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'column' }}
          
        
          >
          <Text textAlign={'center'}>© 2023 EMG Contractors. All rights reserved</Text>
          
        </Container>
      </Box>
    </Box>
  );
}