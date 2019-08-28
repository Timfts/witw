import React, { useState, useEffect } from "react";
import { Container } from "../styles/base/Layout";
import { getAllCountries } from "../core/api";
import styled from "styled-components";
import Search from "../components/Search";
import Select from "../components/Select";
import CountryCard from "../components/CountryCard";
import { media } from "../styles/abstract/respond";

const FilterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
`;

const SearchContainer = styled.div`
  width: 400px;
`;

const SelectContainer = styled.div`
  width: 200px;
`;

const CountriesContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CardContainer = styled.div`
  width: calc(25% - 50px);
  margin-bottom:50px;

  ${media.desk`
    width:calc(26% - 50px);
  `}

  ${media.tabLand`
    width:calc(33% - 50px);
  `}

  ${media.tabPort`
    width:calc(50% - 25px);
  `}

  ${media.phone`
      width:100%;
    `}
`;

const Home = () => {
  const [Loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [page, setpage] = useState(1);
  const regions = ["africa", "americas", "asia", "europe", "oceania"];
  const itemsPerPage = 20;
  const [currentShowing, setcurrentShowing] = useState([]);

  useEffect(() => {
    fetchAllCoutries();
  }, []);

  async function fetchAllCoutries() {
    setLoading(true);
    const data = await getAllCountries();
    setCountries(data);
    setcurrentShowing(paginateItems(data, itemsPerPage, page));
    setLoading(false);
  }

  function onSearch(e) {
    const filter = e.target.value.toUpperCase();
    let newCountries = [];
    for (let country of countries) {
      if (country.name.toUpperCase().indexOf(filter) > -1) {
        newCountries.push(country);
      }
    }
    setcurrentShowing(newCountries);
  }

  function nextPage() {}

  function paginateItems(items, itemsPerPage, currentPage) {
    const data = [...items];
    const pageIndex = currentPage - 1;
    const pages = Math.round(items.length / itemsPerPage);
    return data.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage);
  }

  return (
    <Container>
      <FilterSection>
        <SearchContainer>
          <Search callback={onSearch} />
        </SearchContainer>
        <SelectContainer>
          <Select options={regions} />
        </SelectContainer>
      </FilterSection>
      <CountriesContainer>
        {currentShowing.length
          ? currentShowing.map(country => (
              <CardContainer>
                <CountryCard teste="1" countryData={country} />
              </CardContainer>
            ))
          : ""}
      </CountriesContainer>
      <button onClick={() => console.log(currentShowing)}>teste</button>
    </Container>
  );
};

export default Home;
