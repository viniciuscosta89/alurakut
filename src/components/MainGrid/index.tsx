import styled from 'styled-components';

const MainGrid = styled.main`
  display: grid;
  gap: 10px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 10px;
  width: 100%;

  @media (min-width: 860px) {
    grid-template-columns: 160px 1fr 312px;
  }
`

export default MainGrid;
