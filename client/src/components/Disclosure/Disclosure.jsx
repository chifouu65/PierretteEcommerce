import { useEffect, useState } from "react"

function Disclosure(
    {
        title,
        children,
        booleen
    }
) {

    const [childrenSplit, setChildrenSplit] = useState([])
    useEffect(() => {
        // split if contain ',' || '.' || '!' || '?' || ';' || ':' || ' '
        // 
        if(
            children.length > 0
        ) {
            const childrenSplit = children.split(
                ',' || '.' || '!' || '?' || ';' || ':' 
            )
            setChildrenSplit(childrenSplit)
        } else {
            setChildrenSplit([children])
        }
    }, [children])
    return (
        <section>
            <details open={booleen
                ? true : false
            }
                     className="w-full bg-white p-4 rounded-xl shadow-md group mx-auto overflow-hidden transition-[max-height] duration-500
                     hover:bg-gray-50  border border-gray-300
                     ">
                <summary
                    className=" outline-none cursor-pointer focus:underline focus:text-indigo-600 font-semibold marker:text-transparent group-open:before:rotate-90  before:origin-center relative before:w-[18px] before:h-[18px] before:transition-transform before:duration-200 before:-left-1 before:top-2/4 before:-translate-y-2/4 before:absolute before:bg-no-repeat before:bg-[length:18px_18px] before:bg-center before:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22h-6%20w-6%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%3E%0A%20%20%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M9%205l7%207-7%207%22%20%2F%3E%0A%3C%2Fsvg%3E')]
                    hover:outline-none hover:underline hover:text-indigo-600
                    "
                >
                    {title}
                </summary>

                <hr className="my-2 scale-x-150"/>

                <div className="-m-4 -mt-2 p-4 bg-gray-5
                text-sm md:text-base leading-6 md:leading-7
                ">
                    {
                        childrenSplit.map((child, index) => {
                            return (
                                <div key={index}>
                                    {child}
                                </div>
                            )
                        })
                    }
                </div>
            </details>
        </section>
    )
}

export default Disclosure