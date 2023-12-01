import PropTypes from "prop-types";
import { lazy } from "react";

const AnimatedCard = lazy(() => import("./AnimatedCard"));
function AnimatedCardTitle(props) {
  return (
    <AnimatedCard url={props.url}>
      <div className="h-screen max-w flex flex-col justify-center items-center">
        <h1 className={`text-9xl font-bold text-white uppercase tracking-widest ${props.inViewIDs.includes(props.title) ? "animate-fade-in-up opacity-100 " : " opacity-0 "}`}>
          {props.title}
        </h1>
      </div>
    </AnimatedCard>
  );
}

AnimatedCardTitle.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  inViewIDs: PropTypes.array.isRequired,
};

export default AnimatedCardTitle;
