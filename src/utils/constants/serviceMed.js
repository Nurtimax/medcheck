import allergologyIcon from '../../assets/icons/allergology.svg'
import vaccinationIcon from '../../assets/icons/vaccination.svg'
import gynecologyIcon from '../../assets/icons/gynecology.svg'
import cardiologyIcon from '../../assets/icons/cardiology.svg'
import neurosurgeryIcon from '../../assets/icons/neurosurgery.svg'
import orthopedicsIcon from '../../assets/icons/orthopedics.svg'
import ophthalmologyIcon from '../../assets/icons/ophthalmology.svg'
import psychotherapyIcon from '../../assets/icons/psychotherapy.svg'
import rheumatologyIcon from '../../assets/icons/rheumatology.svg'
import urologiyaIcon from '../../assets/icons/urologiya.svg'
import endocrinologyIcon from '../../assets/icons/endocrinology.svg'
import anesteziologiyaReanimatologiyaIcon from '../../assets/icons/anesteziologiyaReanimatologiya.svg'
import gastroenterologiyaIcon from '../../assets/icons/gastroenterologiya.svg'
import dermatologyIcon from '../../assets/icons/dermatology.svg'
import neurologyIcon from '../../assets/icons/neurology.svg'
import onkologiyaIcon from '../../assets/icons/onkologiya.svg'
import otorinolaringologiyaIcon from '../../assets/icons/otorinolaringologiya.svg'
import proctologyIcon from '../../assets/icons/proctology.svg'
import pulmonologyIcon from '../../assets/icons/pulmonology.svg'
import therapyIcon from '../../assets/icons/therapy.svg'
import phlebologyIcon from '../../assets/icons/phlebology.svg'
import physiotherapyIcon from '../../assets/icons/physiotherapy.svg'
import { ImgDoctor1, ImgDoctor2, ImgDoctor3 } from '../../assets'

export const SERVICE_MED = [
   {
      id: 1,
      title: 'Аллергология',
      ser_icon: allergologyIcon,
   },
   {
      id: 2,
      title: 'Вакцинация',
      ser_icon: vaccinationIcon,
   },
   {
      id: 3,
      title: 'Гинекология',
      ser_icon: gynecologyIcon,
   },
   {
      id: 4,
      title: 'Кардиология',
      ser_icon: cardiologyIcon,
   },
   {
      id: 5,
      title: 'Нейрохирургия',
      ser_icon: neurosurgeryIcon,
   },
   {
      id: 6,
      title: 'Ортопедия',
      ser_icon: orthopedicsIcon,
   },
   {
      id: 7,
      title: 'Офтальмология',
      ser_icon: ophthalmologyIcon,
   },
   {
      id: 8,
      title: 'Психoтерапия',
      ser_icon: psychotherapyIcon,
   },
   {
      id: 9,
      title: 'Ревмотология',
      ser_icon: rheumatologyIcon,
   },
   {
      id: 10,
      title: 'Урология',
      ser_icon: urologiyaIcon,
   },
   {
      id: 11,
      title: 'Эндокринология',
      ser_icon: endocrinologyIcon,
   },
   {
      id: 12,
      title: 'Анестезиология',
      ser_icon: anesteziologiyaReanimatologiyaIcon,
   },
   {
      id: 13,
      title: 'Гастроэнтерология',
      ser_icon: gastroenterologiyaIcon,
   },
   {
      id: 14,
      title: 'Дерматология',
      ser_icon: dermatologyIcon,
   },
   {
      id: 15,
      title: 'Неврология',
      ser_icon: neurologyIcon,
   },
   {
      id: 16,
      title: 'Онкология',
      ser_icon: onkologiyaIcon,
   },
   {
      id: 17,
      title: 'Оториноларингология',
      ser_icon: otorinolaringologiyaIcon,
   },
   {
      id: 18,
      title: 'Проктология',
      ser_icon: proctologyIcon,
   },
   {
      id: 19,
      title: 'Пульмонология',
      ser_icon: pulmonologyIcon,
   },
   {
      id: 20,
      title: 'Терапия',
      ser_icon: therapyIcon,
   },
   {
      id: 21,
      title: 'Флебология',
      ser_icon: phlebologyIcon,
   },
   {
      id: 22,
      title: 'Физиотерапия',
      ser_icon: physiotherapyIcon,
   },
]

export const service_accordion = [
   {
      id: 1,
      title: 'Как проходит процедура?',
      text: 'На первом этапе, консультации нашего специалиста, вам будет нужно определиться с желаемым результатом — тоном отбеливания при помощи специальной палитры. Дальнейшие действия выполняются в следующей последовательности:',
      children: [
         { id: 1, subtitle: 'Обработка десен защитным составом' },
         { id: 2, subtitle: 'Защита глаз при помощи специальных очков' },
         { id: 3, subtitle: 'Нанесение отбеливающего геля' },
         {
            id: 4,
            subtitle:
               'Первая процедура отбеливания в течение 15 минут под воздействием лампы',
         },
         { id: 5, subtitle: 'Полоскание для удаления остатков геля' },
         {
            id: 6,
            subtitle:
               'Вторая процедура отбеливания в течение по 15 минут под воздействием лампы',
         },
         { id: 7, subtitle: 'Полоскание' },
         {
            id: 8,
            subtitle:
               'Третья процедура отбеливания в течение 15 минут под воздействием ламп',
         },
         {
            id: 9,
            subtitle:
               'Нанесение реминерализирующего геля для защиты эмали от чувствительности и ее восстановления.',
         },
      ],
   },
   {
      id: 2,
      title: 'Показания',
      text: '',
      children: [],
   },
   {
      id: 3,
      title: 'Противопоказания',
      text: '',
      children: [],
   },
   {
      id: 4,
      title: 'Насколько безопасно отбеливание Zoom 4?',
      text: '',
      children: [],
   },
   {
      id: 5,
      title: 'Сколько держится результат?',
      text: '',
      children: [],
   },
]
export const service_doctors = [
   {
      id: '1',
      name: 'Гаталуский Артур',
      expert: 'Врач-дерматолог',
      ser_icon: ImgDoctor1,
   },
   {
      id: '2',
      name: 'Манак Елена',
      expert: 'Врач-дерматолог',
      ser_icon: ImgDoctor2,
   },
   {
      id: '3',
      name: 'Мисник Елена',
      expert: 'Врач-дерматолог',
      ser_icon: ImgDoctor3,
   },
]
