import { Link } from 'react-router-dom'

import { IoIosArrowDropdownCircle , IoIosArrowDroprightCircle } from "react-icons/io";







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


const products = [
    {
        title: 'Mobile'
    },
    {
        title: 'Laptop'
    },
    {
        title: 'Clothes'
    },
    {
        title: 'Leds'
    },
    {
        title: 'Car'
    }
]

const clothes = [
    {
        title: 'T-shirt'
    },
    {
        title: 'Shirt'
    }
]


const DropDown = () => {
    return (
        <div className='w-[100%]'>
            <div className='flex items-center justify-center gap-[10rem] my-[20vh] mx-[300px] border p-4 rounded-xl'>
                {
                    navlinks.map((navlink, i) => (
                        <div key={i} className='group flex items-center'>
                            {
                                navlink.title == 'Product' ? (
                                    <div className='relative flex items-center gap-2 cursor-pointer group'>
                                        <span>{navlink.title}</span>
                                        <span><IoIosArrowDropdownCircle /></span>
                                        <div className='invisible absolute top-[50%] w-[150px] text-lg uppercase flex flex-col gap-4 translate-x-[-20%] translate-y-[-3em] bg-[#A68DAD] font-bold p-4 rounded-lg group-hover:visible group-hover:translate-y-[1.65em] select-none transition-all duration-200 '>
                                            {
                                                products.map((product) => (
                                                    <div>
                                                        {
                                                            product.title == 'Clothes' ? (
                                                                <div className='relative flex items-center gap-2 group'>
                                                                    <span>{product.title}</span>
                                                                    <span><IoIosArrowDroprightCircle /></span>
                                                                    <div className='invisible absolute top-[50%] left-[130%] translate-x-[-50%] bg-[#ADCCC7] w-[140px] p-4 group-hover:visible group-hover:translate-x-[-10%] transition-all duration-200 rounded-lg'>
                                                                        {
                                                                            clothes.map((cloth) => (
                                                                                <div key={cloth.title} className='mb-2'>
                                                                                    <p>{cloth.title}</p>
                                                                                </div>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div>
                                                                    <p>{product.title}</p>
                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <p>{navlink.title}</p>
                                    </div>
                                )
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DropDown;