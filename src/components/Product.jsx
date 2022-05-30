import React from "react";
import {Text,Image,Box,Stack,Heading,Tag,TagLabel} from "@chakra-ui/react"

const Product = ({tood}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div  />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" src={tood.imageSrc} />
      <Text data-cy="product-category">{tood.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{tood.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{tood.title}</Heading>
      <Box data-cy="product-price">{tood.price}</Box>
    </Stack>
  );
};

export default Product;
