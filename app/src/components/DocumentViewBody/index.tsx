import {
  DocumentBodyWrapper,
  DocumentDisplayHeader,
  StyledDownloadIcon,
  StyledShareIcon,
  StyledStatusButton,
  StyledStatusHeading,
  IconsWrapper,
  StyledFileIcon,
  StatusLabel
} from './DocumentBody.style'
import { DocumentBodyProps } from './model'
import { Viewer, Worker } from '@react-pdf-viewer/core'
import { RenderSearchProps, searchPlugin } from '@react-pdf-viewer/search'
import '@react-pdf-viewer/search/lib/styles/index.css'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { ATCSearch, DocumentPage } from '../../components'
import { useState } from 'react'
import { zoomPlugin} from '@react-pdf-viewer/zoom'
import '@react-pdf-viewer/zoom/lib/styles/index.css'
import { rotatePlugin } from '@react-pdf-viewer/rotate'

const DocumentViewBody = (props: DocumentBodyProps) => {
  const searchPluginInstance = searchPlugin()
  const zoomPluginInstance = zoomPlugin( );
  const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;

  const { Search } = searchPluginInstance
  const { file_location } = props
  const [isLoaded, setIsLoaded] = useState(false)

  const rotatePluginInstance = rotatePlugin()
  const { RotateBackwardButton, RotateForwardButton } = rotatePluginInstance

  return (
    <DocumentBodyWrapper>
      <Search>
        {(renderSearchProps: RenderSearchProps) => {
          return (
            <DocumentDisplayHeader>
              <ATCSearch
                search={renderSearchProps.keyword}
                onChange={(input: string) => {
                  renderSearchProps.clearKeyword()
                  renderSearchProps.setKeyword(input)
                }}
                placeholder={'Search inside the document'}
                onKeyDown={(e: any) => {
                  if (e.key === 'Enter') {
                    if (renderSearchProps.currentMatch > 0) {
                      return renderSearchProps.jumpToNextMatch()
                    }
                    renderSearchProps.search()
                  }

                  if (!renderSearchProps.keyword) {
                    renderSearchProps.clearKeyword()
                  }
                }}
                style={{ width: '68%', marginRight: 12 }}
              />
              <StyledStatusButton>
                <StyledFileIcon />
                <StyledStatusHeading>DOC STATUS:</StyledStatusHeading>
                <StatusLabel> {isLoaded ? 'LOADED' : 'LOADING'}</StatusLabel>
              </StyledStatusButton>
              <IconsWrapper>
                <StyledDownloadIcon />

                <StyledShareIcon />
              </IconsWrapper>
            </DocumentDisplayHeader>
          )
        }}
      </Search>

      {file_location && (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
          <div
            style={{
              alignItems: 'center',
              backgroundColor: '#eeeeee',
              borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
              display: 'flex',
              justifyContent: 'space-around',
              padding: '4px',
            }}
          >
            <RotateBackwardButton />
            <div
              style={{
                display: 'flex'
              }}
            >
              <ZoomOutButton />
              <ZoomPopover />
              <ZoomInButton />
            </div>
            <RotateForwardButton />
          </div>
          <Viewer
            fileUrl={file_location}
            plugins={[searchPluginInstance,zoomPluginInstance, rotatePluginInstance]}
            renderPage={DocumentPage}
            onDocumentLoad={() => setIsLoaded(true)}
          />
        </Worker>
      )}
    </DocumentBodyWrapper>
  )
}

export default DocumentViewBody
