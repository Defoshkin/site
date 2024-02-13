import { Button, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import ReportGrid from './ReportGrid';

const Company = [
  { name: 'Компании, предоставляющие бытовые услуги населению (2022)', link: 'https://app.powerbi.com/view?r=eyJrIjoiN2Y4MzJhNDQtYTBjMC00ZDM5LWFjYjAtYjVhM2E1MjQzM2NjIiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9' },
  { name: 'Компании, предоставляющие бытовые услуги населению (2023)', link: 'https://app.powerbi.com/view?r=eyJrIjoiMzcwYzllZDMtNDkzZi00MTA2LWE3NTItMjJjMzg1YzgwZTcwIiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9' },
  { name: 'Рестораны и гостиницы (2022)', link: 'https://app.powerbi.com/view?r=eyJrIjoiMGQ0ZjI5ODAtMDE2Yy00ZTZhLThmOTktNzExMjVhYjNiZGY1IiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9' },
  { name: 'Рестораны и гостиницы (2023)', link: 'https://app.powerbi.com/view?r=eyJrIjoiMjE0YmJhZmUtZTg4Ny00YmFjLWJmMDEtY2E2OTlkNGNjOTNlIiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9' },
  { name: 'Компании по доставке грузов (2022)', link: 'https://app.powerbi.com/view?r=eyJrIjoiMGNhNWQwYjAtNzRiMC00ZGI0LWJiOTMtNmVkMzgzYTU1ZWU4IiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9' },
  { name: 'Компании по доставке грузов (2023)', link: 'https://app.powerbi.com/view?r=eyJrIjoiMWY2YTczYTQtMDI5NS00YjkwLTg5ODktZTVlMGQyOTI0NDQ0IiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9' },
  { name: 'Детские учреждения (2022)', link: 'https://app.powerbi.com/view?r=eyJrIjoiMDk5OTQ5MjctMTlhMi00ZTFlLWFkYzYtNDBlOTU1NmQ0MzgzIiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9' },
  { name: 'Детские учреждения (2023)', link: 'https://app.powerbi.com/view?r=eyJrIjoiYmEyNWYyNDMtMWJmNi00MGJjLTk4MTgtYWRiOGFiNDMyOWI5IiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9' },
  { name: 'Платформа по кадрам (2023)', link: 'https://app.powerbi.com/view?r=eyJrIjoiMTI0YmFjN2UtMWZkYy00YzlmLWI4ZjUtYzM0N2VmNDIwZjM0IiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9' },
  { name: 'Компании, предоставляющие IT услуги населению', link: 'https://app.powerbi.com/view?r=eyJrIjoiNTYzYTM5YTItN2ViNi00MzVkLTkzMGItNDU4NDYyMzBmOTIwIiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9' },
  { name: 'Статистические данные о сфере МСП', link: 'https://app.powerbi.com/view?r=eyJrIjoiNGU4NDYzYmYtMzgzNi00YWQxLTljYTYtNTUwMWY2ZGYwNDlmIiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9' },
];

const Meri = [
{ name: 'Меры муниципальной поддержки МСП', link: 'https://app.powerbi.com/view?r=eyJrIjoiOTY3Njc0ZTUtZTAxMi00ZGYzLWIzOGItOTVjMjdlODcyOGMwIiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9' },
{ name: 'Меры поддержки МСП кредитными организациями', link: 'https://app.powerbi.com/view?r=eyJrIjoiOTlkZWQ2NTUtZGYzNi00MTBlLThlZTYtODZiNmFiYmI4NmI4IiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9' },
{ name: 'Меры региональной поддержки МСП', link: 'https://app.powerbi.com/view?r=eyJrIjoiZWU1MTRjNzktYWE2Mi00MmVlLTliMmEtMGUxNTUxNmYzYWVjIiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9' },
{ name: 'Меры федеральной поддержки МСП', link: 'https://app.powerbi.com/view?r=eyJrIjoiZmEzMzU5ODctYzgwMi00MjRlLWI0MjMtMmE3NGM3OWU1MzVlIiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9' },
{ name: 'Фонды', link: 'https://app.powerbi.com/view?r=eyJrIjoiODVjYzgzODUtY2M3ZC00NTk1LTllMmUtMTYyMjNlYzkxYzkwIiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9' },
];

const Nedviz = [
  { name: 'Недвижимость ЗФ ПАО ГМК “Норильский никель”', link: 'https://app.powerbi.com/view?r=eyJrIjoiODE1ODViZmMtODkxMy00Mzg4LTlhYWQtY2RkNWE0Y2EwZmY0IiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9' },
  { name: 'Муниципальная недвижимость', link: 'https://app.powerbi.com/view?r=eyJrIjoiMTlmN2JiY2ItYzg4ZC00MTE1LWIxYTgtMGJkMzJlMjQ5N2I2IiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9' },
  { name: 'Недвижимость физических лиц (2022)', link: 'https://app.powerbi.com/view?r=eyJrIjoiNjU4NTI1ZWYtYTBlNC00ZmEyLTg3ODktMTY1ZTRlMTM0YmU2IiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9' },
  { name: 'Недвижимость физических лиц (2023)', link: 'https://app.powerbi.com/view?r=eyJrIjoiYzE1NDMxNWMtZTc1Yy00NTY5LTkxMTEtZWNkNzg0ZjgyZjQzIiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9' },
];
  
const Report = ({ reportInfo }) => (
  <div className='viz_report'>
    <text className='report_name'>{reportInfo.name}</text>
    <iframe className='reported' title="Report Section" src={reportInfo.link} frameBorder="0" allowFullScreen="true"></iframe>
  </div>
);

const Otchet = () => {
  const [selectedReport, setSelectedReport] = useState(null);
  const [isReportVisible, setIsReportVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [isSubcategoriesOpen, setIsSubcategoriesOpen] = useState(false);
  const [categoryButtonStates, setCategoryButtonStates] = useState({});
  const [subcategoryButtonStates, setSubcategoryButtonStates] = useState({});;
  const [isSubcategorySelected, setIsSubcategorySelected] = useState(false);
  const [openSubcategories, setOpenSubcategories] = useState([]);
  const [lastClickedButton, setLastClickedButton] = useState(null);

  const handleCategoryClick = (category) => {
    setCategoryButtonStates((prevStates) => ({ ...prevStates, [category]: !prevStates[category] }));
    setSubcategoryButtonStates({});
    
    // Закрыть все предыдущие подкатегории
    setOpenSubcategories([]);
    setSelectedSubcategories([]);
    closeReport();
    
    if (selectedCategory === category && openSubcategories.length > 0) {
      setSelectedCategory(null);
    } else {
      if (selectedCategory && selectedCategory !== category) {
        setCategoryButtonStates((prevButtonStates) => ({ ...prevButtonStates, [selectedCategory]: false }));
      }
      setSelectedCategory((prevCategory) => (prevCategory === category ? null : category));
    }
  };

  const openReport = (reportInfo) => {
    setSelectedReport(reportInfo);
    setIsReportVisible(true);
  };

  const closeReport = () => {
    setSelectedReport(null);
    setIsReportVisible(false);
    setIsSubcategorySelected(false);
  };

  const handleBackgroundClick = (event) => {
    if (isSubcategorySelected) {
      // Закрываем отчет, только если выбрана подкатегория с отчетом
      const selectedSubcategory = selectedSubcategories[selectedSubcategories.length - 1];
      if (categories[selectedCategory][selectedSubcategory] && categories[selectedCategory][selectedSubcategory].link) {
        closeReport();
      }
      setIsSubcategorySelected(false);
    }
  };

  const handleSubcategoryClick = (subcategory, subcategoryInfo) => {
    setSubcategoryButtonStates((prevStates) => ({ ...prevStates, [subcategory]: !prevStates[subcategory] }));
  
    if (subcategoryInfo && subcategoryInfo.link) {
      if (subcategoryInfo.isPdf) {
        window.open(subcategoryInfo.link, '_blank');
      } else {
        setIsSubcategorySelected(true);
        if (isReportVisible && lastClickedButton == subcategory) {
          closeReport();
          setLastClickedButton(null);
        } else {
          if (lastClickedButton && lastClickedButton !== subcategory) {
            setSubcategoryButtonStates((prevButtonStates) => ({ ...prevButtonStates, [lastClickedButton]: false }));
          }
          openReport(subcategoryInfo);
          setLastClickedButton(subcategory);
        }
      }
    } else if (selectedSubcategories.includes(subcategory)) {
      setOpenSubcategories(prevOpenSubcategories => prevOpenSubcategories.filter(item => item !== subcategory));
      setSelectedSubcategories(prevSelectedSubcategories => prevSelectedSubcategories.filter(item => item !== subcategory));
      setIsSubcategorySelected(false);
  
      if (isReportVisible && lastClickedButton == subcategory) {
        closeReport();
      }
    } else {
      setOpenSubcategories([...openSubcategories, subcategory]);
      setSelectedSubcategories([...selectedSubcategories, subcategory]);
      setIsSubcategorySelected(true);
    }
  };
  


  const renderSubcategories = (subcategories) => {
    if (!subcategories) {
      return null;
    }
  
    

    return (
      <div className='subcategories'>
      {Object.keys(subcategories).map((subcategory) => (
        <div key={subcategory} className={`Category`}>
          <Button className='but_otchet' onClick={() => handleSubcategoryClick(subcategory, subcategories[subcategory])}
          style={{whiteSpace:'normal', backgroundColor: subcategoryButtonStates[subcategory] ? '#B2B4D9' : '#EBECFC', color: '#0E0E15' }}> 
            {subcategory}
          </Button>
          {selectedSubcategories.includes(subcategory) && renderSubcategories(subcategories[subcategory])}
        </div>
      ))}
    </div>
    );
  };

  const categories = {
    'Развитие МСП': {
      'Меры поддержки': {
        'Меры муниципальной поддержки МСП': {
          name: 'Меры муниципальной поддержки МСП',
          link: 'https://app.powerbi.com/view?r=eyJrIjoiOTY3Njc0ZTUtZTAxMi00ZGYzLWIzOGItOTVjMjdlODcyOGMwIiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9',
        },
        'Меры поддержки МСП кредитными организациями': {
          name: 'Меры поддержки МСП кредитными организациями',
          link: 'https://app.powerbi.com/view?r=eyJrIjoiOTlkZWQ2NTUtZGYzNi00MTBlLThlZTYtODZiNmFiYmI4NmI4IiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9',
        },
        'Меры региональной поддержки МСП': {
          name: 'Меры региональной поддержки МСП',
          link: 'https://app.powerbi.com/view?r=eyJrIjoiZWU1MTRjNzktYWE2Mi00MmVlLTliMmEtMGUxNTUxNmYzYWVjIiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9',
        },
        'Меры федеральной поддержки МСП': {
          name: 'Меры федеральной поддержки МСП',
          link: 'https://app.powerbi.com/view?r=eyJrIjoiZmEzMzU5ODctYzgwMi00MjRlLWI0MjMtMmE3NGM3OWU1MzVlIiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9',
        },
        'Фонды': {
          name: 'Фонды',
          link: 'https://app.powerbi.com/view?r=eyJrIjoiODVjYzgzODUtY2M3ZC00NTk1LTllMmUtMTYyMjNlYzkxYzkwIiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9',
        },
      },
      'Общая информация': {
        'Статистические данные МСП': {
          name: 'Статистические данные МСП',
          link: 'https://app.powerbi.com/view?r=eyJrIjoiNGU4NDYzYmYtMzgzNi00YWQxLTljYTYtNTUwMWY2ZGYwNDlmIiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9',
        },
      },
    },
    'Исследования': {
      'Исследование рынка': {
        'Локальный рынок': {
          'Досуг': {
            'Детские учреждения': {
              '2022': {
                name: 'Детские учреждения 2022г.',
                link: 'https://app.powerbi.com/view?r=eyJrIjoiMDk5OTQ5MjctMTlhMi00ZTFlLWFkYzYtNDBlOTU1NmQ0MzgzIiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9',
              },
              '2023': {
                name: 'Детские учреждения 2023г.',
                link: 'https://app.powerbi.com/view?r=eyJrIjoiYmEyNWYyNDMtMWJmNi00MGJjLTk4MTgtYWRiOGFiNDMyOWI5IiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9',
              },
            },
          },
          'Бытовые': {
            ' 2022': {
              name: 'Бытовые 2022г.',
              link: 'https://app.powerbi.com/view?r=eyJrIjoiN2Y4MzJhNDQtYTBjMC00ZDM5LWFjYjAtYjVhM2E1MjQzM2NjIiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9',
            },
            ' 2023': {
              name: 'Бытовые 2023г.',
              link: 'https://app.powerbi.com/view?r=eyJrIjoiMzcwYzllZDMtNDkzZi00MTA2LWE3NTItMjJjMzg1YzgwZTcwIiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9',
            },
          },
          'Логистика': {
            'Компании по доставке грузов': {
              '2022 ': {
                name: 'Компании по доставке грузов 2022г.',
                link: 'https://app.powerbi.com/view?r=eyJrIjoiMGNhNWQwYjAtNzRiMC00ZGI0LWJiOTMtNmVkMzgzYTU1ZWU4IiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9',
              },
              '2023 ': {
                name: 'Компании по доставке грузов 2023г.',
                link: 'https://app.powerbi.com/view?r=eyJrIjoiMWY2YTczYTQtMDI5NS00YjkwLTg5ODktZTVlMGQyOTI0NDQ0IiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9',
              },
            },
          },
          'IT-услуги': {
            name: 'IT-услуги',
            link: 'https://app.powerbi.com/view?r=eyJrIjoiNTYzYTM5YTItN2ViNi00MzVkLTkzMGItNDU4NDYyMzBmOTIwIiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9',
          },
          'Рестораны и гостиницы': {
            ' 2022 ': {
              name: 'Рестораны и гостиницы 2022г.',
              link: 'https://app.powerbi.com/view?r=eyJrIjoiMGQ0ZjI5ODAtMDE2Yy00ZTZhLThmOTktNzExMjVhYjNiZGY1IiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9',
            },
            ' 2023 ': {
              name: 'Рестораны и гостиницы 2023г.',
              link: 'https://app.powerbi.com/view?r=eyJrIjoiMjE0YmJhZmUtZTg4Ny00YmFjLWJmMDEtY2E2OTlkNGNjOTNlIiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9',
            },
          },
        },
      },
      'Исследование кадров': {
        'Платформа по кадрам': {
          name: 'Платформа по кадрам',
          link: 'https://app.powerbi.com/view?r=eyJrIjoiMTI0YmFjN2UtMWZkYy00YzlmLWI4ZjUtYzM0N2VmNDIwZjM0IiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9',
        },
      },
      'Исследование недвижимости': {
        'Государственная': {
          'Муниципальная': {
            name: 'Муниципальная недвижимость',
            link: 'https://app.powerbi.com/view?r=eyJrIjoiMTlmN2JiY2ItYzg4ZC00MTE1LWIxYTgtMGJkMzJlMjQ5N2I2IiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9',
          },
        },
        'Частная': {
          'ЗФ ПАО ГМК "Норникель"': {
            name: 'ЗФ ПАО ГМК "Норникель"',
            link: 'https://app.powerbi.com/view?r=eyJrIjoiODE1ODViZmMtODkxMy00Mzg4LTlhYWQtY2RkNWE0Y2EwZmY0IiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9',
          },
          'Физ. лица': {
            '  2022 ': {
              name: 'Физ. лица 2022г.',
              link: 'https://app.powerbi.com/view?r=eyJrIjoiNjU4NTI1ZWYtYTBlNC00ZmEyLTg3ODktMTY1ZTRlMTM0YmU2IiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9',
            },
            '  2023 ': {
              name: 'Физ. лица 2023г.',
              link: 'https://app.powerbi.com/view?r=eyJrIjoiYzE1NDMxNWMtZTc1Yy00NTY5LTkxMTEtZWNkNzg0ZjgyZjQzIiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9',
            },
          },
        },
      },
    },
    'Инвестиционный ландшафт': {
      'В работе...': {
        name: '...',
        link: './Проведение_комплексного_исследования_условий_ведения_бизнеса_в_Норильске.pdf',
        isPdf: true,
      },
    },
    // Другие категории и подкатегории
  };

  return (
    <div className='123'>
      <div className='background' style={{ height: isSubcategoriesOpen ? 'auto' : 'initial' }} onClick={handleBackgroundClick}>
        <Text backgroundColor={'#4856DC'} color={'#EBECFC'} fontSize={'3em'} marginTop={'1em'}>
          Интерактивные bi отчеты условий ведения бизнеса в городе Норильске
        </Text>
        <div className={`reports`} onClick={handleBackgroundClick}>
          {Object.keys(categories).map((category) => (
            <div key={category} className={`NameCategory`}>
              <Button className='but_otchet' onClick={() => handleCategoryClick(category, categories[category])}
              style={{ whiteSpace:'normal', backgroundColor: categoryButtonStates[category] ? '#B2B4D9' : '#EBECFC', color: '#0E0E15' }}>
                {category}
              </Button>
              {selectedCategory === category && renderSubcategories(categories[category])}
            </div>
          ))}
        </div>
      </div>
      <div className='sam_otchet' onClick={handleBackgroundClick} style={{ display: isReportVisible ? '' : 'none' }}>
        {selectedReport && (
          <div className='qwe'>
            <Report reportInfo={selectedReport} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Otchet;