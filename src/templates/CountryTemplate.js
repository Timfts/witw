import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "../styles/base/Layout";
import { getCountryByCode } from "../core/api";
import { withRouter } from "react-router-dom";
import { Button } from "../components/Button";
import { media } from "../styles/abstract/respond";
import Loading from '../components/Loading';

const CountryContainer = styled(Container)`
  padding-bottom: 40px;
`;

const BackButtonContainer = styled.div`
  margin: 8vh 0;

  ${media.tabPort`
    margin:6vh 0 9vh 0;
  `}
`;

const BackButton = styled(Button)``;

const CountryInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${media.tabPort`
    flex-direction:column;
  `}
`;

const CountryFlag = styled.div`
  width: 40%;

  & img {
    width: 100%;
  }

  ${media.tabPort`
    width:100%;
  `}
`;

const CountryInfo = styled.div`
  width: 50%;
  margin-top: 20px;

  & h1 {
    font-weight: 800;
    font-size: 25px;
    margin-bottom: 25px;
  }

  ${media.tabPort`
    width:100%;
  `}
`;

const InfoBlocks = styled.div`
  display: flex;
  margin-bottom: 30px;

  ${media.tabPort`
    flex-direction:column;
  `}
`;

const InfoBlock = styled.div`
  flex: 50%;

  ${media.tabPort`
    margin-bottom:20px;
  `}
`;

const Borders = styled.div`
  & span {
    font-weight: 600;
  }
`;

const Entry = styled.p`
  margin: 8.5px 0;
  & span {
    font-weight: 600;
  }
`;

const BorderButton = styled(Button)`
  font-size: 14px;
  display: inline-block;
  margin: 5px;
  padding: 5px 25px;
`;

const InfoEntry = ({ title, data }) => {
  return (
    <Entry>
      <span>{title}: </span>
      {data.toLocaleString()}
    </Entry>
  );
};

const CountryPage = withRouter(({ history, match }) => {
  const [countryData, setCountryData] = useState(null);
  const code = match.params.code;
  const [loading, setLoading] = useState(false);
  const [borders, setBorders] = useState([]);


  useEffect(() => {
    fetchCountryData(code);
  }, []);

  async function fetchCountryData(code) {
    setLoading(true);
    const data = await getCountryByCode(code);
    const borders = await Promise.all(
      data.borders.map(border => getCountryByCode(border))
    );
    setCountryData(data);
    setBorders(borders);
    setLoading(false);
  }

  return (
    <CountryContainer>
      { loading ? (<Loading />) : '' }
      <BackButtonContainer>
        <BackButton onClick={() => history.push("/")}>Back</BackButton>
      </BackButtonContainer>
      {loading ? <p>loading</p> : ""}
      {countryData ? (
        <>
          <CountryInfoContainer>
            <CountryFlag>
              <img src={countryData.flag} alt={`${countryData.name} flag`} />
            </CountryFlag>
            <CountryInfo>
              <h1>{countryData.name}</h1>
              <InfoBlocks>
                <InfoBlock>
                  <InfoEntry
                    title="Native Name"
                    data={countryData.nativeName}
                  />
                  <InfoEntry title="Population" data={countryData.population} />
                  <InfoEntry title="Region" data={countryData.region} />
                  <InfoEntry title="Sub Region" data={countryData.subregion} />
                  <InfoEntry title="Capital" data={countryData.capital} />
                </InfoBlock>
                <InfoBlock>
                  <InfoEntry
                    title="Top Level Domain"
                    data={countryData.capital}
                  />
                  <InfoEntry
                    title="Currencies"
                    data={(() =>
                      countryData.currencies
                        .map(curr => curr.name)
                        .toString())()}
                  />
                  <InfoEntry
                    title="Languages"
                    data={(() =>
                      countryData.languages
                        .map(language => language.name)
                        .toString())()}
                  />
                </InfoBlock>
              </InfoBlocks>
              {borders.length ? (
                <Borders>
                  <span>Border Countries: </span>
                  {borders.map(country => (
                    <BorderButton
                      onClick={() => {
                        history.push(`/country/${country.alpha3Code}`);
                        fetchCountryData(country.alpha3Code);
                      }}
                    >
                      {country.name}
                    </BorderButton>
                  ))}
                </Borders>
              ) : (
                ""
              )}
            </CountryInfo>
          </CountryInfoContainer>
        </>
      ) : (
        ""
      )}
    </CountryContainer>
  );
});

export default CountryPage;
