import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
const option = ['Home', 'Industries', 'AI Software', 'Blog', 'Contact Us']
const Navbar = () => {
  return (
    <Flex
      pos="fixed"
      w="100%"
      zIndex={2}
      bg={'#9ff9e1'}
      p={'10px 20px'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Box cursor={'pointer'}>
        <Image
          w={'150px'}
          src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
          alt="Dan Abramov"
        />
      </Box>
      <Flex columnGap={'3vw'}>
        {option.map((item, ind) => (
          <Text
            cursor={'pointer'}
            color={'black'}
            _hover={{ color: 'white' }}
            key={ind}
            fontWeight={500}
            fontSize="lg"
          >
            {item}
          </Text>
        ))}
      </Flex>
    </Flex>
  )
}

export default Navbar
