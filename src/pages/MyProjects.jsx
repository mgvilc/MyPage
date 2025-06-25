import React from 'react'
import { TagText } from '../components/TagText';
import { useTranslation } from 'react-i18next';

const TimelineItem = ({ date, description, technologies }) => {
    return (
        <div className="flex items-center mb-8">
            <div className="flex flex-col items-center">
                <div className="w-4 h-4 hyphen rounded-full"></div>
            </div>
            <div className="ml-4">
                <h4 className="font-semibold text-2xl">{date}</h4>
                <p className="text-xl">{description}</p>
                <div>
                    {technologies}
                </div>
            </div>
        </div>
    );
};



export const MyProjects = () => {
    const { t } = useTranslation();
    const events = [
        { date: t('Experience.Item1.Header'), description: t('Experience.Item1.Description'), technologies: t('Experience.Technologies') + ": C# .NET 8, SQL Server, Auth0, Azure Blob Storage, SFTP Servers." },
        { date: t('Experience.Item2.Header'), description: t('Experience.Item2.Description'), technologies: t('Experience.Technologies') + ": PHP, SQL Server." },
        { date: t('Experience.Item3.Header'), description: t('Experience.Item3.Description'), technologies: t('Experience.Technologies') + ": React, NodeJS, MySQL." },
        { date: t('Experience.Item4.Header'), description: t('Experience.Item4.Description'), technologies: t('Experience.Technologies') + ": Android Studio, Kotlin, Google Sheets." },
    ];

    return (
        <div className='flex flex-col gap-10'>
            <div className='titleSection text-center'>
                <p>{t('Experience.Title')}</p>
            </div>
            <div className='contentSection'>
                <div>
                    {events.map((event, index) => (
                        <TimelineItem key={index} date={event.date} description={event.description} technologies={event.technologies} />
                    ))}
                </div>
            </div>
        </div>
    )
}
