import styled from 'styled-components'

const StyledToggle = styled.div.attrs({
  className: 'toggle',
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  div {
    display: block;
    padding: 0.4em;
    align-text: center;
    line-height: 1;
  }

  .checkbox {
    display: none;
  }
  .switch {
    display: flex;
    cursor: pointer;
    width: 3em;
    height: 1em;
    background: grey;
    border-radius: 1em;
    position: relative;
    transition: background-color 0.2s;
    .slider {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 1em;
      height: 1em;
      border-radius: 1em;
      transition: 0.2s;
      background: #fff;
      box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
    }
  }

  .checkbox:checked + .switch .slider {
    left: 0;
    transform: translateX(calc(100% + 1em));
  }
  .checkbox: checked + .switch {
    background-color: #000000;
  }
`
export default StyledToggle
