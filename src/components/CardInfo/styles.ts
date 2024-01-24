import styled from 'styled-components'

export const Container = styled.div`
  max-width: 15rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.purple800};

  border-radius: 10px;

  padding: 1rem;

  gap: 1rem;

  p {
    color: ${(props) => props.theme.colors.gray400};

    font-weight: bold;
    font-size: 1rem;
  }
`

export const Divider = styled.div`
  width: 2px;
  height: 2rem;

  background-color: ${(props) => props.theme.colors.gray400};
`
