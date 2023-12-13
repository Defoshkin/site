import React, { useState } from 'react';
import {Text, Button } from '@chakra-ui/react';
import ReactDOM from 'react-dom';

const ReportForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    companyName: '',
    phone: '',
    requirements: '',
  });
  const handleBackgroundClick = (e) => {
    // Проверяем, что клик произошел на фоне модального окна (не на самой форме)
    if (e.target.classList.contains('modal-background')) {
      onClose(); // Закрываем форму
    }
  };

  const handleCloseButtonClick = () => {
    onClose(); // Закрываем форму
  };
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    companyName: '',
    phone: '',
    requirements: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Очищаем ошибку при изменении значения
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validateForm = () => {
    const errors = {};

    // Пример валидации для телефона (требуется, чтобы были только цифры)
    if (!/^[0-9+]+$/.test(formData.phone)) {
      errors.phone = '*';
    }
    const nameFields = ['firstName', 'lastName', 'middleName'];
    nameFields.forEach((fieldName) => {
      if (!/^[A-Za-zА-Яа-я]+$/.test(formData[fieldName])) {
        errors[fieldName] = '*';
      }
    });
  
    // Валидация для Названия компании и Требований (не должны быть пустыми)
    const nonEmptyFields = ['companyName', 'requirements'];
    nonEmptyFields.forEach((fieldName) => {
      if (!formData[fieldName].trim()) {
        errors[fieldName] = '*';
      }
    });
    // Добавьте другие правила валидации для других полей

    setFormErrors(errors);
    return Object.values(errors).every((error) => error === '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        // Отправка данных формы боту
        const response = await fetch(
          `https://api.telegram.org/bot6315467720:AAHhv34zUhUC7M3YmBHYt15JpSBwChvYJeM/sendMessage`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              chat_id: '1481300654',
              text: `Новая форма!\n\nИмя: ${formData.firstName}\nФамилия: ${formData.lastName}\nОтчество: ${formData.middleName}\nНазвание компании: ${formData.companyName}\nТелефон: ${formData.phone}\nТребования: ${formData.requirements}`,
            }),
          }
        );
  
        const result = await response.json();
        console.log(result);
  
        // Опционально: выполнить дополнительные действия после успешной отправки данных
        console.log('Данные успешно отправлены:', formData);
  
      } catch (error) {
        console.error('Ошибка при отправке данных:', error);
      }
      // Закрыть форму после отправки данных
      onClose();
    } else {
      console.log('Форма содержит ошибки. Пожалуйста, проверьте введенные данные.');
    }
  };

  const modalContainerStyle = {
    backgroundColor: '#EBECFC',
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40em',
    height: '40em',
    padding: '2em',
    margin: '0 auto', // Центрирование по горизонтали
    borderRadius: '30px',
    zIndex: 1000,
  };
  
  const labelStyle = {
    backgroundColor: '#EBECFC',
    marginBottom: '10px',
    paddingBottom: '20px', // Уменьшено расстояние между label
    fontSize: '2em',
  };
  
  const inputStyle = {
    backgroundColor: '#EBECFC',
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
    marginTop: '5px',
    marginBottom: '10px',
    borderRadius: '10px',
  };
  
  const buttonStyle = {
    backgroundColor: '#4856DC',
    color: '#EBECFC',
    fontSize: '16px',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px', // Увеличено расстояние между полем и кнопкой
  };
  
  // Медиа-запрос для мобильных устройств

  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255, 0, 0, 0.5)', zIndex: 999 }} className="modal-background" onClick={handleBackgroundClick}></div>
      <div className="form-container">
        <form style={{ backgroundColor: '#EBECFC' }} onSubmit={handleSubmit}>
          <label style={labelStyle}>
            Имя:
            <span style={{ color: 'red', backgroundColor: '#EBECFC' }}>{formErrors.firstName}</span>
            <input style={inputStyle} type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          </label>
          <label style={labelStyle}>
            Фамилия:
            <span style={{ color: 'red', backgroundColor: '#EBECFC' }}>{formErrors.lastName}</span>
            <input style={inputStyle} type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          </label>
          <label style={labelStyle}>
            Отчество:
            <span style={{ color: 'red', backgroundColor: '#EBECFC' }}>{formErrors.middleName}</span>
            <input style={inputStyle} type="text" name="middleName" value={formData.middleName} onChange={handleChange} />
          </label>
          <label style={labelStyle}>
            Название компании:
            <span style={{ color: 'red', backgroundColor: '#EBECFC' }}>{formErrors.companyName}</span>
            <input style={inputStyle} type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
          </label>
          <label style={labelStyle}>
            Телефон:
            <span style={{ color: 'red', backgroundColor: '#EBECFC' }}>{formErrors.phone}</span>
            <input style={inputStyle} type="tel" name="phone" value={formData.phone} onChange={handleChange} />
          </label>
          <label style={labelStyle}>
            Требования:
            <span style={{ color: 'red', backgroundColor: '#EBECFC' }}>{formErrors.requirements}</span>
            <input style={{ width: '100%', height: '100px', borderRadius: '10px', padding: '10px', boxSizing: 'border-box', marginTop: '5px', backgroundColor: '#EBECFC' }} name="requirements" value={formData.requirements} onChange={handleChange} />
          </label>
          <div className='buttons'>
            <button style={buttonStyle} type="submit">
              Отправить
            </button>
            <button style={buttonStyle} onClick={handleCloseButtonClick}>
              Закрыть
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
const MainPage = () => {
    const [isFormVisible, setFormVisible] = useState(false);

    const handleButtonClick = () => {
      setFormVisible(true);
    };

    const handleFormClose = () => {
      setFormVisible(false);
    };
  
    return (
        <div>
            <div className='main_page'>
        <div className='main'>
          <div className='pustota'/>
          <div className='oglavlenie'> 
              <Text backgroundColor={"#4856DC"} color={"#F1EFEA"} fontSize={"6em"}>Лаборатория</Text>
              <Text backgroundColor={"#4856DC"} color={"#F1EFEA"} fontSize={"6em"}>социально-экономических</Text>
              <Text backgroundColor={"#4856DC"} color={"#F1EFEA"} fontSize={"6em"}>исследований ЗГУ</Text>
              <Button marginTop={"30px"}
                backgroundColor={"#F1EFEA"}
                width={"40%"}
                height={"3em"}
                fontSize={"2em"}
                borderRadius={"30"}
                border={'none'}
                onClick={handleButtonClick}
              >
                Заказать отчет
              </Button>

              {isFormVisible && ReactDOM.createPortal(
                <div className="modal-container">
                  <ReportForm onClose={handleFormClose} />
                </div>,
                document.getElementById('portal-root')
              )}
          </div>
          <svg className='lines' xmlns="http://www.w3.org/2000/svg">
            <line x1="1.99506" y1="-1.50657" x2="624.995" y2="823.493" stroke="#F7F7FF" strokeWidth="5"/>
            <line x1="235.396" y1="310.714" x2="3.396" y2="1089.71" stroke="#F7F7FF" strokeWidth="5"/>
            <line x1="109.382" y1="738.241" x2="216.382" y2="1074.24" stroke="#F7F7FF" strokeWidth="5"/>
            <path d="M149.5 863.5L434.5 896.5" stroke="#F7F7FF" stroke-width="5"/>
            <path d="M151.5 859.505L482.5 636.5" stroke="#F7F7FF" stroke-width="5"/>
            <path d="M269.523 1081.15L569 752" stroke="#F7F7FF" stroke-width="5"/>
            <line x1="216.353" y1="383.154" x2="340.353" y2="728.154" stroke="#F7F7FF" strokeWidth="5"/>
            <line x1="361.803" y1="477.807" x2="621.803" y2="-1.19264" stroke="#F7F7FF" strokeWidth="5"/>
            <path d="M627.115 583.781L473 268.662" stroke="#F7F7FF" stroke-width="5"/>
            <line x1="402.564" y1="402.563" x2="309.564" y2="0.563495" stroke="#F7F7FF" strokeWidth="5"/>
            <line x1="471.289" y1="1.00556" x2="366.289" y2="240.006" stroke="#F7F7FF" strokeWidth="5"/>
            <line x1="126.662" y1="161.888" x2="317.662" y2="40.8881" stroke="#F7F7FF" strokeWidth="5"/>
            <line x1="380.808" y1="957.634" x2="623.808" y2="1040.63" stroke="#F7F7FF" strokeWidth="5"/>
          </svg>

        </div>

      </div>
        </div>
    );
};

export default MainPage;