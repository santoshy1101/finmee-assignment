import React from 'react'
import { Box, Image, SimpleGrid, Heading, Text, Button } from '@chakra-ui/react'
import { IoMdArrowDropdown } from 'react-icons/io'
const Home = () => {
  return (
    <div>
      <Box>
        {/*  background image */}
        <Box
          height="100vh"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundImage="url(https://i.ibb.co/wgHLSWW/Dassault-1680x600-1.png)"
          backgroundPosition={'center'}
        >
          {/*  content written over background image */}
          <Box paddingTop="100px">
            <SimpleGrid columns={[1, 1, 1, 2]} gap={'30px'}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Box textAlign="left">
                  <Heading color="white">
                    Data-Powered Solutions <br />
                    for Industrial Excellence
                  </Heading>

                  <Button
                    color="white"
                    backgroundColor="#9ff9e1"
                    padding="10px 20px"
                    mt={10}
                    _hover={{ backgroundColor: '#74c5a8', border: 'none' }}
                  >
                    Read More
                  </Button>
                </Box>
              </Box>
              <Box>
                <Image src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png"></Image>
              </Box>
            </SimpleGrid>
          </Box>
          <Box marginLeft={'30px'} position="fixed" zIndex={10}>
            <Button padding={'23px 10px'} bg={'#9ff9e1'}>
              <Image
                width={'40px'}
                height={'30px'}
                src="https://i.imgur.com/J6vHKA4.png"
              ></Image>
              <IoMdArrowDropdown fontSize={'20px'} />
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Home
