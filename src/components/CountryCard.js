import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";
import { element } from "../styles/abstract/mixins";
import { withRouter } from "react-router-dom";

const CountryCardS = styled.div`
  ${element}
  padding:0;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s ease;
  overflow: hidden;

  &:hover {
    transform: scale(1.02);
  }
`;

const Flag = styled.div`
  width: 100%;
  border-radius: 5px 5px 0 0;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  & img {
    min-width: 100%;
    max-height: 120%;
    display: block;
    flex-shrink: 0;
  }
`;

const InfoContainer = styled.div`
  padding: 18px 28px 30px 18px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
`;

const Info = styled.p`
  font-weight: 300;
  padding: 2.5px 0;
  & span {
    font-weight: 600;
  }
`;

const CountryCard = withRouter(({ countryData, click, history }) => {
  return (
    <CountryCardS
      onClick={() => history.push(`/country/${countryData.alpha3Code}`)}
    >
      <Flag>
        <img src={countryData.flag} alt={countryData.name} />
      </Flag>
      <InfoContainer>
        <Title>{countryData.name}</Title>
        <Info>
          <span>Population: </span>
          {countryData.population.toLocaleString()}
        </Info>
        <Info>
          <span>Region: </span>
          {countryData.region}
        </Info>
        <Info>
          <span>Capital: </span>
          {countryData.capital}
        </Info>
      </InfoContainer>
    </CountryCardS>
  );
});

CountryCard.propTypes = {
  countryData: Proptypes.object.isRequired
};

export default CountryCard;
