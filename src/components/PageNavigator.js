import React from "react";
import styled from "styled-components";
import { element } from "../styles/abstract/mixins";

const BtnContainer = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
`;

const BtnNav = styled.button`
  ${element}
  width:auto;
  cursor: pointer;
  margin:5px;
`;

const PageNavigation = ({ currentPage, pageCount, changePage }) => {
  function nextPage() {
    changePage(currentPage + 1);
  }
  function prevPage() {
    changePage(currentPage - 1);
  }
  return (
    <BtnContainer>
      {(() => {
        if (currentPage === 1) {
          return <BtnNav onClick={nextPage}>Next</BtnNav>;
        } else if (currentPage === pageCount) {
          return <BtnNav onClick={prevPage}>Prev</BtnNav>;
        } else {
          return (
            <>
              <BtnNav onClick={prevPage}>Prev</BtnNav>
              <BtnNav onClick={nextPage}>Next</BtnNav>
            </>
          );
        }
      })()}
    </BtnContainer>
  );
};

export default PageNavigation;
