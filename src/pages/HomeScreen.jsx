import { useRef } from 'react'
import { NavBarSide } from '../ui/NavBarSide'
import { MySkills } from './MySkills'
import { MyProjects } from './MyProjects'
import { Sphere } from '../ui/Sphere'
import TypingEffect from '../Utils/TypingEffect'
import { Pie } from '../ui/Pie'
import { useTranslation } from 'react-i18next';

export const HomeScreen = () => {
  const { t, i18n } = useTranslation();
  const sectionRefs = {
    main: useRef(null),
    section1: useRef(null),
    section2: useRef(null),
  };

  const handleScrollTo = (section) => {
    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='colorprim'>
      <NavBarSide onScrollTo={handleScrollTo} />
      <div ref={sectionRefs.main}>
        <div className='grid grid-cols-6 mt-14' >
          <div className='col-span-6 lg:col-span-4 lg:my-10 mx-5'>
            <div className='grid grid-cols-5 gap-3 lg:my-10'>
              <div className='col-span-5 lg:col-span-1 flex justify-center'>
                <div className='imagePerfil mt-10 lg:mt-0'>
                </div>
              </div>

              <div className='flex flex-col justify-center col-span-5 lg:col-span-4'>
                <p className="myName text-center lg:text-left text-3xl md:text-5xl"> MIGUEL VILCAHUAMAN CACERES </p>
                <p className='myDescription flex md:justify-start justify-center'><TypingEffect texts={["ULL STACK DEVELOPER", "ORE THAN 2 YEARS CREATING SOLUTIONS..."]} initialWords={["M", "F"]} speed={80} pause={2500} firstWord={"D"} />  </p>
              </div>
            </div>

            <div className='my-5'>
              <p className='contentSection'>{t('Principal.Me1')} <b>backend</b> {t('Principal.Me2')} <b>C#</b> {t('Principal.Me3')} <b>JavaScript</b> {t('Principal.Me4')} Node.js. {t('Principal.Me5')} <b>fullstack</b>, {t('Principal.Me6')} <b>Angular</b> {t('Principal.Me7')}</p>
            </div>

            <div className='flex my-10 gap-3'>
            </div>
          </div>

          <div className='col-span-6 lg:col-span-2 row-span-2 flex flex-col justify-center'>
            <Sphere />
          </div>
        </div>

        <div className='icon flex justify-center items-center gap-1 md:gap-5 mx-3'>
          <div className="border-t border-2 border-slate-50 my-4 w-full"></div>
          <div className='flex gap-3 md:gap-10'>
            <a class='mx-3 flex items-center hover:text-blue-500' target="_blank" rel="noreferrer noopener"
              href='https://www.facebook.com/profile.php?id=100010537685724'>
              <ion-icon style={{ "fontSize": "2.3rem" }} name="logo-facebook"></ion-icon>
            </a>
            <a class='mx-3 flex items-center hover:text-green-500' target="_blank" rel="noreferrer noopener" href='https://wa.link/l0z6od'>
              <ion-icon style={{ "fontSize": "2.3rem" }} name="logo-whatsapp"></ion-icon>
            </a>
            <a class='mx-3 flex items-center hover:text-orange-400' target="_blank" rel="noreferrer noopener"
              href='https://www.instagram.com/migguelvc?igsh=MW8wdTZiNDBscHh6MA=='>
              <ion-icon style={{ "fontSize": "2.3rem" }} name="logo-instagram"></ion-icon>
            </a>

          </div>
          <div className="border-t border-2 border-slate-50 my-4 w-full"></div>
        </div>
      </div>

      <div ref={sectionRefs.section1} className='py-16 px-10'>
        <MySkills />

      </div>

      <div ref={sectionRefs.section2} className='py-16 px-10'>
        <MyProjects />

      </div>


      <Pie />

    </div>
  )
}
