import styled from 'styled-components';
import MaterialAppBar from '@material-ui/core/AppBar';
import MaterialToolbar from '@material-ui/core/Toolbar';
import MaterialTextField from '@material-ui/core/TextField';
import MaterialSwitch from '@material-ui/core/Switch';

const AppBar = styled(MaterialAppBar)`
  width: 100%;
`;

const Toolbar = styled(MaterialToolbar)`
  background-color: var(--text-color);
  color: var(--sub-color);
`;

const Switch = styled(MaterialSwitch)`
  .MuiSwitch-track {
    background-color: var(--sub-color);
  }

  .MuiSwitch-colorSecondary.Mui-checked {
    color: var(--text-color);
  }

  .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track {
    background-color: var(--sub-color);
  }
`;

const EndBar = styled.div`
  display: flex;
  flex-flow: flex-end;
  align-items: center;
  margin-left: auto;
`;

const SearchStyled = styled.div`
  display: flex;
  align-items: center;
`;

const TextField = styled(MaterialTextField)`
  & .MuiFormLabel-root {
    color: var(--sub-color);
  }

  & .MuiInputBase-input {
    border-bottom: 1px solid var(--sub-color);
    color: var(--bg-color);
  }

  & .MuiInput-underline::after {
    border-bottom: None;
  }

  .MuiInput-underline:hover:not(.Mui-disabled):before
    .MuiInput-underline:hover:not(.Mui-disabled):after {
    border-bottom: 1px solid var(--sub-color);
  }

  & .MuiFormLabel-root.Mui-focused {
    color: var(--sub-color);
  }
`;

export { AppBar, EndBar, SearchStyled, TextField, Toolbar, Switch };
