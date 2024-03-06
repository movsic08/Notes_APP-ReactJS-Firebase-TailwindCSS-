
export default function Navbar() {
    return (
        <div className="flex w-full items-center justify-between py-2 ">
            <h1 className=" text-3xl font-bold ">To do App</h1>
            <button className=" p-2  bg-slate-800 dark:bg-slate-900 text-white rounded-full">
                <svg className=" h-5 w-5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 6.375c0-1.435.211-2.888.75-4.125-3.583 1.56-6 5.218-6 9.375 0 5.592 4.533 10.125 10.125 10.125 4.157 0 7.816-2.417 9.375-6-1.237.539-2.69.75-4.125.75C12.033 16.5 7.5 11.967 7.5 6.375Z"></path>
                </svg>
            </button>
        </div>
    )
}