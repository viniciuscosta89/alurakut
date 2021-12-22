import styled from 'styled-components';

const ProfileArea = styled.section`
  $profile-area: &;

  border-top: 1px solid #ecf2fa;
  display: none;

  @media (min-width: 860px) {
    display: flex;
    flex-direction: column;
  }

  .profile-area {
    &__img {
      border-radius: 8px;
      margin-bottom: 12px;
    }

    &__person-data {
      border-top: 1px solid #ecf2fa;
      border-bottom: 1px solid #ecf2fa;
      display: flex;
      flex-direction: column;
      padding: 8px 0;
    }

    &__name {
      color: var(--colorPrimary);
      font-weight: bold;
      font-size: 0.875rem;
    }

    &__info {
      color: #999999;
      display: flex;
      flex-direction: column;
      font-size: 0.75rem;
      line-height: 1rem;
    }

    &__list {
      color: var(--colorPrimary);
      display: flex;
      flex-direction: column;
      font-size: 0.75rem;
      list-style: none;
      padding: 14px 0;

      &:not(:last-of-type) {
        border-bottom: 1px solid #ecf2fa;
      }
    }

    &__list-item {
      display: flex;

      &:not(:last-of-type) {
        margin-bottom: 14px;
      }
    }

    &__subtitle {
      color: #999999;
      font-size: 13px;
      margin: 14px 0 0;
    }
  }

`

export default ProfileArea;
