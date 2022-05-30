import React,{useState,useEffect} from "react";
import AddProduct from "./AddProduct"
import {Flex} from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import {Pagination} from "./Pagination";
import axios from "axios"
import Product from "./Product";
const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />; 
  const [data, setdata] = useState([])
 
   useEffect(() => {
     const allo=async()=>{
      let r= await axios.get(`http://localhost:8080/products`)
      setdata(r.data)
      console.log(r)
     }
   
   
    allo()
   }, [])
   
 
  
    

  

  return (
    <Flex direction="column">
       <AddProduct data1={data} setdata1={setdata}/>
      <Grid templateColumns='repeat(3, 1fr)' gap={4}>
       {data.map(e=>{
         return (
         <Product tood={e}/>
         )
       })}
      </Grid>
      <Pagination data1={data} setdata1={setdata}/>
    </Flex>
  );
};

export default Products;
