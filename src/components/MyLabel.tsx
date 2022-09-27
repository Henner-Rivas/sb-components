import "./myLabel.css";
import { Primary } from "../stories/Button.stories";

export interface Props {
  /**
   * What label would you like?
   */
  label?: string;
  /**
   * What size would you like?
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * caps?
   */
  allCaps?: boolean;
  /**
   * What color would you like?
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";
  fontColor?: string;
}

const MyLabel = ({
  label = "No Label",
  size = "normal",
  allCaps = true,
  color = "text-primary",
  fontColor,
}: Props) => {
  return (
    <span style={{ color: fontColor }} className={`label ${size} ${color}`}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default MyLabel;
