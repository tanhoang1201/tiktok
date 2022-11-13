import Header from "../layouts/Header";

function Upload({ children }) {
    return (
        <div>
            <div className="shadow-md">
                <Header />
            </div>
            <div>{children}</div>
        </div>
    );
}

export default Upload;
