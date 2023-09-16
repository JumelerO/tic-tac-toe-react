/* eslint-disable react/prop-types */
import { BiCircle } from 'react-icons/bi'
import { ImCross } from 'react-icons/im'
import { BiArrowBack } from 'react-icons/bi'
import { FaHistory } from 'react-icons/fa'

const icons = {
    circle: <BiCircle className='h-full w-full text-white'/>,
    cross: <ImCross className='h-full w-full text-white'/>,
    arrowBack: <BiArrowBack className='h-full w-full text-white group-hover:text-neutral-500 transition-colors duration-200'/>,
    history: <FaHistory className='h-full w-full text-white group-hover:text-neutral-500 transition-colors duration-200'/>
}

function GameIcon({ typeIcon }) {
    return ( typeIcon === 'O' ? icons.circle : typeIcon === 'X' ? icons.cross : typeIcon === 'arrowBack' ? icons.arrowBack : typeIcon === 'history' ? icons.history : <div className='h-full w-full bg-inherit'></div>) 
}

export { GameIcon }