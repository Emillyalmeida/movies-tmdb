import { Button, Flex, Heading, Input, Text, VStack } from "@chakra-ui/react";
import Header from "../../components/header";

const Home = () => {
  return (
    <Flex flexDir="column">
      <Header />
      <Flex
        flexDir="column"
        mt={0}
        bg="yellow.800"
        w="100%"
        p={6}
        color="white"
        gap={2}
      >
        <Heading size="2xl">Bem vindo(a)!</Heading>
        <Text fontSize="xl">Encontre e Organize suas séries e filmes</Text>
        <Flex mt={3} bg="white" borderRadius="full">
          <Input
            bg="white"
            variant="filled"
            borderRadius="full"
            placeholder="Busque um filme ou serie"
            color="gray.700"
          />
          <Button
            borderRadius="full"
            bg="yellow.600"
            color="gray.600"
            paddingX={5}
          >
            Pesquisar
          </Button>
        </Flex>
      </Flex>
      <VStack mt={4} alignItems="self-start" p={4}>
        <Heading size="lg">Têndencias</Heading>
      </VStack>
    </Flex>
  );
};

export default Home;
