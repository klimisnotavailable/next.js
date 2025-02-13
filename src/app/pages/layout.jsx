import Header from "../components/Header/Header";

const layout = ({children}) => {
    return (<>
    <Header></Header>
    {children}
    </>
    )
};

export default layout;