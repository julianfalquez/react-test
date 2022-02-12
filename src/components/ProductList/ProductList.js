import React, { useEffect, useState } from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { sendItems } from "../../store/reducers/itemSlicer";
import "./ProductList.css";
import Categories from "../Categories/Categories";
import { useDispatch, useSelector } from "react-redux";

import {groupByCategory} from "../../services/itemsService"

function ProductList() {
  const dispatch = useDispatch();
  const [itemsCat, setItemsCat] = useState([]);
  const itemsStore = useSelector((state) => state.items.items);
  useEffect(() => {
    dispatch(sendItems());
  }, [dispatch]);

  useEffect(() => {
    const groupedItems=groupByCategory(itemsStore);
    const itemsCat = Object.keys(groupedItems).map((key, index) => {
      return (
        <Categories key={index} catTitle={key} items={groupedItems[key]} />
      );
    });
    setItemsCat(itemsCat);
  }, [itemsStore]);
  return (
    <Container maxWidth="sm">
      <Box>
        <div>
          <div className="label_container">
            <p>Name</p>
            <p>Price</p>
          </div>
          <FormControl component="fieldset" sx={{ width: "100%" }}>
            <div>{itemsCat}</div>
          </FormControl>
        </div>
      </Box>
    </Container>
  );
}
export default ProductList;
