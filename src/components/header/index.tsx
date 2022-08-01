import {
  HStack,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Button,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";

const Header = () => {
  return (
    <HStack
      w="full"
      bg="gray.800"
      h={["11vh", "11vh", "12vh"]}
      paddingY="4"
      paddingX={["4", "4", "12"]}
    >
      <Heading ml="3" size="lg" color="yellow.600" fontWeight="700">
        TMDB
      </Heading>
      <Menu>
        <MenuButton as={Button}>Actions</MenuButton>
        <MenuList>
          <MenuButton
            as={IconButton}
            aria-label="Lists"
            icon={<AddIcon />}
            variant="outline"
          >
            Listas
          </MenuButton>

          <MenuDivider />
          <MenuGroup title="Minhas listas">
            <MenuItem>My Account</MenuItem>
            <MenuItem>Payments </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default Header;
