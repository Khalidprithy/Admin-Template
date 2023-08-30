import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Footer from './Footer';
import Header from './Header';

export default function HomeLayout({ children }) {
   return (
      <div className='flex flex-col h-screen'>
         <Header />
         <main className='mt-16 flex-grow overflow-y-auto'>
            <PerfectScrollbar style={{ maxHeight: 'calc(100vh - 64px)' }}>
               {children}
            </PerfectScrollbar>
         </main>
         <Footer />
      </div>
   );
}
