import {
  HStack,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuGroup,
  MenuDivider,
  useDisclosure,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";

import { AddIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { FaHeart, FaMoon, FaSun } from "react-icons/fa";
import { useContext } from "react";
import { TmdbContext } from "../../providers/context";

import ModalCreate from "../ModalCreateList";
import { useHistory } from "react-router-dom";

const Header = () => {
  const { lists } = useContext(TmdbContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

  const history = useHistory();

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <ModalCreate isOpen={isOpenModal} onClose={onCloseModal} />

      <HStack
        w="full"
        bg="gray.800"
        h={["11vh", "11vh", "12vh"]}
        paddingY="4"
        paddingX={["4", "4", "12"]}
        justifyContent="space-between"
      >
        <Heading
          ml={["0", "3"]}
          size={["2xl", "3xl"]}
          bgGradient="linear(to-t, #fff350, #ffea44, #ffe139, #ffd72c, #ffce1f, #fac618, #f6bd0f, #f1b505, #e6ac04, #dca302, #d19a01, #c79100);"
          fontWeight="700"
          onClick={() => history.push("/")}
          cursor="pointer"
          color="gray.800"
        >
          TMDB
        </Heading>
        <HStack spacing={3}>
          <IconButton
            variant="ghost"
            color="yellow.700"
            aria-label="togle theme"
            icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
            fontSize={["1.5rem", "2rem"]}
            _hover={{
              color: "yellow.600",
            }}
            onClick={toggleColorMode}
          />
          <IconButton
            variant="ghost"
            color="yellow.700"
            aria-label="favoritos"
            icon={<FaHeart />}
            fontSize={["1.5rem", "2rem"]}
            _hover={{
              color: "yellow.600",
            }}
            onClick={() => history.push("/favorites")}
          />
          {lists.length > 0 ? (
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                px={4}
                py={2}
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="1px"
                borderColor="yellow.700"
                bg="gray.700"
                color="yellow.700"
                _hover={{ bg: "gray.500" }}
                _expanded={{ bg: "gray.400" }}
                _focus={{ boxShadow: "outline" }}
                onClick={onOpen}
              >
                Listas
              </MenuButton>

              <MenuList>
                <MenuItem
                  icon={<AddIcon />}
                  as={Button}
                  aria-label="Lists"
                  onClick={onClose}
                >
                  Criar Lista
                </MenuItem>

                <MenuDivider />
                <MenuGroup title="Minhas listas">
                  {lists.map((list) => (
                    <MenuItem
                      key={list.list_id}
                      onClick={() => history.push(`/lists/${list.list_id}`)}
                    >
                      {list.name}
                    </MenuItem>
                  ))}
                </MenuGroup>
              </MenuList>
            </Menu>
          ) : (
            <Button
              rightIcon={<AddIcon />}
              color="yellow.700"
              borderColor="yellow.700"
              variant="outline"
              _hover={{ bg: "gray.500" }}
              onClick={onOpenModal}
              w={["120px", "140px"]}
            >
              Criar Lista
            </Button>
          )}
        </HStack>
      </HStack>
    </>
  );
};

export default Header;
