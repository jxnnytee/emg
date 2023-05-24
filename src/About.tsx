import { Box, Heading, Flex, Button, Text, Image, Center, Divider } from "@chakra-ui/react";
import './Emg.css';
import CaptionCarousel from "./Carousel";

function About() {
    return (
        <Center bg={'black'} minH={'100%'}>
         <Flex mt={{ base: -20, md: 0}} mx={{ base: 0, md: 0, lg: 40}}  display={{ base: 'block', md: 'block'}} pt={20} fontFamily={'Poppins'}>
         <Box  p={6}>
            <Box borderBottom={'solid 1px white'}>
                <Heading color={'whitesmoke'} fontFamily={'Poppins'} as={'h1'}  size={{ base: 'lg', md: 'lg', lg: '2xl' }} >
                Since the 90’s…
                </Heading>
                </Box>
                
            </Box>
           <Box w={'100%'} display={{ base: 'block', md: 'flex'}}>
            <Box mb={5} p={6}>
                <Image borderRadius={'20'} objectFit={'cover'} src={'../images/e5.jpeg'} alt="hero" boxShadow={'0px 0px 30px whitesmoke'} />
                <Heading pt={50} color={'whitesmoke'} fontFamily={'Poppins'} as={'h1'}  size={{ base: 'lg', md: 'lg', lg: '2xl' }} >
                …we always finish with a hand shake.
                </Heading>
            </Box>
            
           
            </Box>
            <Box w={'100%'} display={{ base: 'block', md: 'block'}}>
                <Box w={'100%'} p={6}>
            <Divider  orientation="horizontal" />
            </Box>
            <Text p={6} fontSize={{ base: 'lg', md: '2xl'}} color={'whitesmoke'}>
            Our work and pricing speaks for itself which is why our business has been built primarily through recommendations and word of mouth. 

We’re a family run business of 30 years with expertise in projects costing £10K to £5M. There’s no project too small or too big and no matter the geographical location, our priority is to deliver on time, on budget and to the highest standard at all times.

We invest heavily into the training and continuous development of our staff and always seek to enhance the strengths of our people for the benefit and satisfaction of our clients.
            </Text>
            <Center>
            <Box>
                <Button mb={20}>
                    Our Services
                </Button>
            </Box>
            </Center>
            </Box>
        </Flex>
        </Center>

    )
}

export default About;