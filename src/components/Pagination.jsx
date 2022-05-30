import React, { useState,useEffect } from "react";
import {Button,ButtonGroup,Select} from "@chakra-ui/react"
import axios from "axios"

export const Pagination = ({setdata1}) => {
  // TODO: Remove below const and instead import them from chakra
  const [page,setPage]=useState(1)
  const [limit ,setlimit]=useState(2)
  useEffect(() => {
    const getto=async ()=>{
      let r=await axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`)
      setdata1(r.data)
    }
    getto()
  }, [page,limit])
  
  

  return (
    
    <ButtonGroup>
      <Button data-cy="pagination-first-button">First</Button>
      <Button data-cy="pagination-previous-button">-</Button>
      <Select data-cy="pagination-limit-select" value={page}  onChange={(e)=>{setPage(e.target.value)}}>
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">5</option>
        <option data-cy="pagination-limit-9">6</option>
      </Select>
      <Button data-cy="pagination-next-button">next</Button>
      <Button data-cy="pagination-last-button">last</Button>
    </ButtonGroup>
    
  );
};

