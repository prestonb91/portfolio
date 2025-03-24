function Sidebar() {
    
    return (
        <>
            <div
                className="flex flex-col border-2 border-white w-1/6 h-screen fixed"
            >
                <button className="button">About</button>
                <button className="button">Experience</button>
                <button className="button">Projects</button>
                <button className="button">Stack</button>
            </div>
        </>
    )

}

export default Sidebar
