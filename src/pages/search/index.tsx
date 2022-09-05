import {
  Center,
  Flex,
  Grid,
  Heading,
  Icon,
  IconButton,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

import Header from "../../components/header";

import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { TmdbContext } from "../../providers/context";
import Card from "../../components/Card";
import { SearchIcon } from "@chakra-ui/icons";
import SkeletonCard from "../../components/skeleton";
import { MdError } from "react-icons/md";

interface typeParams {
  query: string;
}

const Search = () => {
  const { query } = useParams<typeParams>();

  const { SearchItem, resultSearch } = useContext(TmdbContext);

  const [loading, setLoading] = useState(true);
  const [Query, setQuery] = useState(query);

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    setLoading(true);
    SearchItem(Query);
    setLoading(false);
  }, [Query]);

  const onSubmit = handleSubmit((data) => {
    const { search } = data;
    setQuery(search);
  });
  return (
    <Flex flexDir="column" w="100%">
      <Header />
      <Flex
        flexDir="column"
        mt={0}
        w="100%"
        p={6}
        color="white"
        gap={2}
        py={8}
        h="250px"
        justifyContent="center"
        bg="yellow.800"
      >
        <Heading size="2xl">Pesquisa</Heading>
        <Text fontSize="xl">Resultados para "{Query}"</Text>

        <Flex
          mt={3}
          bg="white"
          borderRadius="full"
          as="form"
          onSubmit={onSubmit}
        >
          <Input
            bg="white"
            variant="filled"
            borderRadius="full"
            placeholder="Busque por um filme"
            color="gray.700"
            {...register("search")}
          />
          <IconButton
            variant="ghost"
            color="yellow.800"
            aria-label="search"
            icon={<SearchIcon />}
            fontSize="25px"
            mx={3}
            _hover={{
              color: "gray.700",
            }}
            type="submit"
          />
        </Flex>
      </Flex>
      {loading ? (
        <Grid
          w="100%"
          templateColumns="repeat(auto-fill, minmax(200px,220px))"
          justifyContent="center"
          alignItems="center"
          gap={10}
          p="8"
          mt="4"
        >
          <>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((key) => (
              <SkeletonCard key={key} />
            ))}
          </>
        </Grid>
      ) : resultSearch.length < 1 ? (
        <Center pt={8}>
          <VStack
            alignItems="center"
            spacing={4}
            alignSelf="center"
            w={["90%", "75%", "50%"]}
          >
            <Icon as={MdError} color="red.500" fontSize="60px" />
            <Heading size="lg" textAlign="center">
              Nenhum resultado encontado para : "{Query}"
            </Heading>
            <Text textAlign="center">Verifique e pesquise novamente</Text>
          </VStack>
        </Center>
      ) : (
        <Grid
          w="100%"
          templateColumns="repeat(auto-fill, minmax(200px,220px))"
          justifyContent="center"
          alignItems="center"
          gap={10}
          p="8"
          mt="4"
        >
          {resultSearch.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </Grid>
      )}
    </Flex>
  );
};

export default Search;
