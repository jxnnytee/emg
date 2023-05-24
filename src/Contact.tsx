import { Box, Heading, Flex, Image, Center } from "@chakra-ui/react";
import './Emg.css';


function Contact() {
    return (
        <Center bg={'black'} minH={'100%'}>
         <Flex minH={'100vh'} mt={{ base: -20, md: 0}} mx={{ base: 0, md: 0, lg: 40}}  display={{ base: 'block', md: 'block'}} pt={20} fontFamily={'Poppins'}>
         <Box  p={6}>
            <Box borderBottom={'solid 1px white'}>
                <Heading color={'whitesmoke'} fontFamily={'Poppins'} as={'h1'}  size={{ base: 'lg', md: 'lg', lg: '2xl' }} >
                Contact Us
                </Heading>
                </Box>
                
            </Box>
           <Box w={'100%'} display={{ base: 'block', md: 'flex'}}>
            <Box mb={5} p={6}>
                <Image borderRadius={'20'} objectFit={'cover'} src={'../images/e7.jpg'} alt="hero" boxShadow={'0px 0px 30px whitesmoke'} />
                
            </Box>
            
           

    
         
            </Box>
            
        </Flex>
        </Center>

    )
}

export default Contact;