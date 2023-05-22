import {
  Flex,
  Image,
  Box,
  Text,
  Heading,
  HStack,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getMensData } from "../Redux/ProductReducer/action";
import trustScore from "../Images/trustScore.png";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { postCartData } from "../Redux/CartReducer/action";
import Navbar from "../Components/ShoppingCom/Navbar";
import Footer from "../Components/Footer";
const SingleMobileAccessoriesProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { mobile_data, isLoading, isError } = useSelector(
    (store) => store.ProductReducer
  );
  const [data, setData] = useState({});
  useEffect(() => {
    if (mobile_data.length === 0) {
      dispatch(getMensData());
    }
  }, [mobile_data.length, dispatch]);
  useEffect(() => {
    let newData = mobile_data.find((item) => item.id === Number(id));
    // console.log(newData, "s");
    newData && setData(newData);
  }, [id, mobile_data]);
  const toast = useToast();
  const handleCartAdd = () => {
    const product_data={
      id:data.id,
      image:data.image,
      brands:data.brands,
      category:data.category,
      price:data.price,
      title:data.title,
      quantity:1
    }
    dispatch(postCartData(product_data));
    toast({
      position: "top",
      title: "Item Added",
      description: "You've added this item in Cart.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };
  return (
    <Box>
      <Navbar />
      <Breadcrumb
        spacing="10px"
        separator={<ChevronRightIcon color="gray.500" />}
        ml={["20px", "25px", "40px", "100px"]}
        mt="5"
        mb="5"
        fontSize="lg"
      >
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/shop">Shop</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/mobile">Mobile Accessories</Link>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex
        direction={["column", "column", "row"]}
        ml={["20px", "25px", "40px", "100px"]}
        mr={["20px", "25px", "40px", "100px"]}
      >
        <Box>
          <Image
            src={data && data.image}
            alt={data && data.brands}
            objectFit="fill"
            h="500px"
            w="500px"
            maxHeight="500px"
          />
        </Box>
        <Box textAlign="left" pl={["2", "3", "5", "20"]}>
          <Heading as="h2" fontWeight="semibold" fontSize="2xl">
            {data && data.title}
          </Heading>

          <Heading as="h2" fontWeight="semibold" fontSize="2xl" lineHeight="10">
            Price: ₹{data && data.price}
          </Heading>
          <HStack w="100%" gap="10%" mt="5">
            <Button
              colorScheme="facebook"
              w="60%"
              border="1px solid blue"
              onClick={handleCartAdd}
            >
              Add to Cart
            </Button>
          </HStack>
          <Box borderBottom="2px solid gray">
            <Image src={trustScore} alt="product trust score" mt="10" mb="5" />
          </Box>
          <Text mt="5" fontWeight="bold">
            Details
          </Text>
          <Text color="gray">Country of Origin: India</Text>
          <Text color="gray">Size:Medium</Text>
          <Text color="gray">SKU:UTMF003578</Text>
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};

export default SingleMobileAccessoriesProductPage;
