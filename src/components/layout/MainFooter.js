import React from "react";
import PropTypes from "prop-types";
import '../../styles/layout/stickyfooter.css'

const MainFooter = ({contained, menuItems, copyright}) => (
    <footer className="footer primary-color-dark">
        <div className={`${contained ? "container" : ""} primary-text-color`} style={{textAlign: 'right', paddingRight: '10px'}}>
            &copy; 2020 - <a href="http://www.sartainstudios.com" className="primary-text-color">{copyright}</a>
        </div>
    </footer>
);

MainFooter.propTypes = {
    /**
     * Whether the content is contained, or not.
     */
    contained: PropTypes.bool,
    /**
     * The menu items array.
     */
    menuItems: PropTypes.array,
    /**
     * The copyright info.
     */
    copyright: PropTypes.string
};

MainFooter.defaultProps = {
    contained: false,
    copyright: "Sartain Studios"
};

export default MainFooter;