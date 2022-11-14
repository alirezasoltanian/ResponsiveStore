import React, { useEffect, useState } from "react";

// Components
import Product from "./shared/Product";
import SkeletProduct from "./shared/skeletProduct";


// Redux
import { fetchProducts } from "./redux/products/productsAction";
import { useDispatch, useSelector } from "react-redux";

// Style
import styles from "./store.module.css";
//script
import {sortByIdThenName } from "../script/sort";
// img
import img from "../images/Spinner-1.1s-200px (1).gif";
import Loading from "./shared/Loading";
import Filter from "./filter/Filter";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
} from "@mui/material";
function valuetext(value) {
  return `${value}$`;
}
const Store = () => {
  const [search , setSearch] = useState('')
  const [selectCategory, setSelectCategory] = useState("");
  const [value, setValue] = useState([0, 1000]);
  const [checkedPrice, setCheckedPrice] = useState(false);
  const [checkedCount, setCheckedCount] = useState(false);
  const [productsFilter, setProductsFilter] = useState({});
  const [filterClose, setFilterClose] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState);
  const SortHandler = () => {
    setProductsFilter(
      productsState.products.filter(
        (product) =>
          product.category
            .toLowerCase()
            .includes(selectCategory.toLowerCase()) &&
          value[0] < product.price &&
          product.price < value[1]
      )
    );
    // if (checkedPrice) {
    //   books.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    // }
    FilterHandler();
  };

  const searchHandler = event => {
    setSearch(event.target.value)
 }
 const searchCoin = productsState.products.filter(coins => coins.title.toLowerCase().includes(search.toLowerCase()))
  
  useEffect(() => {
    setProductsFilter(searchCoin)
  }, [search]);
  const FilterHandler = () => {
    setFilterClose(!filterClose);
    console.log(filterClose);
  };
  

  // useEffect(() =>{
  //   if(!productsState.products.length) dispatch(fetchProducts())
  // }, [])
  useEffect(() => {
    if (!productsState.products.length) {
      dispatch(fetchProducts());
    } 
    setProductsFilter(productsState.products)

  }, []);

  return (
    <div className={styles.containerForFilter}>
      <div
        style={{
          position: "absolute",
          width: "100%",
        }}
      >
        <Filter
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
          searchHandler={searchHandler}
          
          search={search}
          setFilterClose={setFilterClose}
          filterClose={filterClose}
          FilterHandler={FilterHandler}
          setSearch={setSearch}
        />
      </div>
      <div className={styles.container}>
      {
                productsState.loading ? 
                // <div style={{justifyContent: 'center' , alignItems: "center" , width : '100%'}}>
                // <img  src={img} alt="logo" />
                // </div>
                  [1,2,3].map( n => 
                      <SkeletProduct key={n} />
                  )
                :
                productsState.error ?
                    <p>Somethin went wrong</p> :
                    productsFilter.length ? 
                    productsFilter.map(product => <Product
                            key={product.id}
                            productData={product}
                        />) :
                        productsState.products.map(product => <Product
                          key={product.id}
                          productData={product}
                      />)
            }
        {filterClose && (
          <div
            style={{
              alignItems: "center",
              justifyItems: "center",
              padding: "5%",
            }}
            className={styles.boxFilter}
          >
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Sort
              </FormLabel>
              <RadioGroup
                row
                value={selectCategory}
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={(e) => setSelectCategory(e.target.value)}
              >
                <FormControlLabel value="" control={<Radio />} label="All" />
                <FormControlLabel
                  value="Men's Clothing"
                  control={<Radio />}
                  label="Men's Clothing"
                />
                <FormControlLabel
                  value="Wome'n sClothing"
                  control={<Radio />}
                  label="Wome'n sClothing"
                />
                <FormControlLabel
                  value="Electronics"
                  control={<Radio />}
                  label="Electronics"
                />
                <FormControlLabel
                  value="Jewelery"
                  control={<Radio />}
                  label="Jewelery"
                />

                <FormControlLabel
                  value="disabled"
                  disabled
                  control={<Radio />}
                  label="other"
                />
              </RadioGroup>
            </FormControl>
            <Box sx={{ marginTop: "10px", width: 300 }}>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Price$
              </FormLabel>
              <div>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  min={0}
                  max={1000}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
              </div>
            </Box>
            <div style={{ marginTop: "10px" }}>
              <p>count</p>
              <input
                type="checkbox"
                checked={checkedCount}
                onChange={() => setCheckedCount(!checkedCount)}
              />
              <p>price</p>
              <input
                type="checkbox"
                checked={checkedPrice}
                onChange={() => setCheckedPrice(!checkedPrice)}
              />
            </div>
            <Box>
              <Button
                style={{ marginTop: "20px" }}
                variant="contained"
                onClick={SortHandler}
              >
                OK
              </Button>
            </Box>
          </div>
        )}
      </div>
    </div>
  );
};

export default Store;
