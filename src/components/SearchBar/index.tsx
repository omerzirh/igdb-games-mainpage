import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Container, InputWrapper, SearchInput } from "./styles.elements";
export default function Index(props: any) {
  const [searchVal, setSearchVal] = useState<String | undefined>("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const handleInput = (e: any) => {
    setSearchVal(e.target.value);
  };

  const handleClearBtn = () => {
    setSearchVal("");
  };

  useEffect(() => {
    const resFilter = props.result.filter((product: any) => {
      return product.includes(searchVal);
    });
    props.onChange(resFilter);
  }, [searchVal]);

  return (
    <Container>
      <InputWrapper>
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{color:"#818694"}} />{" "}
        <SearchInput
          onChange={handleInput}
          type="text"
          name="product-search"
          placeholder="Search …"
        />
      </InputWrapper>
    </Container>
  );
}
