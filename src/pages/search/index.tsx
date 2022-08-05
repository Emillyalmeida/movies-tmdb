import {
  Button,
  Flex,
  Grid,
  Heading,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";

import Header from "../../components/header";

import { useParams, useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { TmdbContext } from "../../providers/context";
import Card from "../../components/Card";
import { SearchIcon } from "@chakra-ui/icons";

interface typeParams {
  query: string;
}

const Search = () => {
  const { query } = useParams<typeParams>();
  const history = useHistory();

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
            placeholder="Busque um filme ou serie"
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
      <Grid
        w="100%"
        templateColumns="repeat(auto-fill, minmax(200px,220px))"
        justifyContent="center"
        gap={10}
        p="8"
        mt="4"
      >
        {loading ? (
          <Heading>Carregando...</Heading>
        ) : (
          resultSearch.map((item) => <Card key={item.id} item={item} />)
        )}
      </Grid>
    </Flex>
  );
};

export default Search;
