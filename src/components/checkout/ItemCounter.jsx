// eslint-disable-next-line react/prop-types
const ItemCounter = ({ addItemHandler, removeItemHandler, itemCountHandler }) => {

  return (
    <div className='my-2 flex justify-center'>
      <button className='group-hover:bg-cyan-900/20' onClick={removeItemHandler}>-</button>
      <input className='mx-2 w-8 text-black text-center rounded' type="text" value={itemCountHandler} />
      <button className='group-hover:bg-cyan-900/20' onClick={addItemHandler}>+</button>
    </div>
  )
}

export default ItemCounter