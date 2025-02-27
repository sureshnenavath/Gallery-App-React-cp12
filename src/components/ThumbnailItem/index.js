import './index.css'

const ThumbnailItemComponent = props => {
  const {eachItem, getImageItemId, isActive} = props
  const sendItemId = () => {
    getImageItemId(eachItem.id)
  }
  const getOpacityStyle = isActive ? '' : 'image-style'
  return (
    <li>
      <img
        src={eachItem.thumbnailUrl}
        alt={eachItem.thumbnailAltText}
        onClick={sendItemId}
        className={getOpacityStyle}
      />
    </li>
  )
}
export default ThumbnailItemComponent
