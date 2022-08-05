import { Button, Flex, Heading, Input, Text, VStack } from "@chakra-ui/react";

import { useContext, useEffect, useState } from "react";

import Header from "../../components/header";
import SectionHome from "../../components/sectionsHome";

import { FiTrendingUp } from "react-icons/fi";
import { MdLocalMovies, MdMovie } from "react-icons/md";

import { TmdbContext } from "../../providers/context";
import { useHistory } from "react-router-dom";

const Home = () => {
  const {
    SectionInital,
    AllListsHome,
    load,
    trend,
    movies,
    tvSeries,
    getSession,
  } = useContext(TmdbContext);

  const history = useHistory();

  const [seach, setSearch] = useState("");

  useEffect(() => {
    if (!getSession) {
      SectionInital();
    }

    AllListsHome();
  }, []);

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
        h="360px"
        justifyContent="center"
        bgGradient="linear(to-l, #fff350, #ffea44, #ffe139, #ffd72c, #ffce1f, #fac618, #f6bd0f, #f1b505, #e6ac04, #dca302, #d19a01, #c79100);"
      >
        <Heading size="3xl">Bem vindo(a)!</Heading>
        <Text fontSize="2xl">Encontre e Organize suas séries e filmes</Text>
        <Flex mt={3} bg="white" borderRadius="full">
          <Input
            bg="white"
            variant="filled"
            borderRadius="full"
            placeholder="Busque um filme ou serie"
            color="gray.700"
            value={seach}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            borderRadius="full"
            bgGradient="linear(to-r, #fff350, #ffea44, #ffe139, #ffd72c, #ffce1f, #fac618, #f6bd0f, #f1b505, #e6ac04, #dca302, #d19a01, #c79100)"
            color="gray.600"
            paddingX={5}
            _hover={{ color: "white" }}
            onClick={() => history.push(`search/${seach}`)}
          >
            Pesquisar
          </Button>
        </Flex>
      </Flex>
      <VStack spacing={3} bg="gray.100">
        <SectionHome
          load={load}
          title="Tendências"
          trend={trend}
          icon={FiTrendingUp}
        />
        <SectionHome
          load={load}
          title="Filmes"
          trend={movies}
          icon={MdLocalMovies}
        />
        <SectionHome
          load={load}
          title="Series"
          trend={tvSeries}
          icon={MdMovie}
        />
      </VStack>
    </Flex>
  );
};

export default Home;
