/* eslint-disable react/prop-types */
function Board({ children }) {
    return(
        <div className="grid grid-rows-3 grid-cols-3 h-fit w-fit mt-4 rounded-lg gap-10px overflow-hidden mx-auto">
            { children }
        </div>
    )
}

export { Board }