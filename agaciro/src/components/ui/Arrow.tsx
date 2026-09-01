import { faArrowDown, faArrowLeft, faArrowRight, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Arrow({ direction = "right" }: { direction?: "right" | "down" | "up" | "left" }) {
  const icons = { right: faArrowRight, down: faArrowDown, up: faArrowUp, left: faArrowLeft };
  return <FontAwesomeIcon aria-hidden="true" className={`icon-arrow icon-arrow--${direction}`} icon={icons[direction]} />;
}
