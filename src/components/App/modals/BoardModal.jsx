import { createPortal } from "react-dom"

function BoardModal({ children }) {
    return createPortal(
        <div className="flex justify-center items-center flex-col relative">
            { children }
        </div>,
        document.getElementById('root')
    )
}

export { BoardModal }