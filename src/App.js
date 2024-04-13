import './App.css'
import FileUpload from './components/FileUpload/FileUpload'
import FileView from './components/FileView/FileView'
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { TranslationProvider } from 'i18nano'
import { DEFAULT_LANGUAGE, translations } from './i18n'
import { CookiesProvider, useCookies } from 'react-cookie'
import FaqPage from './components/FaqPage/FaqPage';
import DonatePage from './components/DonatePage/DonatePage';
import AboutPage from './components/AboutPage/AboutPage';

function App() {
  const [cookies] = useCookies()
  const userLang = cookies.lang || navigator.language || navigator.userLanguage // язык браузера
  const lang = userLang ? userLang.substr(0, 2) : DEFAULT_LANGUAGE

  return (
    <CookiesProvider>
      <BrowserRouter>
        <TranslationProvider
          language={lang}
          fallback={DEFAULT_LANGUAGE}
          translations={translations.main}
        >
          <div className="App">
            <Header />
            <div className="App-body">
              <Routes>
                <Route path="/:imageId" element={<FileView />} />
                <Route path="/uploaded/:imageId" element={<FileView owner={true}/>} />
                <Route index element={<FileUpload />} />
                <Route path="/faq" element={<FaqPage />}/>
                <Route path="/donate" element={<DonatePage />}/>
                <Route path="/about" element={<AboutPage />}/>
              </Routes>
            </div>
          </div>
        </TranslationProvider>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App
