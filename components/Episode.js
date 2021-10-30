import { Box, Text } from "@chakra-ui/react";
const Episode = ({ title, src }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      mt="30px"
      mb="30px"
    >
      <Text
        display="flex"
        justifyContent="center"
        color="white"
        fontFamily="Lobster"
        fontSize="2rem"
      >
        {title}
      </Text>
      <Box
        as="iframe"
        pt="10px"
        title={title}
        w="660px"
        h="400px"
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></Box>
    </Box>
  );
};

export default Episode;
