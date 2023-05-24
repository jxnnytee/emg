
import {
  Box,
  Text,
  Image,
  Container,
  Center,
  Button,
  VStack,
} from '@chakra-ui/react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

export default function CaptionCarousel() {
  const AutoplaySlider = AwesomeSlider;

  return (
    <Container pb={20} pt={10} bgColor="black" minW="100%">
      <Center>
        <Box>
          <Button mb={10} bgColor="whitesmoke">
            Get A Free Quote
          </Button>
        </Box>
      </Center>
      <Center>
        <VStack spacing={10}>
          <Text mt={6} fontWeight="semibold" fontFamily="Poppins" color="whitesmoke">
            Working with some of the UK’s most popular food providers…
          </Text>
        </VStack>
      </Center>
      <Center>
        <Box mt={10} w={{ base: '100%', md: '30%', lg: '100%' }}>
          <AutoplaySlider  >
            <div>
              <Image src="../images/e1.jpg" />
            </div>
            <div>
              <Image src="../images/e2.jpg" />
            </div>
            <div>
              <Image src="../images/e3.jpg" />
            </div>
            <div>
              <Image src="../images/e4.jpg" />
            </div>
          </AutoplaySlider>
        </Box>
      </Center>
      <Center>
        <Button mt={20} bgColor="whitesmoke">
          See Projects
        </Button>
      </Center>
    </Container>
  );
}
