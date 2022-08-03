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
} from "@chakra-ui/react";

import { AddIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { TmdbContext } from "../../providers/context";

const Header = () => {
  const { lists } = useContext(TmdbContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <HStack
      w="full"
      bg="gray.800"
      h={["11vh", "11vh", "12vh"]}
      paddingY="4"
      paddingX={["4", "4", "12"]}
      justifyContent="space-between"
    >
      <Heading ml="3" size="xl" color="yellow.600" fontWeight="700">
        TMDB
      </Heading>
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
            Actions
          </MenuButton>
          {isOpen ? (
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
                <MenuItem>My Account</MenuItem>
                <MenuItem>Payments </MenuItem>
              </MenuGroup>
            </MenuList>
          ) : (
            <></>
          )}
        </Menu>
      ) : (
        <Button
          rightIcon={<AddIcon />}
          color="yellow.700"
          borderColor="yellow.700"
          variant="outline"
          _hover={{ bg: "gray.500" }}
        >
          Criar Lista
        </Button>
      )}
    </HStack>
  );
};

export default Header;
