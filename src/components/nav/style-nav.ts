import styled from 'styled-components';

export const StyledNavMenu = styled.nav`
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    flex: 0 0 280px;
    align-self: start;
    position: sticky;
    top: 20px;
    margin-bottom: 62px;

    @media (max-width: 911px) {
        flex: 0 0 250px;
    }
    @media (max-width: 840px) {
        display: none;
    }

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
            display: inline-flex;

            a {
                display: inline-block;
                margin-right: 5px;
                font-size: 16px;
                line-height: 24px;
                letter-spacing: 0.1px;
                color: #363636;

                span {
                    padding-left: 5px;
                    font-size: 14px;
                    line-height: 24px;
                    letter-spacing: 0.1px;
                    color: #A7A7A7;
                }

                @media (max-width: 911px) {
                    font-size: 14px;
                }
            }
        }
    }

    a.active {
        font-weight: 700;
        background: linear-gradient(233.73deg, #F83600 -16.08%, #F9D423 327.37%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
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
            background: linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            transition: all 0.3s;
        }
    }
`

