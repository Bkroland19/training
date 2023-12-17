/* eslint-disable react/prop-types */

function CustomButton({ text, handleClick }) {
    return (
        <div>
            <button onClick={handleClick} className="btn">
                {text}
            </button>
        </div>
    );
}

export default CustomButton;

// we cannot have more than one default export in a single file
