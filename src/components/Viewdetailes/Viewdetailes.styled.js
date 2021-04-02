import styled from 'styled-components'
import { colors } from '../../styles/colors'

const { lightColor, darkColor } = colors

const StyledViewdetailes = styled.div.attrs({
  className: 'viewdetailes',
})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  flex: 1;

  .iframeTitle {
    padding: 10px 30px;
    display: flex;
    font-size: 1.3em;
    -webkit-box-pack: justify;
    justify-content: space-between;
    text-align:left;
    color: ${({ toggle }) => (toggle ? lightColor : darkColor)};
  }
  }
  .iframeDescription {
    padding: 0px 30px;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    text-align:left;
    color: ${({ toggle }) => (toggle ? lightColor : darkColor)};
}
  }
`
export default StyledViewdetailes
