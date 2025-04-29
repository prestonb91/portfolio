import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function LocaleButton() {

    const [selectedLocale, setSelectedLocale] = useState('jp');

    const { i18n } = useTranslation();

    const handleSwitch = (language: string) => {
        i18n.changeLanguage(language);
        setSelectedLocale(language)
    };

    return(
        <>
            <div className='locale-button-container'>
                <button
                    className={`locale-button ${selectedLocale === 'jp' ? 'selected' : 'unselected'}`}
                    onClick={()=>handleSwitch('jp')}
                >
                    JP
                </button>
                <div className="locale-divider"></div>
                <button
                    className={`locale-button ${selectedLocale === 'en' ? 'selected' : 'unselected'}`}
                    onClick={()=>handleSwitch('en')}
                >
                    EN
                </button>
            </div>
        </>
    )
}

export default LocaleButton