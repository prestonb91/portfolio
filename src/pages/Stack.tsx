import { StackProps } from "../types/utils"

function Stack({ stackRef } : StackProps) {

    return (
    <>
        {/* Main Content */}
        <div
            ref={stackRef}
        >
            <h1>Stack</h1>
        </div>
    </>
    )

}

export default Stack;