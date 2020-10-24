export default function LayoutButton (props) {

    return (
        <div className=" pt-1 pb-2 px-4 ">
            <div className="flex justify-center bg-gray-300 rounded">
                <div className="flex justify-center bg-gray-300 px-4 py-4 rounded">
                    <div className="flex flex-inline">
                    {props.children}
                    </div>
                </div>
            </div>
        </div>


    )
}
