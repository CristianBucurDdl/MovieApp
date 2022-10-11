import styled from "styled-components";

export const MovieContainer = styled.div`
  background-color: black;
  padding-top: 1rem;
  padding-bottom: 1rem;

  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
export const ButtonContainer = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  gap: 1rem;
  display: flex;
  justify-content: center;
  button {
    background: linear-gradient(to right, #263447, #6433e0);
    background-color: #263447;
    color: #fff;
    font-family: Trebuchet MS;
    font-size: 16px;
    font-weight: 800;
    font-style: normal;
    text-decoration: none;
    padding: 14px 15px;
    border: 0px solid #000;
    border-radius: 10px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
  }
  button span {
    margin-bottom: 14px;
    display: block;
    width: 42px;
    height: 42px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiPg0KICA8ZGVmcz4NCiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+DQogICAgICA8cmVjdCB4PSItNCIgeT0iLTI1IiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0ibm9uZSIvPg0KICAgIDwvY2xpcFBhdGg+DQogICAgPGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgtMiI+DQogICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzEiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDEiIHdpZHRoPSIxNDIiIGhlaWdodD0iMTAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMC4zMzMgOS4xMjgpIiBmaWxsPSJub25lIi8+DQogICAgPC9jbGlwUGF0aD4NCiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjAuOTg2IiB5MT0iMC41MDciIHgyPSItMC4wMjgiIHkyPSIwLjUyMiIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+DQogICAgICA8c3RvcCBvZmZzZXQ9IjAuNTMxIiBzdG9wLWNvbG9yPSIjZDlkOWQ5Ii8+DQogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9ImdyYXkiLz4NCiAgICA8L2xpbmVhckdyYWRpZW50Pg0KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50LTIiIHgxPSIwLjk4NiIgeTE9IjAuNDkzIiB4Mj0iLTAuMDI4IiB5Mj0iMC40NzgiIHhsaW5rOmhyZWY9IiNsaW5lYXItZ3JhZGllbnQiLz4NCiAgPC9kZWZzPg0KICA8ZyBpZD0iU2Nyb2xsX0dyb3VwXzEiIGRhdGEtbmFtZT0iU2Nyb2xsIEdyb3VwIDEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQgMjUpIiBjbGlwLXBhdGg9InVybCgjY2xpcC1wYXRoKSIgc3R5bGU9Imlzb2xhdGlvbjogaXNvbGF0ZSI+DQogICAgPGcgaWQ9ImxvZ28tdyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwLjMzMyAtOS4xMjgpIiBjbGlwLXBhdGg9InVybCgjY2xpcC1wYXRoLTIpIj4NCiAgICAgIDxnIGlkPSJHcm91cF80MCIgZGF0YS1uYW1lPSJHcm91cCA0MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNC45NDEgNC40ODkpIj4NCiAgICAgICAgPGcgaWQ9Ikdyb3VwXzM4IiBkYXRhLW5hbWU9Ikdyb3VwIDM4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuMDAxKSI+DQogICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZV82MyIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgNjMiIHdpZHRoPSI3NS44ODciIGhlaWdodD0iMjUuMjk2IiByeD0iMTIuNjQ4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOC4wMzMgMzcuMjI1KSByb3RhdGUoNDUpIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudCkiLz4NCiAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzY0IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSA2NCIgd2lkdGg9Ijc1Ljg4NyIgaGVpZ2h0PSIyNS4yOTYiIHJ4PSIxMi42NDgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgNTMuNjYpIHJvdGF0ZSgtNDUpIiBmaWxsPSIjZmZmIi8+DQogICAgICAgICAgPGNpcmNsZSBpZD0iRWxsaXBzZV8xIiBkYXRhLW5hbWU9IkVsbGlwc2UgMSIgY3g9IjcuODQyIiBjeT0iNy44NDIiIHI9IjcuODQyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMS4xMyA0NS4wODEpIiBmaWxsPSIjZDlkYmZmIi8+DQogICAgICAgIDwvZz4NCiAgICAgICAgPGcgaWQ9Ikdyb3VwXzM5IiBkYXRhLW5hbWU9Ikdyb3VwIDM5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4MC4wNzkgMCkiPg0KICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfNjMtMiIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgNjMiIHdpZHRoPSI3NS44ODciIGhlaWdodD0iMjUuMjk2IiByeD0iMTIuNjQ4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3MS41NDcgNTUuMTEyKSByb3RhdGUoMTM1KSIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQtMikiLz4NCiAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzY0LTIiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDY0IiB3aWR0aD0iNzUuODg3IiBoZWlnaHQ9IjI1LjI5NiIgcng9IjEyLjY0OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTMuODA3IDcxLjU0Nykgcm90YXRlKC0xMzUpIiBmaWxsPSIjZmZmIi8+DQogICAgICAgICAgPGNpcmNsZSBpZD0iRWxsaXBzZV8xLTIiIGRhdGEtbmFtZT0iRWxsaXBzZSAxIiBjeD0iNy44NDIiIGN5PSI3Ljg0MiIgcj0iNy44NDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ0Ljg4IDQ1LjA4MikiIGZpbGw9IiNkOWRiZmYiLz4NCiAgICAgICAgPC9nPg0KICAgICAgPC9nPg0KICAgIDwvZz4NCiAgPC9nPg0KPC9zdmc+DQo=);
    background-repeat: no-repeat;
    background-size: contain;
    transform: rotate(-45deg);
  }
  button:hover {
    background: linear-gradient(to right, #585f69, #7d5ee3);
    background-color: #585f69;
  }
  button:active {
    transform: scale(0.95);
 
`;

export const MovieItem = styled.div`
  position: relative;
  color: white;
  border: solid;
  border-color: white;
  width: 11rem;
  height: 17rem;
  padding: 1rem;
  margin-bottom: 1rem;
  p {
    word-wrap: break-word;
    font-size: 0.7rem;
  }
  h3 {
    word-wrap: break-word;
    font-size: 1rem;
  }
  img {
    position: relative;
    width: 100%;
    height: 100%;
  }
  & .posterContainer {
    width: 95%;
    height: 75%;
  }
  div {
    height: auto;
  }
  & .title {
    max-height: 2rem;
  }
  button {
    position: absolute;
    z-index: 9;
    float: left;
    background: transparent;
    border: none;
    margin: -18px;
    
    margin-left: -109px;
}
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
