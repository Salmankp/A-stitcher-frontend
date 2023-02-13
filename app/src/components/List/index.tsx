import { ListProps } from './model'
// import { ListWrapper } from './EntitiesList.style'
import CircularProgress from '@mui/material/CircularProgress'
import InfiniteScroll from 'react-infinite-scroll-component'

const List = (props: ListProps) => {
  const { list, selected, select, Item, setPageNumber } = props
  const fetchData = () => {
    setPageNumber?.()
  }
  return (
    <>
      {list?.length === 0 ? (
        <CircularProgress
          size={80}
          sx={{
            color: '#de5300',
            position: 'absolute',
            left: '23%',
            top: '50%'
          }}
        />
      ) : (
        <InfiniteScroll
          dataLength={list.length}
          next={fetchData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          scrollableTarget="scrollableDiv"
        >
          {list?.map((item: any) => (
            <Item
              key={item.id}
              selected={selected}
              select={select}
              item={item}
            />
          ))}
        </InfiniteScroll>
      )}
    </>
  )
}

export default List
