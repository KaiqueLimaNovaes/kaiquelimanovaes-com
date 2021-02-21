import './Layout.css';
import TopHeader from './topHeader/TopHeader';
import Menu from './menu/Menu';
import NeonLine from './neonline/NeonLine';
import Footer from './footer/Footer';

const Layout = ({ children }) => {
    return(
        <div className='Layout'>
            <TopHeader />
            <Menu />
            <NeonLine />
            <div>{children}</div>
            <Footer />
        </div>
    );
}

export default Layout;