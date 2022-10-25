import styled from '@emotion/styled'

export const ThreadContainer = styled.div`
  border-radius: 4px;
  padding: 16px;
  background: var(--blue-500);
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;

  > a {
    font-size: 0.9rem;
    font-weight: 400;
    margin-bottom: 12px;
    margin-right: auto;
    display: inline-block;
    transition: var(--trans-200);

    &:hover {
      color: var(--light-blue-100);
    }
  }
`

export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Left = styled.div`
  display: flex;
  align-items: center;
`

export const Avatar = styled.a`
  width: 28px;
  height: 28px;
  border-radius: 2px;
  overflow: hidden;

  img {
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100%;
  }
`

export const Name = styled.div`
  padding-left: 8px;
  display: flex;
  gap: 4px;

  a {
    font-size: 0.8rem;
    transition: var(--trans-200);

    &:last-of-type:hover {
      color: var(--light-blue-100);
    }
  }
`

export const Right = styled.div`
  display: flex;
  align-items: center;

  a {
    border-radius: 12px;
    background: var(--light-blue-100);
    color: #fff;
    padding: 4px 8px;
    font-size: 0.6rem;
    transition: var(--trans-200);
    line-height: 1.1;

    &:hover {
      color: #000;
    }
  }
`
