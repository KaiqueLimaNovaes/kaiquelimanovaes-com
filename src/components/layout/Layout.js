import './Layout.css';
import TopHeader from './topHeader/TopHeader';
import Menu from './menu/Menu';

const Layout = ({ children }) => {
    return(
        <div className='Layout'>
            <TopHeader />
            <Menu />
            <div>{children}</div>
        </div>
    );
}

export default Layout;