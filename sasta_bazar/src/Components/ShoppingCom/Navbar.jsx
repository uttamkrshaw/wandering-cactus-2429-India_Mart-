import React, { useState } from "react";
import {
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Center, Stack, Text, useColorModeValue,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Icon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../Images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../../Redux/ProductReducer/action";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Redux/AuthReducer/action";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.AuthReducer.user)
  const isAuth = useSelector((store) => store.AuthReducer.isAuth)
  const [query, setQuery] = useState("");
  const handleSearch = () => {
    dispatch(getAllData(query));
    navigate("/searchdata");
  };
  const handleLogout = () => {
    dispatch(logout)
    navigate("/")
  }

  const handleLogin = () => {
    navigate("/login")
  }
  const handleHome = () => {
    navigate("/")
  }
  const handleAdmin = () =>{
    navigate("/admin")
  }
  return (
    <Box m={3} position="sticky" top="0px" bg="white" p="2" zIndex="100">
      <Flex
        w="90%"
        margin="auto"
        gap={[0, "5", "0"]}
        direction={["column", "column", "row"]}
        alignItems={["", "center"]}
        justifyContent={[, , "space-around"]}
      >
        <Flex>
          <Link to="/shop">
            <Image pr={10} w={["auto", "auto", "250px"]} src={logo}></Image>
          </Link>
        </Flex>

        <Flex
          p={[, , 2]}
          direction={["column", "column", "row"]}
          gap={["5", "5", "0"]}
          alignItems={["center", "center"]}
        >
          <InputGroup
            pl={10}
            pr={10}
            size="md"
            mt={{ sm: "3", base: "3" }}
            w={{ sm: "120%", base: "120%" }}
          >
            <InputLeftAddon h={12} bg="white" children="Shop" />
            <Input
              h={12}
              placeholder="what are you looking for"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <InputRightAddon
              onClick={handleSearch}
              bg="#2a6462"
              h={12}
              color="white"
              children={
                <>
                  <BsSearch />
                  Search
                </>
              }
            />
          </InputGroup>
        </Flex>
        <Flex gap={5}>
          <Button h={12} pl={10} pr={10} colorScheme="facebook">
            Bulk Requirement
          </Button>
          <Link to="/cart">
            <Box>
              <Flex alignItems="center" ml={3}>
                <Icon fontSize={"3rem"} as={AiOutlineShoppingCart} />
                <Heading size="md">Cart</Heading>
              </Flex>
            </Box>
          </Link>
          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}>
              <Avatar
                size={'sm'}
                src={
                  'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                }
              />
            </MenuButton>
            <MenuList>
              {isAuth ? <MenuItem>{user.username}</MenuItem> : null}
              <MenuItem>
                <Button onClick={handleHome} variant="link">
                  HomePage
                </Button>
              </MenuItem>
              {isAuth ? <MenuItem><BackdropExample /></MenuItem> : null}
              {user.type === "admin" ?

                <MenuItem>
                  <Button onClick={handleAdmin} variant="link">
                    Admin Pannel
                  </Button>

                </MenuItem>

                : null}
              <MenuDivider />
              <MenuItem>
                {isAuth ?
                  <Button onClick={handleLogout} variant="link">
                    Logout
                  </Button> :
                  <Button onClick={handleLogin} variant="link">
                    Login
                  </Button>
                }
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};
export default Navbar;


export const BackdropExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button variant="link" onClick={onOpen}>User Details</Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>User Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UserDetails />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export const UserDetails = () => {
  const user = useSelector((store) => store.AuthReducer.user);
  return (
    <Center py={6}>
      <Box
        maxW={"270px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Image
          h={"120px"}
          w={"full"}
          src={
            "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          }
          objectFit={"cover"}
        />
        <Flex justify={"center"} mt={-12}>
          <Avatar
            size={"xl"}
            src={user}
            alt={"Author"}
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>

        <Box>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              {user.username}
            </Heading>
            <Text color={"gray.500"}>{user.email}</Text>
          </Stack>

          <Stack direction={"row"} justify={"center"} spacing={6}>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>{user.type}</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Account Type
              </Text>
            </Stack>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>{user.order.length}</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Items Ordered
              </Text>
            </Stack>
          </Stack>

          <Button
            w={"full"}
            mt={8}
            bg={useColorModeValue("#151f21", "gray.900")}
            color={"white"}
            rounded={"md"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            Follow
          </Button>
        </Box>
      </Box>
    </Center>
  );
};
