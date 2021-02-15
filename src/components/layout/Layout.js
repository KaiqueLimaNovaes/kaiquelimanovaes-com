import './Layout.css';
import TopHeader from './topHeader/TopHeader';
import Menu from './menu/Menu';
import NeonLine from './neonline/NeonLine';

const Layout = ({ children }) => {
    return(
        <div className='Layout'>
            <TopHeader />
            <Menu />
            <NeonLine />
            <div>{children}</div>
        </div>
    );
}

export default Layout;