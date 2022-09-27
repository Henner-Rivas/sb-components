/// <reference types="react" />
import "./myLabel.css";
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
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, }: Props) => JSX.Element;
