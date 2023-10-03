// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {data, onUpdateFilter, isActive} = props
  const {language, id} = data
  const active = isActive ? 'active' : ''

  const onFilterClick = () => {
    onUpdateFilter(id)
  }

  return (
    <li className="each-filter">
      <button
        type="button"
        className={`button ${active}`}
        onClick={onFilterClick}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
