const DocumentPage = (props: any) => (
  <>
    {props.canvasLayer.children}
    <div
      style={{
        marginTop: '15px',
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        left: 0,
        position: 'absolute',
        top: 0,
        width: '100%'
      }}
    >
      <div
        style={{
          color: 'rgba(0, 0, 0, 0.2)',
          fontSize: `${8 * props.scale}rem`,
          fontWeight: 'bold',
          textTransform: 'uppercase',
          transform: 'rotate(-45deg)',
          userSelect: 'none'
        }}
      >
        {props.pageIndex + 1}
      </div>
    </div>
    {props.textLayer.children}
    {props.annotationLayer.children}
  </>
)

export default DocumentPage
