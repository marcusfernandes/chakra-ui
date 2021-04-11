import {FormLabel, FormControl, Input as ChakraInput,  InputProps as ChakraInputProps} from '@chakra-ui/react'

interface Props  extends ChakraInputProps{
  name: string;
  label: string;
}

export default function Input ({name, label, ...rest}: Props) {
  return (
    <FormControl>
    
    {!!label && <FormLabel htmlFor={label}>{label}</FormLabel>}

    <ChakraInput
      id={name}
      name={name}
      focusBorderColor="pink.500"
      bgColor="gray.900"
      variant="filled"
      _hover={{
        bgColor: 'gray.900'
      }}
      size="lg"
      {...rest}
    />
  </FormControl>
  );
}