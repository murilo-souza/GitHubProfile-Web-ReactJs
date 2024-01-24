import styled from 'styled-components'

export const Container = styled.main`
  max-width: 74rem;

  margin: -4rem auto 2rem auto;

  @media (max-width: 768px) {
    margin: 0rem 1rem 2rem 1rem;
  }
`

export const Header = styled.header`
  display: flex;

  align-items: flex-end;

  gap: 2.5rem;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`

export const InfoContainer = styled.section`
  display: flex;
  align-items: center;

  gap: 2rem;

  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 1rem;

    align-items: flex-start;
  }
`

export const ImageProfile = styled.img`
  width: 10rem;
  height: 10rem;

  border-radius: 10px;

  border: 10px solid ${(props) => props.theme.colors.gray600};

  background-color: ${(props) => props.theme.colors.black};

  @media (max-width: 768px) {
    margin-top: -4rem;
  }
`
export const ImageContainer = styled.div`
  width: 100%;
  height: 40vh;
  overflow: hidden;
`

export const ImageBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const PageTitle = styled.h1`
  color: ${(props) => props.theme.colors.gray100};

  font-size: 2rem;
  font-weight: 400;

  margin-top: 2rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`

export const PageDescription = styled.h4`
  color: ${(props) => props.theme.colors.gray300};

  font-size: 1.25rem;
  font-weight: 400;

  margin-bottom: 2rem;
`

export const RepoContainer = styled.section`
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  grid-gap: 2rem;

  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const FooterText = styled.a`
  text-decoration: none;

  color: ${(props) => props.theme.colors.gray300};

  font-size: 1rem;
  font-weight: 400;

  text-align: center;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.gray100};
  }
`

export const Aligner = styled.main`
  display: flex;

  flex-direction: column;

  align-items: center;

  margin-bottom: 2rem;
`
