import styled from 'styled-components/macro'

export const Header = styled.div`
  padding: 10px 15px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #CCCCCC;
  
  > * { 
    display: flex;
  }
  
`

export const LeftSide = styled.div`
  gap: 20px;
`

export const RightSide = styled.div`
  gap: 30px;
  display: flex;
  align-items: center;
`

export const Title = styled.span`
  display: flex;
  align-items: center;
  font-size: 20px;
  line-height: 30px;
`

export const User = styled.div`
  height: 30px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  border: 1px solid #00000033;
  border-radius: 5px;
  font-size: 16px;
  line-height: 20px;
`

export const Divider = styled.span`
  color: #00000033;
`

export const Account = styled.span`
  
`

export const Sublogin = styled.span`
  
`

export const Logout = styled.div`
  display: flex;
  cursor: pointer;
`

export const Exit = styled.span`
  margin-right: 8px;
`

export const FullScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
