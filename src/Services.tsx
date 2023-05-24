import { Box, Heading, Flex, Button, Text, Image, Center, Divider, HStack, VStack } from "@chakra-ui/react";
import './Emg.css';
import CaptionCarousel from "./Carousel";

function Services() {
    return (
        <Center bg={'black'} minH={'100%'}>
         <Flex mt={{ base: -20, md: 0}} mx={{ base: 0, md: 0, lg: 40}}  display={{ base: 'block', md: 'block'}} pt={20} fontFamily={'Poppins'}>
         <Box  p={6}>
            <Box borderBottom={'solid 1px white'}>
                <Heading color={'whitesmoke'} fontFamily={'Poppins'} as={'h1'}  size={{ base: 'lg', md: 'lg', lg: '2xl' }} >
                Our Services
                </Heading>
                </Box>
                
            </Box>
           <Box w={'100%'} display={{ base: 'block', md: 'flex'}}>
            <Box mb={5} p={6}>
                <Image borderRadius={'20'} objectFit={'cover'} src={'../images/e6.jpeg'} alt="hero" boxShadow={'0px 0px 30px whitesmoke'} />
                <Text p={0} mt={20} fontSize={{ base: 'lg', md: '2xl'}} color={'whitesmoke'}>
                Our workforce and supplier relationships are long standing meaning we get to deliver high quality services at affordable prices, every time. We listen to our customers needs and plan accordingly so that we don’t only deliver what is required, but aim to exceed expectations.
                </Text>
            </Box>
            
           
            </Box>
            <Box w={'100%'} display={{ base: 'block', md: 'block'}}>
                <Box w={'100%'} p={6}>
            <Divider  orientation="horizontal" />
            </Box>
            <Text p={6} fontSize={{ base: 'lg', md: '2xl'}} color={'whitesmoke'}>
            We offer the following services for both commercial and residential customers: 
            </Text>
            <VStack align={'flex-start'} p={6} fontSize={{ base: 'lg', md: '2xl'}} color={'whitesmoke'}>
            <Text>- Shopfitting</Text>

            <Text>- Premium Refurbishments</Text>

            <Text>- Restaurant & Bar Fit Outs</Text>

            <Text>- Commercial Building</Text>

            <Text>- Hotel Fit Out Renovations</Text>

            <Text>- General Construction</Text>

            <Text>- Design</Text>
            </VStack>
            <Center>
            <Box>
                <Button mb={20}>
                    Get A Free Quote
                </Button>
            </Box>
            </Center>
            </Box>
        </Flex>
        </Center>

    )
}

export default Services;