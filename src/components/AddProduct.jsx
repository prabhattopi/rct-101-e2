import React,{useState,useEffect} from "react";
import axios from "axios"
import { Button,useDisclosure,Select,Radio,RadioGroup,Input } from "@chakra-ui/react"
import {
  Modal,
  // ModalOverlay,
  // ModalContent,
  // ModalHeader,
  // ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
const AddProduct = ({data1,setdata1}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;
 
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [data,setdata]=useState([])
  const [form, setform] = useState({
    "title":"",
    "category":"",
    "gender":"",
    "imageSrc":"",
     "price":""


  })


const sor={
  display:"block",
  margin:"auto",
  padding:"20px",
  marginTop:"10px",
  borderRadius:"5px",
  width:"100px"


}
const sor1={
  
  display:"block",
  margin:"auto",
  padding:"20px",
  marginTop:"10px",
  borderRadius:"5px",
 

}

// useEffect(() => {
 
// }, [third])


 const handlechange=(e)=>{
  let {type,value,name}=e.target
  setform({
    ...form,
    [name]:value
  })

  
 }

 
//  useEffect(() => {
//   console.log(form)
//  }, [])
 const handleclick=async()=>{

  await axios.post('http://localhost:8080/products',{
    "title":form.title,
    "category":form.category,
    "gender":form.gender,
    "imageSrc":form.imageSrc,
     "price":form.price
    
  })
  let r=await axios.get(`http://localhost:8080/products`)
  setdata(r.data)
  
  }




  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen} style={sor}  colorScheme='blue'>Add Products</Button>
      <Modal isOpen={isOpen} onClose={onClose}  >
        <ModalBody pb={6} padding="20px" style={sor1} width="500px" height="500px" z-index="100000000" background="white"position="absolute" top="40px" left="50%">
        <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          <Input data-cy="add-product-title" width="200px" placeholder="Enter your titel......" name="title" value={form.title} onChange={handlechange}/>
          <Select data-cy="add-product-category" name="category" value={form.category} onChange={handlechange}>
            <option data-cy="add-product-category-shirt" value="shirts">shirt</option>
            <option data-cy="add-product-category-pant" value="pants">pandts</option>
            <option data-cy="add-product-category-jeans"value="jeans">jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender" name="gender" onChange={handlechange} value={form.gender}>
            <Radio data-cy="add-product-gender-male">Mali</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" placeholder="Enter your price" name="price" onChange={handlechange} value={form.price}/>
          <Button data-cy="add-product-submit-button" color="blue" onClick={handleclick}>Submit</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
