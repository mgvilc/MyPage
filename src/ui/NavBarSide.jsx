import { useState  } from "react";
import { useTranslation } from 'react-i18next';

export const NavBarSide = ({ onScrollTo }) => {

    const { t, i18n } = useTranslation();
    const [isEnglish, setIsEnglish] = useState(i18n.language === "en");

    const toggleLanguage = () => {
        const newLang = isEnglish ? "es" : "en";
        i18n.changeLanguage(newLang);
        setIsEnglish(!isEnglish);
    };

    return (
        <nav className="navbar text-white p-4 fixed w-full top-0 z-10">
            <div className=" flex flex-wrap justify-center sm:justify-between items-center">
                <div className="text-xl font-bold sm:px-0 px-10">
                    <button onClick={() => onScrollTo('main')}>
                        MigVC
                    </button>
                </div>
                <ul className="flex space-x-3 md:space-x-9">
                    <li>
                        <button onClick={() => onScrollTo('section1')} className="hover:text-gray-400 text-lg">
                            {t('Navbar.AboutMe')}
                        </button>
                    </li>
                    <li>
                        <button onClick={() => onScrollTo('section2')} className="hover:text-gray-400 text-lg">
                            {t('Navbar.Experience')}
                        </button>
                    </li>
                    <li className='flex gap-2'>
                        <span>ES</span>
                        <button
                            onClick={toggleLanguage}
                            className={`w-14 h-7 flex items-center rounded-full p-1 transition-colors coloralt`}
                        >
                            <div
                                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${isEnglish ? "translate-x-7" : "translate-x-0"
                                    }`}
                            ></div>
                        </button>
                        <span>EN</span>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
