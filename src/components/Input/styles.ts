import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 1rem;

  border-radius: 10px;

  background-color: ${(props) => props.theme.colors.gray600};

  position: absolute;

  margin-top: 2rem;

  img {
    width: 2rem;
    height: 2rem;
  }

  input {
    background-color: transparent;
    border: none;

    width: 31rem;
    height: 2rem;

    margin-left: 1rem;

    color: ${(props) => props.theme.colors.gray100};
  }

  :focus {
    outline: none;
  }
`
