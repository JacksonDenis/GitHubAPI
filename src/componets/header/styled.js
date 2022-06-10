import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;

  input {
      border: 1px solid #ccc;
      border-radius: 8px ;
      width: 100%;
      height: 44px;
      padding: 8px;
      font-weight: 500px;

      &:hover {
        box-shadow: 5px 3px 1em #CCC;
        border: 1px solid #ccc;
    }
  }

  button {
      background-color: #225ed8;
      color: white;
      padding: 8px 16px;
      margin: 0 8px;
      border-radius: 8px;
      font-weight: bold;
      font-size: 16px;
      transition: ease-in-out 0.3s;
      &:hover {
          background-color: #ccc;
          color:  #225ed8;
      }
  }

`;
