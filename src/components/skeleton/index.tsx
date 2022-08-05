import { Box, Flex, Skeleton } from "@chakra-ui/react";

const SkeletonCard = () => {
  return (
    <Box
      w="200px"
      boxShadow="base"
      bg="white"
      minH="400px"
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      pb={2}
      rounded="lg"
      alignItems="center"
    >
      <Skeleton
        startColor="gray.300"
        endColor="gray.200"
        height="300px"
        w="200px"
        rounded="lg"
      />
      <Skeleton
        startColor="gray.300"
        endColor="gray.200"
        w="175px"
        px={4}
        h="20px"
      />
      <Flex gap={4} justifyContent="center">
        <Skeleton
          startColor="gray.300"
          endColor="gray.200"
          height="26px"
          w="26px"
          rounded="lg"
        />
        <Skeleton
          startColor="gray.300"
          endColor="gray.200"
          height="26px"
          w="26px"
          rounded="lg"
        />
      </Flex>
    </Box>
  );
};
export default SkeletonCard;
