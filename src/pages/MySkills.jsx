import React from 'react'
import computador from "../photos/Computador.png"
import { useTranslation } from 'react-i18next';

export const MySkills = () => {
    const { t } = useTranslation();
    return (
        <div className='flex flex-col gap-10'>
            <div className='titleSection text-center'>
                <p>{t('About.Title')}</p>
            </div>
            <div className='contentSection grid grid-cols-2 gap-16'>
                <div className='flex  flex-col items-center gap-4 col-span-2 sm:col-span-1 px-10'>
                    <div className='flex gap-4 aboutIcons'>
                        <ion-icon name="cafe-outline"></ion-icon>
                        <ion-icon name="code-outline"></ion-icon>
                        <ion-icon name="bug-outline"></ion-icon>
                    </div>
                    <p>
                        {t('About.Work')}
                    </p>
                </div>

                <div className='flex  flex-col items-center gap-4 col-span-2 sm:col-span-1 px-10'>
                    <div className='flex gap-4 aboutIcons'>
                        <ion-icon name="barbell-outline"></ion-icon>
                        <ion-icon name="musical-notes-outline"></ion-icon>
                    </div>
                    <p>
                        {t('About.Hobbies')}
                    </p>
                </div>

            </div>

            <div className='text-center flex items-center flex-wrap gap-4 justify-evenly'>
                <img src={computador} className="computador" alt="computador" />
                <p className='text-center myDescription'> {t('About.Phrase')} </p>
            </div>

        </div>
    )
}
