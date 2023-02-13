import styled from 'styled-components'
import { Download, Share } from '@styled-icons/bootstrap'
import { FileTextOutlined } from '@ant-design/icons'

export const DocumentBodyWrapper = styled.div`
  display: flex;
  flex: 1;
  margin: auto;
  max-height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  min-height: 0;
  flex-direction: column;
  // overflow: hidden;
`

export const DocumentDisplayHeader = styled.div`
  display: flex;
  flex-direction: row;
  position: sticky;
  width: 100%;
  left: 0;
  top: 0;
  height: 52px;
  background: #f4f4f7;
  padding: 8px 16px;
`

export const StyledDownloadIcon = styled(Download)`
  margin: auto;
  height: 24px;
  width: 24px;
  color: #0c3bb9;
  margin-right: 15px;
  margin-left: 8px;
`
export const StyledShareIcon = styled(Share)`
  height: 24px;
  width: 24px;
  margin: auto;
  color: #0c3bb9;
  margin-top: 8px;
`
export const StyledStatusButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  background: #f09c65;
  border-radius: 4px;
  height: 36px;
  font-size: 12px;
`

export const StyledStatusHeading = styled.span`
  font-size: 12px;
  font-weight: 800;
  font-family: 'Inter';
  font-style: normal;
  flex-wrap: nowrap;
  white-space: nowrap;
`

export const IconsWrapper = styled.div`
  display: flex;
  margin-left: auto;
  margin-left: 15px;
  gap: 0px;
`
export const StyledFileIcon = styled(FileTextOutlined)`
  font-size: 13px;
  font-weight: 700;
  stroke-width: 30;
  margin-bottom: 2px;
  margin-right: 10px;
`

export const StatusLabel = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  margin-left: 2px;
`
