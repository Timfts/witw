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
  const initialCountries = {
    pages: [],
    pagesSize: 0
  };
  const [Loading, setLoading] = useState(false);
  const [page, setpage] = useState(1);
  const regions = ["africa", "americas", "asia", "europe", "oceania"];
  const itemsPerPage = 10;
  const [allCountries, setAllCountries] = useState([]);
  const [showingCountries, setShowingCountries] = useState(initialCountries);
  const [showingPage, setshowingPage] = useState(0);

  useEffect(() => {
    fetchAllCoutries();
  }, []);


  async function fetchAllCoutries() {
    setLoading(true);
    const data = await getAllCountries();
    const paginatedData = paginateItems(data);
    setShowingCountries(paginatedData);
    setAllCountries(data);
    setLoading(false);
    console.log(data);
  }

  function onSearch(e) {
    const filter = e.target.value.toUpperCase();
    let newCountries = [];
    if (filter) {
      for (let country of allCountries) {
        if (country.name.toUpperCase().indexOf(filter) > -1) {
          newCountries.push(country);
        }
      }
    }else {
      newCountries = allCountries;
    }
    
    const paginatedData = paginateItems(newCountries);
    console.log(paginatedData);
    if(!newCountries.length){
      setShowingCountries(initialCountries);
    }else {
      setShowingCountries(paginatedData);
    }

/*     const filter = e.target.value.toUpperCase();
    let newCountries = [];
    if (filter) {
      for (let country of countries) {
        if (country.name.toUpperCase().indexOf(filter) > -1) {
          newCountries.push(country);
        }
      }
    } else {
      newCountries = paginateItems(countries, itemsPerPage, page);
    }
    setcurrentShowing(newCountries); */
  }


  function paginateItems(data) {
    const pagesSize = Math.round(data.length / itemsPerPage);
    const pages = [];
    for (let c = 0; c < pagesSize; c++) {
      const pageItems = data.slice(c * itemsPerPage, (c + 1) * itemsPerPage);
      pages.push(pageItems);
    }

    return { pages, pagesSize };
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
        {(() => {
          if (showingCountries.pages.length) {
            return showingCountries.pages[showingPage].map(country => (
              <CardContainer>
                <CountryCard teste="1" countryData={country} />
              </CardContainer>
            ));
          }
        })()}
      </CountriesContainer>
      <button onClick={() => setpage(page + 1)}>teste</button>
    </Container>
  );
};

export default Home;
