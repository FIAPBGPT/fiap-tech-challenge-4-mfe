"use client";

import styled from "styled-components";

export default styled.section`
  background-color: #ffffff;
  padding-top: 30px;
  padding-bottom: 30px;
  border-radius: 12px;
  // min-width: 315px;
  width: 100%;

  header {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    h3 {
      font-weight: 700;
      margin: 0px;
    }

    .actions {
      margin-left: auto;

      button {
        margin-left: 12px;
      }
    }
  }

  .section-placeholder .section-item-placeholder:first-child {
    margin-bottom: 21px;
  }
`;
