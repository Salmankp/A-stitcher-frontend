import styled from 'styled-components'
import Checkbox from 'antd/lib/checkbox/Checkbox'

export const ChecboxWithLabelWrapper = styled.div`
  display: flex;
  flex: row;
  flex: 1;
  height: fit-content;
`

export const ATCCheckbox = styled(Checkbox)`
  margin-right: 10px;
  width: 18px;
  height: 18px;

  cursor: pointer;

  .ant-checkbox-inner.ant-checkbox-inner {
    border: 2px solid #d0d2db;
  }

  &:hover {
    .ant-checkbox-inner.ant-checkbox-inner {
      border: 2px solid black;
    }
  }

  &:focus {
    outline: 2px solid blue;
    .ant-checkbox-inner.ant-checkbox-inner {
      border: 2px solid #0c3bb9;
    }
  }

  .ant-checkbox-checked {
    .ant-checkbox-inner.ant-checkbox-inner {
      background-color: #de5300;
      border: 1px solid #de5300;
      border-color: #de5300;
    }
  }
`

export const StyledLabel = styled.label`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #192129;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 1;
`
