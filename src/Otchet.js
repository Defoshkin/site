import { Text } from '@chakra-ui/react';
import React, { useState } from 'react';
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
  
  const Report = ({ link }) => (
    <iframe className='reported' title="Report Section"  src={link} frameBorder="0" allowFullScreen="true"></iframe>
  );

const Otchet = () => {

    const [selectedReport, setSelectedReport] = useState(null);
    const [isReportVisible, setIsReportVisible] = useState(false);

    const handleReportClick = (report) => {
        setSelectedReport(report);
        setIsReportVisible(true);
    };
    const handleCloseReport = () => {
        setSelectedReport(null);
        setIsReportVisible(false);
      };
      const handleBackgroundClick = (event) => {
        // Проверяем, был ли клик на фоне
        if (
          event.target.classList.contains('NameCategory') ||
          event.target.classList.contains('background') ||
          event.target.classList.contains('sam_otchet') ||
          event.target.classList.contains('1111') ||
          event.target.classList.contains('123') 
        ) {
          handleCloseReport();
        }
      };

    return (
        <div className='123'>
          <div className='background' onClick={handleBackgroundClick}>
            <Text backgroundColor={'#4856DC'} color={'#EBECFC'} fontSize={'3em'}>Интерактивные BI отчеты социально-экономической среды города Норильска</Text>
            <div className='reports' onClick={handleBackgroundClick}>
              <div className='NameCategory' onClick={handleBackgroundClick}> 
                <Text backgroundColor={'#4856DC'} color={'#EBECFC'} fontSize={'3em'}>Компании</Text>
                <ReportGrid reports={Company} onReportClick={handleReportClick} />
              </div>
              <div className='NameCategory' onClick={handleBackgroundClick}>
                <Text backgroundColor={'#4856DC'} color={'#EBECFC'} fontSize={'3em'}>Меры</Text>
                <ReportGrid reports={Meri} onReportClick={handleReportClick} />
              </div>
              <div className='NameCategory' onClick={handleBackgroundClick}> 
                <Text backgroundColor={'#4856DC'} color={'#EBECFC'} fontSize={'3em'}>Недвижимость</Text>
                <ReportGrid reports={Nedviz} onReportClick={handleReportClick} />
              </div>
            </div>
          </div>
          <div className='sam_otchet' onClick={handleBackgroundClick} style={{ display: isReportVisible ? '' : 'none' }}>
            {selectedReport && (
              <div className='qwe'>
                <Report link={selectedReport.link} />
              </div>
            )}
          </div>
        </div>
    );
};

export default Otchet;