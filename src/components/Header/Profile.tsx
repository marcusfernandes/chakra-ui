import  {Flex, Box, Text, Avatar} from "@chakra-ui/react"

export function Profile() {
    return (
      <Flex
        align="center"
      > 
      <Box mr="4" textAlign="right">
        <Text>Marcus Fernandes</Text>
        <Text
          color="gray.300"
          fontSize="small"
        >
          marcus.palmas@gmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Rebecca Barreto" />
    </Flex>
    )
}