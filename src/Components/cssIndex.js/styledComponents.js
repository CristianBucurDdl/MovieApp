import styled from "styled-components";

export const MovieContainer = styled.div`
  background-color: black;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
export const ButtonContainer = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const MovieItem = styled.div`


  color: white;
  border: solid;
  border-color: white;
  width: 11rem;
  height: 15rem;
  padding: 1rem;
  p {
    1rem;
  }
  img {
    max-height: 79%;
width: auto;
height: auto;
object-fit: cover;
  }
  div {
    height: auto;
  }
`;
export const FormField = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .search {
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;

    span {
      vertical-align: middle;
      margin-bottom: 0.5rem;
    }
    input {
      color: #000;
      box-sizing: border-box;
      height: 2rem;
      width: 12rem;
      margin-bottom: 8px;
      font-size: 1rem;
      :hover {
        background-color: #c2c2c2;
      }
    }
  }

  input,
  select {
    color: #000;
    box-sizing: border-box;
    height: 2rem;
    width: 12rem;
    margin-bottom: 8px;
    font-size: 1rem;
    :hover {
      background-color: #c2c2c2;
    }
  }
  .autocomplete-container {
    width: 100%;
    input {
      width: calc(100% - 4rem);
    }
  }
  .autocomplete-suggestions-list {
    max-height: 10rem;
    width: calc(100% - 2rem);
  }
`;
