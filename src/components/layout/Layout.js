import './Layout.css';
import TopHeader from './topHeader/TopHeader'

const Layout = ({ children }) => {
    return(
        <div className='Layout'>
            <TopHeader />
            <div>{children}</div>
        </div>
    );
}

export default Layout;