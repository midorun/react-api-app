import styled from 'styled-components/macro'

import { ECOLORS } from 'constants/colors'

export const RequestField = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${ECOLORS.BORDER_GRAY};
  border-radius: 5px;
  
  .jsoneditor{
    width: 100%;
    height: 100%;
  }
  
  .jsoneditor-outer{
    width: 100%;
    height: 100%;
    //margin: 0 !important;
    //padding: 0 !important;
  }
  
  .jsoneditor-text{
    width: 100%;
    height: 100%;
    resize: none;
    border: none;
    border-radius: 5px;
  }
  
  .jsoneditor-validation-errors-container{
    //display: none;
  }
`
