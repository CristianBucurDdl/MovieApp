import styled from "styled-components";
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
