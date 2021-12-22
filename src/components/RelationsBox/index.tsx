import styled from 'styled-components';
import Box from '../Box';

const RelationsBox = styled(Box)`
display: flex;
flex-direction: column;
padding: 1rem 1.25rem;

  /* @media (min-width: 860px) {
  } */

  .relations-box {
    &__img {
      background-color: var(--colorPrimary);
      border-radius: var(--commonRadius);
    }

    &__header {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1.25rem;
    }

    &__title {
      color: var(--textPrimaryColor);
      font-size: 1rem;
      font-weight: bold;
    }

    &__counter {
      color: var(--colorPrimary);
      font-size: 0.875rem;
      font-weight: bold;
    }

    &__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(84px, 1fr));
      gap: 10px;
    }

    &__item {
      border-radius: var(--commonRadius);
      position: relative;
    }

    &__name {
      background: rgb(0,0,0);
      background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%);
      border-radius: 0 0 var(--commonRadius) var(--commonRadius);
      color: var(--textSecondaryColor);
      font-size: 0.625rem;
      font-weight: 500;
      position: absolute;
      left: 0;
      bottom: 0;
      padding: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
    }

    &__link {
      color: var(--colorPrimary);
      font-size: 0.875rem;
      font-weight: bold;
      margin-top: auto;
      text-decoration: none;
    }
  }

`

export default RelationsBox;
