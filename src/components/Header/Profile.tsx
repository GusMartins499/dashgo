import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align='center'>
    <Box mr='4' textAlign='right'>
      <Text>Gustavo Martins</Text>
      <Text color='gray.300' fontSize='small'>
        gustavosm994@gmail.com</Text>
    </Box>

    <Avatar size='md' name='Gustavo Martins' src='https://github.com/gusmartins499.png' />
  </Flex>
  )
}