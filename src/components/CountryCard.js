import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";
import { element } from "../styles/abstract/mixins";

const CountryCardS = styled.div`
  ${element}
  padding:0;
  width: 100%;
  border-radius: 5px;
  cursor:pointer;
  transition:all .5s ease;

  &:hover {
      transform: scale(1.02);
  }
`;

const Flag = styled.div`
  width: 100%;
  border-radius: 5px 5px 0 0;
  height:150px;
  display:flex;
  justify-content:center;
  align-items:center;
  overflow:hidden;

  &  img {
    width:100%;
    display:block;
    flex-shrink: 0;
  }
`;

const InfoContainer = styled.div`
  padding: 18px 28px;
`;

const Title = styled.h2`
    font-size:18px;
    margin-bottom:10px;
`;

const Info = styled.p`
  font-weight: 300;
  padding:2.5px 0;
  & span {
    font-weight: 600;
  }
`;

const CountryCard = ({ countryData, teste }) => {
  console.log(teste);

  return (
    <CountryCardS>
      <Flag>
          <img src={countryData.flag} alt={countryData.name} />
      </Flag>
      <InfoContainer>
        <Title>{countryData.name}</Title>
        <Info>
          <span>Population:</span>
          {countryData.population}
        </Info>
        <Info>
          <span>Region:</span>
          {countryData.region}
        </Info>
        <Info>
          <span>Capital:</span>
          {countryData.capital}
        </Info>
      </InfoContainer>
    </CountryCardS>
  );
};

export default CountryCard;
