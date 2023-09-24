import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { AppHeader } from './AppHeader';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { EmailIndex } from './pages/EmailIndex';
import { EmailDetails } from './cmp/EmailDetails';
import { EmailList } from './cmp/EmailList';

export function App() {

    return (
        <Router>
            <section className='main-app'>
                <AppHeader />

                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/mail" element={<EmailIndex />}>
                            <Route path="/mail/view/:emailId" element={<EmailDetails />} />
                            <Route path="/mail/:folderName?" element={<EmailList />} />
                        </Route>
                    </Routes>
                </main>

            </section>
        </Router>

    )
}


