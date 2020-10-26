export default function LayoutButton(props) {
    const theme = props.theme;

    return (
        <>
            {
                theme === 1 &&
                <div className=" pt-1 pb-2 px-4 ">
                    <div className="flex justify-center bg-gray-300 rounded">
                        <div className="flex justify-center bg-gray-300 px-4 py-4 rounded">
                            <div className="flex flex-inline">
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                theme === 2 &&
                <div className="pt-2">
                    <div className="flex flex-wrap py-2 justify-center">
                        <div className="w-full px-4">
                            <div className="flex justify-center bg-blue-200 rounded">
                                <ul className="items-center flex">
                                    {props.children}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </>

    )
}
