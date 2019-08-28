import React, { useState, useEffect } from "react";
import { Container } from "../styles/base/Layout";
import { getAllCountries } from "../core/api";
import styled from "styled-components";
import Search from "../components/Search";
import Select from "../components/Select";
import CountryCard from "../components/CountryCard";

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
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`;

const CardContainer = styled.div`
  width: calc(25% - 50px);
  margin-bottom:50px;
`;

const Home = () => {
  const [Loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [page, setpage] = useState(1);
  const regions = ["africa", "americas", "asia", "europe", "oceania"];
  const itemsPerPage = 20;


  useEffect(() => {
    fetchAllCoutries();
  }, []);

  async function fetchAllCoutries() {
    setLoading(true);
    const data = await getAllCountries();
    setCountries([...data]);
    setLoading(false);
  }


  return (
    <Container>
      <FilterSection>
        <SearchContainer>
          <Search />
        </SearchContainer>
        <SelectContainer>
          <Select options={regions} />
        </SelectContainer>
      </FilterSection>
      <CountriesContainer>
        {countries.length
          ? countries.map(country => (
              <CardContainer>
                <CountryCard countryData={country} />
              </CardContainer>
            ))
          : ""}
      </CountriesContainer>
      <button onClick={() => console.log(countries)}>teste</button>
    </Container>
  );
};

export default Home;
