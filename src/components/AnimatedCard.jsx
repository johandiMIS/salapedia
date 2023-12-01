import PropTypes from 'prop-types'

function AnimatedCard(props) {
  const {url} = props
  return (
    <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: `url(${url})`, scrollSnapAlign: "start"}}>
      {props.children}
    </div>
  )
}


AnimatedCard.propTypes = {
  url: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ])
}

export default AnimatedCard;