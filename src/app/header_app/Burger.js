import jss from "jss";
import { colors } from "../Theme";
import { query } from "../MediaQuery";


const createGenerateId = () => {
    return (rule) => `${rule.key}`;
}

jss.setup({createGenerateId});


const styles = {
    burger: {
        display: "none",
        // paddingTop: "0.5rem",
        position: "absolute",
        top: "2.5rem",
        right: "2rem",
        zIndex: 11,
        width: "4rem",
        height: "2.8rem",
        border: "none",
        background: "transparent",
        padding: 0,
    },
    burger_item: {
        display: "block",
        width: "100%",
        height: "0.4rem",
        marginBottom: "0.8rem",
        backgroundColor: colors.white,
        borderRadius: "2rem",
        transition: ["all", "0.2s", "linear"]
    },
    [`@media (max-width: ${query.desktop}px)`]: {
        burger: {
            display: "block"
        }
    },
}

const { classes } = jss.createStyleSheet(styles).attach();

const Burger = () => {
    return `
        <button class=${classes.burger}>
            <span class=${classes.burger_item}></span>
            <span class=${classes.burger_item}></span>
            <span class=${classes.burger_item}></span>
        </button>
    `
}

export default Burger;