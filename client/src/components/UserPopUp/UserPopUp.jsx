import Login from "../Login/Login";
import Cart from "../Cart/Cart";

function UserPopUp({toggleUserPopUp}) {
    const user = false;
    const handleUserPopUp = () => {
        toggleUserPopUp()
    }

    return (
        <>
            <div className='z-50 h-screen w-full lg:w-2/4 bg-white dark:bg-gray-800 fixed top-0 right-0 z-50 shadow-lg' data-drawer="drawer-left-example" data-drawer-placement="left" aria-hidden="true">
                {/* Close button */}
                <button onClick={handleUserPopUp} className='absolute top-0 right-0 m-4 lg:text-2xl text-1xl font-bold text-gray-700 dark:text-gray-300'>X</button>
                {/* Bg open Container */}
                <div className='px-6 py-4 mt-8'>
                    {
                        !user ?<>user</> : <Login/>
                    }
                </div>
            </div>
            {/* Bg close */}
            <div className=' fixed top-0 left-0 w-full h-full z-30 bg-gray-900 bg-opacity-50' onClick={handleUserPopUp}/>
        </>
    )
}

export default UserPopUp