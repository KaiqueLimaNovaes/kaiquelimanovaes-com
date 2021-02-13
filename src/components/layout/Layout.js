import TopHeader from './topHeader/TopHeader'

const Layout = ({ children }) => {
    return(
        <>
            <TopHeader />
            <div>{children}</div>
        </>
    );
}

export default Layout;