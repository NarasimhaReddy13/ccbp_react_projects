import './Projects-Item.css'


export const ProjectItem = props => {
  const {projectDetails} = props
  const {projectId, imageURL, description, title} = projectDetails
  return (
    <>
      <li className="project-item-container">
        <img
          className="project-item-image"
          src={imageURL}
          alt={`project-item ${projectId}`}
        />
        <div className="project-item-details-container">
          <h1 className="project-item-title">{title}</h1>
          <p className="project-item-description">{description}</p>
        </div>
      </li>
    </>
  )
}




export const TabItem = ({tabDetails, updateActiveTabId, isActive}) => {
  const {displayText, tabId} = tabDetails

  const changeActiveTabId = () => {
    updateActiveTabId(tabId)
  }
  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={changeActiveTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

