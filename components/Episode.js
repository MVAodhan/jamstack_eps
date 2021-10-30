import { Box, Text, useMediaQuery } from "@chakra-ui/react";
const Episode = ({ title, src }) => {
  const [isLargerThan855] = useMediaQuery("(min-width: 836px)");

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
        textAlign="center"
        fontFamily="Lobster"
        fontSize={isLargerThan855 ? "2rem" : "1.3rem"}
      >
        {title}
      </Text>
      <Box
        as="iframe"
        pt="10px"
        title={title}
        w={isLargerThan855 ? "660px" : "350px"}
        h={isLargerThan855 ? "400px" : "200px"}
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></Box>
    </Box>
  );
};

export default Episode;
