import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

const antIcon = (
  <LoadingOutlined style={{ fontSize: 20, color: '#de5300' }} spin />
)

const Spinner = () => <Spin indicator={antIcon} />

export default Spinner
