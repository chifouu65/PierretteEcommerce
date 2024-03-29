import {Link} from "react-router-dom";

function Footer () {

    const links = [
        {
            name: 'About',
            href: '/about'
        },
        {
            name: 'Contact',
            href: '/contact'
        }
    ]

    return (
        <div className='
            flex justify-center w-full pt-4
        '>
            <footer
                className="w-full p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 ">
            <span className="text-sm text-gray-500 sm:text-center ">
                © 2021 - Pierrette Essentielle
                . All Rights Reserved.
            </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0">
                    {links.map((link, index) => (
                        <li key={index} className="mt-3 mr-6 sm:mt-0 sm:mr-6">
                            <Link to={link.href} className="hover:underline" >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li  className="mt-3 mr-6 sm:mt-0 sm:mr-6">
                        <a href={"https://stripe.com/fr/privacy"} className="hover:underline" target={'_blank'}>
                            Privacy Policy
                        </a>
                    </li>

                </ul>
            </footer>
        </div>
    )
}

export default Footer