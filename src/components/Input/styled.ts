import styled from 'styled-components/macro'

import { IInputStyledProps } from './index'

interface LabelProps {
  optional?: boolean;
  invalid: boolean;
}

export const InputStyled = styled.input<IInputStyledProps>`
  margin-top: 5px;
  padding: 5px 0 5px 10px;
  width: 460px;
  height: 40px;
  border: 1px solid #00000033;
  border-radius: 5px;
  line-height: 30px;


  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.4);
  }

  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.4); //duplicated from 32 row
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.2);
    border-radius: 7px;
  }

  ${({ type, isEmpty }) => {
    if (type === 'password' && !isEmpty) {
      return `
      font-size: 50px;
      `
    } else {
      return 'font-size:18px;'
    }
  }}
`

export const LabelStyled = styled.label<LabelProps>`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 20px;
  position: relative;
  color: ${({ invalid }) => invalid ? '#CF2C00' : ''};

  ${({ optional }) => optional
          ? `      
      &:before{
        content: 'Опционально';
        position: absolute;
        right: 0;
        top: 0;
        font-size: 12px;
        color: #999999;
      }
      `
          : ''
  }
  ${InputStyled} {
    ${({ invalid }) => invalid
            ? `
      border: 1px solid #CF2C00;
      box-shadow: 0px 0px 5px #cf2c007f;
      `
            : ''
    }
  }
`
