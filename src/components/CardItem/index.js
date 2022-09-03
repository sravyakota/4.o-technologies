import './index.css'

const Technologies = props => {
  const {techCards} = props
  const {className, title, description, imgUrl} = techCards
  return (
    <li className={className} id="card">
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imgUrl} alt={title} className="image" />
    </li>
  )
}
export default Technologies
