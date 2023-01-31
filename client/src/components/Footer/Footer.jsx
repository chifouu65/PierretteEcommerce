function Footer () {

    const links = [
        {
            name: 'About',
            href: '#'
        },
        {
            name: 'Privacy Policy',
            href: '#'
        },
        {
            name: 'Licensing',
            href: '#'
        },
        {
            name: 'Contact',
            href: '#'
        }
    ]

    return (
        <div className='
            fixed bottom-0 flex justify-center w-full
        '>
            <footer
                className="w-full p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a
                href="https://flowbite.com/" className="hover:underline">
                Flowbite™</a>. All Rights Reserved.
            </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    {links.map((link, index) => (
                        <li key={index} className="mt-3 mr-6 sm:mt-0 sm:mr-6">
                            <a href={link.href} className="hover:underline" target={'_blank'}>
                                {link.name}
                            </a>
                        </li>
                    ))}

                </ul>
            </footer>
        </div>
    )
}

export default Footer