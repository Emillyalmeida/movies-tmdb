import { FaList, FaRegHeart } from "react-icons/fa";
import {
  Box,
  Heading,
  Text,
  Image,
  Flex,
  CircularProgress,
  VStack,
  CircularProgressLabel,
  IconButton,
} from "@chakra-ui/react";

const Card = ({ item }: any) => {
  return (
    <Box
      boxShadow="base"
      bg="white"
      minH="400px"
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      pos="relative"
      pb={2}
      rounded="lg"
      _hover={{ transform: "translateY(-10px)", borderColor: "gray.100" }}
      cursor="pointer"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
        alt={item.title}
        minW="200px"
        rounded="lg"
      />
      <VStack>
        <Text fontWeight="bold" textAlign="center">
          {item.title ? item.title : item.original_name}
        </Text>
        <CircularProgress
          rounded="full"
          top="-5px"
          right="5px"
          position="absolute"
          bg="white"
          size="40px"
          value={Math.ceil(item.vote_average * 10)}
          color="green.500"
        >
          <CircularProgressLabel>{`${Math.ceil(
            item.vote_average * 10
          )}%`}</CircularProgressLabel>
        </CircularProgress>
      </VStack>
      <Flex justifyContent="center" gap={3}>
        <IconButton
          variant="ghost"
          color="yellow.700"
          aria-label="Send email"
          icon={<FaList />}
          fontSize="20px"
          _hover={{
            borderWidth: "1px",
            rounded: "md",
            borderColor: "yellow.700",
          }}
        />
        <IconButton
          variant="ghost"
          color="yellow.700"
          aria-label="Send email"
          icon={<FaRegHeart />}
          fontSize="20px"
          _hover={{
            borderWidth: "1px",
            rounded: "md",
            borderColor: "yellow.700",
          }}
        />
      </Flex>
    </Box>
  );
};

export default Card;
