import StackProps from "../types/utils"

function Stack({ stackRef } : StackProps) {

    return (
    <>
        {/* Main Content */}
        <div
            className="border-2 border-white text-white h-screen"
            ref={stackRef}
        >
            <h1>Stack</h1>
        </div>
    </>
    )

}

export default Stack;