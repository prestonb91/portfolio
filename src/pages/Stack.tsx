import { StackProps } from "../types/utils"

function Stack({ stackRef } : StackProps) {

    return (
    <>
        {/* Main Content */}
        <div
            className="stack-container"
            ref={stackRef}
        >
            <h1 className="header">Stack</h1>
            <div className="stack-body">
                <div 
                    className="stack-section"
                > Frontend
                    <div className="stack-item">Stack Item</div>
                </div>
                <div 
                    className="stack-section"
                >Backend

                </div>
                <div 
                    className="stack-section"
                >Other

                </div>
            </div>
        </div>
    </>
    )

}

export default Stack;