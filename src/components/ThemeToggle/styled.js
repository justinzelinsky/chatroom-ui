import styled from 'styled-components';
import colors from 'styles/colors';

const ThemeToggle = styled.div`
  display: flex;

  & > button:last-child {
    color: ${colors.veryDarkGreyBlack};
  }
`;

const ToggleControl = styled.div`
  align-items: center;
  display: flex;
  padding: 0 4px;
  position: relative;
`;

const Input = styled.input`
  appearance: none;
  background: ${colors.veryDarkGreyBlack};
  border-radius: 5px;
  cursor: pointer;
  height: 10px;
  position: relative;
  outline: none;
  vertical-align: 2px;
  width: 40px;

  &:checked + label {
    left: 30px;
  }

  &:focus-visible {
    outline: solid 2px ${colors.white};
  }
`;

const Label = styled.label`
  border-radius: 50%;
  background: ${colors.white};
  background-color: ${colors.darkGrey};
  cursor: pointer;
  display: inline-block;
  height: 18px;
  left: 2px;
  opacity: 1.0;
  position: absolute;
  transition: all 0.3s ease;
  width: 18px;
`;

const Button = styled.button`
  background: none;
  border: none;
  color: ${colors.yellow};
  cursor: pointer;
  font-size: 1.2em;
  transition: color 0.3s ease;

  &:focus {
    outline: none;
  }
`;

export default {
  Button,
  Input,
  Label,
  ThemeToggle,
  ToggleControl
};