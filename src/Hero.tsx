import { Box, Heading, Flex, Text, Image, Center } from "@chakra-ui/react";
import './Emg.css';
import CaptionCarousel from "./Carousel";

function Hero() {
    return (
        <Box>
        <Center bg={'black'} minH={'100%'}>
        <Flex mt={{ base: -20, md: 0}} mx={{ base: 0, md: 0, lg: 40}}  pt={{base: 20, md: 0 }} fontFamily={'Poppins'}>
           <Box w={'100%'} display={{ base: 'block', md: 'block'}}>
            <Box mb={5} p={6}>
                <Image borderRadius={'20'} height={{ base: '200', md: '400'}} w={'100%'} objectFit={'cover'} src={'../images/emm.jpg'} alt="hero"  />
            </Box>
            <Box p={6}>
            <Flex mt={{ base: -20, md: -100}} mx={{ base: 0, md: 0, lg: 0}} display={'block'} pt={20} fontFamily={'Poppins'}>
                <Heading textShadow={'0px 0px 100px black'} color={'whitesmoke'} fontFamily={'Poppins'} as={'h1'}  size={{ base: '2xl', md: 'lg', lg: '4xl' }} >
                Affordable, trusted & high quality commercial & residential building contractors.
                </Heading>
                <Text mt={5} color={'white'} fontSize={{ base: 'lg', md: 'md', lg: 'lg'}}>
                We’re a family run business of 30 years with expertise in projects costing £10K to £5M. There’s no project too small or too big and no matter the geographical location, our priority is to deliver on time, on budget and to the highest standard at all times. More
                </Text>
                </Flex>
            </Box>
            </Box>
        </Flex>
        </Center>
        <CaptionCarousel />
        </Box>
   

    )
}

export default Hero;