import { Box, HStack, Text, Center, Divider, Flex, Link } from "@chakra-ui/react";
import './Navbar.css'

function Navbar() {
  return (
    <Box fontSize={"lg"} display={{ base: "none", md: "flex" }} fontWeight={"semibold"} fontFamily={"Poppins"} bgColor={"BLACK"} w={"100%"}>
      <Flex width={'100%'} mx={{ base: 0, md: 0, lg: 40}} w={'100%'} p={6} alignItems={'space-between'}>
        
          <Flex  w={'100%'} justifyContent={"space-between"} >
            <Text fontSize={"lg"} fontWeight={"semibold"} fontFamily={"Poppins"} color={"gray.300"}>
              <a href="https://www.linkedin.com/in/shubham-kumar-799191120/" target="_blank" rel="noreferrer">EMG Contractors LTD</a>
            </Text>
            </Flex>
          
          <HStack fontSize={'md'}  fontWeight={'lighter'} color={'whitesmoke'}>
            <Link 
            href="./"
            ><Text>Home</Text></Link>
            <Link 
            href="./"
            ></Link>
            <Link 
            href="./about"
            ><Text>About</Text></Link>
            <Link href="./services" ><Text>Services</Text></Link>
            <Link href="./projects" ><Text>Projects</Text></Link>
            <Link href="./contact" ><Text>Contact</Text></Link>
           
          </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;
