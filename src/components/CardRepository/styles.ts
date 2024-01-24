import styled from 'styled-components'

export const Container = styled.div`
  padding: 1rem;

  background: linear-gradient(90deg, #111729, #1d1b48);

  border-radius: 10px;
`

export const RepoTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 400;

  color: ${(props) => props.theme.colors.gray100};

  margin-bottom: 1rem;
`

export const RepoDescription = styled.h4`
  font-size: 1rem;
  font-weight: 400;

  color: ${(props) => props.theme.colors.gray300};

  margin-bottom: 1.25rem;

  max-width: 32rem;
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;

  gap: 1rem;
`

export const FooterContent = styled.section`
  display: flex;
  align-items: center;
  gap: 0.15rem;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }

  span {
    color: ${(props) => props.theme.colors.gray300};
    font-size: 1rem;
  }

  p {
    color: ${(props) => props.theme.colors.gray300};
    font-size: 0.75rem;

    margin-left: 1rem;
  }
`
