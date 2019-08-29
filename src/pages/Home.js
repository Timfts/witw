import React, { useState, useEffect } from "react";
import { Container } from "../styles/base/Layout";
import { getAllCountries } from "../core/api";
import styled from "styled-components";
import Search from "../components/Search";
import Select from "../components/Select";
import CountryCard from "../components/CountryCard";
import { media } from "../styles/abstract/respond";
import PageNavigation from "../components/PageNavigator";
import Loading from '../components/Loading';

const FilterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
  ${media.tabPort`
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
  `}
`;

const SearchContainer = styled.div`
  width: 400px;

  ${media.tabPort`
    width:100%;
    margin-bottom:45px;
  `}
`;

const SelectContainer = styled.div`
  width: 200px;
`;

const CountriesContainer = styled.section`
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap:80px;
  margin:20px 0;
  width:100%;
  min-height:80vh;
  ${media.desk`
    grid-gap:40px;
  `}
  ${media.tabLand`
      grid-gap:30px;
      grid-template-columns:repeat(3, 1fr);
    `}
  ${media.tabPort`
      grid-template-columns:repeat(2, 1fr);
    `}
  ${media.phone`
      grid-template-columns:1fr;
    `}
`;

const CardContainer = styled.div`
  min-width: 0;
  min-height: 0;

  ${media.phone`
    padding-left:10%;
    padding-right:10%;
  `}
`;

const Home = () => {
  const initialCountries = {
    pages: [],
    pagesSize: 1
  };
  const [loading, setLoading] = useState(false);
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const itemsPerPage = 12;
  const [allCountries, setAllCountries] = useState([]);
  const [showingCountries, setShowingCountries] = useState(initialCountries);
  const [showingPage, setshowingPage] = useState(1);

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
    } else {
      newCountries = allCountries;
    }

    const paginatedData = paginateItems(newCountries);
    if (!newCountries.length) {
      setShowingCountries(initialCountries);
    } else {
      setShowingCountries(paginatedData);
    }

    setshowingPage(1);
  }

  function onFilter(region) {
    const filtered = allCountries.filter(country => country.region === region);
    const paginated = paginateItems(filtered);
    setShowingCountries(paginated);
    setshowingPage(1);
  }

  function paginateItems(data) {
    let pagesSize = Math.round(data.length / itemsPerPage);
    const pages = [];
    if (data.length < itemsPerPage) {
      pagesSize = 1;
      pages.push([...data]);
    } else {
      for (let c = 0; c < pagesSize; c++) {
        const pageItems = data.slice(c * itemsPerPage, (c + 1) * itemsPerPage);
        pages.push(pageItems);
      }
    }
    return { pages, pagesSize };
  }

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : ''}
      <FilterSection>
        <SearchContainer>
          <Search callback={onSearch} />
        </SearchContainer>
        <SelectContainer>
          <Select options={regions} callback={onFilter} />
        </SelectContainer>
      </FilterSection>
      <CountriesContainer>
        {(() => {
          if (showingCountries.pages.length) {
            return showingCountries.pages[showingPage - 1].map((country, i) => (
              <CardContainer key={`card-${i}`}>
                <CountryCard countryData={country} />
              </CardContainer>
            ));
          }
        })()}
      </CountriesContainer>
      {showingCountries.pagesSize > 1 ? (
        <PageNavigation
          changePage={setshowingPage}
          currentPage={showingPage}
          pageCount={showingCountries.pagesSize}
        />
      ) : (
        ""
      )}
    </Container>
  );
};

export default Home;
