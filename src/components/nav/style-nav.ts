import styled from 'styled-components';

export const StyledNavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  flex: 0 0 280px;

  ul {

    padding: 15px 5px 5px 22px;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    align-items: flex-start;
    transition: all 0.3s;

    li {
      transition: all 0.3s;
      font-weight: 400;


      a {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.1px;
        color: #363636;
        display: flex;
        column-gap: 5px;

        span {
            align-self: flex-end;
            justify-self: flex-start;
          display: block;
          font-size: 14px;
          line-height: 24px;
          letter-spacing: 0.1px;
          color: #A7A7A7;
        }
      }
    }
  }

  a.active {
    //color: red;
    font-weight: 700;
    background: linear-gradient(233.73deg, #F83600 -16.08%, #F9D423 327.37%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    transition: all 0.3s;
  }

  div {
    display: flex;
    flex-direction: column;
    row-gap: 42px;

    a {
      font-weight: 700;
    }
  }

  a {
    transition: all 0.3s;

    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.1px;

    :hover {
      // color: red;
      background: linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      // -webkit-text-fill-color: transparent;
      transition: all 0.3s;
    }
  }
`

export const StyledTitle = styled.div`
    padding: 5px 35px 0px 0;

    h2 {
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
        letter-spacing: 0.1px;
        background: linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        padding: 0px 0px 10px 0px;
        border-bottom: 1px solid #000;
    }
`
