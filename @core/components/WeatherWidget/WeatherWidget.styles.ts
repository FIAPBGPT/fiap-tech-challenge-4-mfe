import styled from "styled-components";

export const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 500px;
  height: 300px;
  border-radius: 12px;
  margin-top: 30px;
  background: url("/noaa-p9BRX1mBfe4-unsplash-compress.png") no-repeat;
  background-size: cover;
  color: #ffffff;
  text-align: left;
  box-sizing: border-box;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #gradiente {
    width: 100%;
    max-width: 100%;
    height: 100%;
    background: lin + ar-gradient(to top, #004d61, transparent 60%, #004d61);
    padding: 5%;
    border-radius: 12px;
    border: 1px solid black;
  }

  p,
  h3,
  h4 {
    text-shadow: 0.1rem 0.1rem 0.5rem #000000;
    margin: 0;
  }
  p {
    line-height: 2;
  }

  h4 {
    color: #fff700;
    font-size: 2.5rem;
  }

  h3 {
    font-size: 1.8rem;
    color: #bddce3;
    text-align: left;
    margin: 0;
  }

  h4 span {
    font-size: 1.5rem;
  }

  #tit-local-temp-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    width: 100%;
    max-height: 90%;
    /* padding: 8px; */
  }

  #info-weather-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-height: 90%;
    padding: 8px;
  }

  #description-container p {
    color: #fff700;
  }
  #local-temp-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    text-align: left;
    margin-left: 5%;
    width: 50%;
  }
  #habilitar-local-container {
    display: flex;
    align-items: center;
    max-width: 100%;
    height: 50%;
    text-align: center;
  }

  #desc-info-container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 8px;
    flex-wrap: wrap;
  }
  .espaçador-vert {
    width: 100%;
    height: 2px;
    background-color: #ffffff;
    box-shadow: 0 0 15px #00000080;
    border-radius: 12px;
    background: linear-gradient(to top, #ffff, transparent 60%, #ffff);
    margin-top: 15px;
  }

  .infos-containers {
    background-color: #00000080;
    box-shadow: 0 0 15px #00000080;
    border-radius: 12px;
    padding: 15px;
  }
  @media (max-width: 360px) {
    #local-temp-container {
      margin-top: 10px;
      margin-left: 0px;
      flex: 1;
    }
    #tit-local-temp-container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 100%;
      max-height: 90%;
      /* padding: 8px; */
    }
  }
`;
