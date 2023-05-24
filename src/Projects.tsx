import { Box, Heading, Flex, Button, Text, Image, Center } from "@chakra-ui/react";
import './Emg.css';

function Projects() {
    return (
        <Center w={'100%'} bg={'black'} minH={'100%'}>
         <Flex mt={{ base: -20, md: 0}} mx={{ base: 0, md: 0, lg: 40}}  display={{ base: 'block', md: 'block'}} pt={20} fontFamily={'Poppins'}>
         <Box  p={6}>
            <Box  borderBottom={'solid 1px white'}>
                <Heading color={'whitesmoke'} fontFamily={'Poppins'} as={'h1'}  size={{ base: 'lg', md: 'lg', lg: '2xl' }} >
                Our Projects
                </Heading>
                </Box>
                
            </Box>
           <Box w={'100%'} display={{ base: 'block', md: 'flex'}}>
            <Box mb={5} p={6}>
                <Image borderRadius={'20'} objectFit={'cover'} src={'../images/e7.jpg'} alt="hero" boxShadow={'0px 0px 30px whitesmoke'} />
                <Text p={0} mt={20} fontSize={{ base: 'lg', md: '2xl'}} color={'whitesmoke'}>
                We’ve worked closely alongside some of the UK’s most popular food providers. From large dine-in restaurants, to smaller ‘Grab and Go’ concepts; take a look through our portfolio to see more of what we do…


                </Text>
            </Box>
            
           
            </Box>
            <Box w={'100%'} display={{ base: 'block', md: 'block'}}>
                <Box w={'100%'} p={6}>
            
            </Box>

         </Box>
            <Center>
            <Box w={400} fontSize={'2xl'} display={{ base: 'block', md: 'block'}}>
            <Text  textAlign={'center'} color={'white'} fontWeight={'bold'} textShadow={'1px 1px 4px black'}>Domino's Pizza: Various UK</Text>
            <Box bgImage={'../images/e1.jpg'} bgPos={'center'} bgSize={'cover'} w={'100%'} h={300} bgColor={'white'} p={4}>
            
            </Box>
            <Text color={'white'}  textAlign={'center'} mt={10} fontWeight={'bold'} textShadow={'1px 1px 4px black'}>GDK: Various UK</Text>
            <Box bgImage={'../images/e2.jpg'} bgPos={'center'} bgSize={'cover'} w={'100%'} h={300} bgColor={'white'} p={4}>
            
            </Box>
            <Text color={'white'}  textAlign={'center'} mt={10} fontWeight={'bold'} textShadow={'1px 1px 4px black'}>Crate @ Costa Coffee</Text>
            <Box bgImage={'../images/e3.jpg'} bgPos={'center'} bgSize={'cover'} w={'100%'} h={300} bgColor={'white'} p={4}>
            
            </Box>
            <Text color={'white'} textAlign={'center'} mt={10} fontWeight={'bold'} textShadow={'1px 1px 4px black'}>Costa Coffee: Various UK</Text>
            <Box bgImage={'../images/e4.jpg'} bgPos={'center'} bgSize={'cover'} w={'100%'} h={300} bgColor={'white'} p={4}>

            </Box>
           
        
            
            </Box>
            </Center>
            <Center>
            <Box>
                <Button mt={20} mb={20}>
                    Get A Free Quote
                </Button>
            </Box>
            </Center>
        </Flex>
        </Center>

    )
}

export default Projects;