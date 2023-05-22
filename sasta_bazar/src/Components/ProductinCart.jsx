import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { quantity_decrease, quantity_increase } from "../Redux/CartReducer/action";

const ProductinCart = ({ id, title, image, price, quantity, deletefunc, handlecost }) => {
  const [quan, setQuan] = useState(1);
  const dispatch = useDispatch()

  let newPrice = price;

  let sum = quantity * newPrice;

  const handledelete = () => {
    return deletefunc(id);
  };

  const handleQIncrease = () => {
    console.log("increase");
    dispatch(quantity_increase(id))
  }

  const handleQDecrease = () => {
 console.log("decrese");
    dispatch(quantity_decrease(id))
  }

  useEffect(() => {
    handlecost(sum);
  }, [quantity]);

  return (
    <div>
      <Flex
        justifyContent="space-evenly"
        alignItems="center"
        borderBottom="1px solid grey"
        p="2rem"
      >
        <Box>
          <img src={image} alt={title} width="25%" />
        </Box>
        <Box>
          <Text as={"code"}>{title}</Text>
        </Box>
        <Box>
          <Text as="i" fontSize="lg" color="green">
            ₹ {price}
          </Text>
        </Box>
        <Box color="black">
          <Flex justifyContent="center" alignItems="center">
            <button
              style={{
                color: "white",
                backgroundColor: "red",
                width: "50px",
                height: "50px",
                borderRadius: "10px",
              }}
              // onClick={() => setQuan((prev) => prev - 1)}
              onClick={handleQDecrease}
              disabled={quan == 0 ? true : false}
            >
              <Text mt="-15px" fontSize="5xl">
                -
              </Text>
            </button>
            <Text as="b" fontSize="xl" p={3}>
              {quantity}
            </Text>
            <button
              style={{
                color: "white",
                backgroundColor: "green",
                width: "50px",
                height: "50px",
                borderRadius: "10px",
              }}
              // onClick={() => setQuan((prev) => prev + 1)}
              onClick={handleQIncrease}
            >
              <Text mt="-6px" fontSize="4xl">
                +
              </Text>
            </button>
          </Flex>
        </Box>
        <Box onClick={handledelete}>
          <DeleteIcon boxSize={8} color="red" />
        </Box>
      </Flex>
    </div>
  );
};

export default ProductinCart;
