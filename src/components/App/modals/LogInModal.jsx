import { createPortal } from "react-dom"


function LogInModal({ children }) {
    return createPortal(
        <div className="h-full w-full grid place-items-center">
            { children }
        </div>,
        document.getElementById('login-modal')
    )
}

export { LogInModal }