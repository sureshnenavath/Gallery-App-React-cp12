import './index.css'

const ThumbnailItemComponent = props => {
  const {eachItem, getImageItemId, isActive} = props
  const sendItemId = () => {
    getImageItemId(eachItem.id)
  }
  const getOpacityStyle = isActive ? '' : 'image-style'
  return (
    <li>
      <button onClick={sendItemId}>
        <img
          src={eachItem.thumbnailUrl}
          alt={eachItem.thumbnailAltText}
          className={getOpacityStyle}
        />
      </button>
    </li>
  )
}
export default ThumbnailItemComponent
