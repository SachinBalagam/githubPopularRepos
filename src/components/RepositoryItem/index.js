// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {data} = props
  const {name, starsCount, forksCount, issuesCount, avatarUrl} = data
  return (
    <li className="each-repo">
      <img src={avatarUrl} alt={name} className="avatar" />
      <h1 className="name">{name}</h1>
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="logo"
        />
        <p>{starsCount} stars</p>
      </div>
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="logo"
        />
        <p>{forksCount} forks</p>
      </div>
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="logo"
        />
        <p>{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
