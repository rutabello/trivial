import React from 'react';
import PropTypes from 'prop-types';

const Selector = ({ type, options, onClick, value, onChange }) => {

    if (type === 'dropdown') {
        return (
            <div className="select">
                <select value={value} onChange={(event) => { onChange(event.target.value); }}>
                    {options.map((option, index) => <option key={index} value={option.value}>{option.label}</option>)}
                </select>
            </div>
        );
    }

    return (
        <div>
            {options.map((option, index) => <button key={index} type="button" onClick={() => { onClick(option); }}>{option}</button>)}
        </div>
    );
};

Selector.propTypes = {
    type: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.object,
        ]),
    ),
    onClick: PropTypes.func,
};

Selector.defaultProps = {
    type: 'button',
    options: [],
    onClick: () => {},
};

export default Selector;
