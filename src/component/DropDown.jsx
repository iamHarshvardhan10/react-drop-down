import { Link } from 'react-router-dom'

import { IoIosArrowDropdownCircle } from "react-icons/io";







const navlinks = [
    {
        title: 'Home',
        link: '/home'
    },
    {
        title: 'Product',
        link: '/product'
    },
    {
        title: 'Service',
        link: '/service'
    },
    {
        title: 'Help',
        link: '/help'
    }
]



const DropDown = () => {
    return (
        <div className='w-[100%]'>
            <div className='flex items-center justify-center gap-[10rem] my-[20vh] mx-[300px] border p-4 rounded-xl'>
                {
                    navlinks.map((navlink) => (
                        <div key={navlink.title} className='flex items-center gap-2 text-lg capitalize'>
                            <Link to={navlink.link}>{navlink.title}</Link>
                            <span><IoIosArrowDropdownCircle /></span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DropDown;