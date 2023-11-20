import React, { useState } from 'react';
import ReportGrid from './ReportGrid';

const reportsData = [
    { name: 'Компании предоставляющее IT услуги', link: 'https://app.powerbi.com/view?r=eyJrIjoiNTYzYTM5YTItN2ViNi00MzVkLTkzMGItNDU4NDYyMzBmOTIwIiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9' },
    { name: 'Компании предоставляющее Бытовые услуги', link: 'https://app.powerbi.com/view?r=eyJrIjoiN2Y4MzJhNDQtYTBjMC00ZDM5LWFjYjAtYjVhM2E1MjQzM2NjIiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9' },
    { name: 'ПАО ГМК “Норильский никель”', link: 'https://app.powerbi.com/view?r=eyJrIjoiODE1ODViZmMtODkxMy00Mzg4LTlhYWQtY2RkNWE0Y2EwZmY0IiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9' },
    { name: 'Рестораны и гостиницы', link: 'https://app.powerbi.com/view?r=eyJrIjoiMGQ0ZjI5ODAtMDE2Yy00ZTZhLThmOTktNzExMjVhYjNiZGY1IiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9' },
    { name: 'Компании по доставке грузов', link: 'https://app.powerbi.com/view?r=eyJrIjoiMGNhNWQwYjAtNzRiMC00ZGI0LWJiOTMtNmVkMzgzYTU1ZWU4IiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9' },
    { name: 'Муниципальная собственность', link: 'https://app.powerbi.com/view?r=eyJrIjoiMTlmN2JiY2ItYzg4ZC00MTE1LWIxYTgtMGJkMzJlMjQ5N2I2IiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9' },
    { name: 'Детские учреждения', link: 'https://app.powerbi.com/view?r=eyJrIjoiMDk5OTQ5MjctMTlhMi00ZTFlLWFkYzYtNDBlOTU1NmQ0MzgzIiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9' },
    { name: 'Имущество физических лиц', link: 'https://app.powerbi.com/view?r=eyJrIjoiNjU4NTI1ZWYtYTBlNC00ZmEyLTg3ODktMTY1ZTRlMTM0YmU2IiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9' },
    { name: 'Муниципальный бюджет', link: 'https://app.powerbi.com/view?r=eyJrIjoiOTY3Njc0ZTUtZTAxMi00ZGYzLWIzOGItOTVjMjdlODcyOGMwIiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9' },
    { name: 'Кредитные оганизации', link: 'https://app.powerbi.com/view?r=eyJrIjoiOTlkZWQ2NTUtZGYzNi00MTBlLThlZTYtODZiNmFiYmI4NmI4IiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9' },
    { name: 'Региональная поддержка', link: 'https://app.powerbi.com/view?r=eyJrIjoiZWU1MTRjNzktYWE2Mi00MmVlLTliMmEtMGUxNTUxNmYzYWVjIiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9' },
    { name: 'Федеральная поддержка', link: 'https://app.powerbi.com/view?r=eyJrIjoiZmEzMzU5ODctYzgwMi00MjRlLWI0MjMtMmE3NGM3OWU1MzVlIiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9' },
    { name: 'Фонды', link: 'https://app.powerbi.com/view?r=eyJrIjoiODVjYzgzODUtY2M3ZC00NTk1LTllMmUtMTYyMjNlYzkxYzkwIiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9' },
  ];
  
  const Report = ({ link }) => (
    <iframe title="Report Section" width="1500" height="800" src={link} frameBorder="0" allowFullScreen="true"></iframe>
  );

const Otchet = () => {

    const [selectedReport, setSelectedReport] = useState(null);

    const handleReportClick = (report) => {
        setSelectedReport(report);
    };
    const handleCloseReport = () => {
        setSelectedReport(null);
      };
      const handleBackgroundClick = (event) => {
        // Проверяем, был ли клик на фоне
        if (event.target.classList.contains('background')) {
          handleCloseReport();
        }
      };
    const backgroundHeight = selectedReport ? '1700px' : '800px';

    return (
        <div className='background' style={{ height: backgroundHeight}} onClick={handleBackgroundClick}>
           <ReportGrid reports={reportsData} onReportClick={handleReportClick} />
           <div style={{ display: 'flex', justifyContent: 'center' }}>
                {selectedReport && (
                <div>
                <Report link={selectedReport.link} />
              </div>
                )}
           </div>
        </div>
    );
};

export default Otchet;