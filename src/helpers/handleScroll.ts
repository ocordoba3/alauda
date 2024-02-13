import { SECTIONS } from "../utils/constants";


const SECTIONS_VALUES = Object.values(SECTIONS);
type Element = (typeof SECTIONS_VALUES)[number];

/**
 * 
 * @param element Element id to know where to scroll to 
 */
const handleScroll = (element: Element) => {
    switch (element) {
        case "home":
            window.scrollTo({ top: 0, behavior: "smooth" });
            break;
        default:
            window.scrollTo({
                top: document.getElementById(element)?.offsetTop || 0,
                behavior: "smooth",
            });
            break;
    }
};

export default handleScroll;