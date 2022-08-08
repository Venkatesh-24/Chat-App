import { Container, Box, Text, Tabs, TabList, Tab, TabPanels, TabPanel} from '@chakra-ui/react';
import React from 'react';
import Login from '../components/authentication/Login';
import Signup from '../components/authentication/Signup';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";


const HomePage = () => {

   const history = useHistory();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userInfo"));

        if(user)
        {
            history.push("/chats");
        }
    }, [history]);  

  return (
    <Container maxW="xl" centerContent>
        <Box
            d='flex'
            justifyContent='center'
            textAlign="center"
            p={3}
            bg={"white"}
            w="100%"
            m="40px 0 15px 0"
            borderRadius="lg"
            borderWidth="1px"
        >

            <Text fontSize="4xl" fontFamily="Work Sans" color="black">Talk-A-Tive</Text>

        </Box>

        <Box
            bg="white"
            w="100%"
            p={4}
            borderRadius="lg"
            borderWidth="1px"
            color="black"
        >

        <Tabs variant='soft-rounded'>
            <TabList marginBottom="1em">
                <Tab w="50%">Login</Tab>
                <Tab w="50%">Signup</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                { <Login /> }
                </TabPanel>
                <TabPanel>
                { <Signup /> }
                </TabPanel>
            </TabPanels>
        </Tabs>

        </Box>

    </Container>
  )
}

export default HomePage;