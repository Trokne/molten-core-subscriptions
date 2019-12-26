import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="column title">
          <div className="head">
            MOLTEN CORE ONLINE
          </div>
          <div className="description">
            Граница между жизнью и смертью! 
            Получите возможность испытать свои силы в поединке с мощнейшими лейтенантами Рагнароса и в конце встретьтесь 
            с Повелителем Огня лицом к лицу прямо на его троне, в Крепости Сульфурона!
            </div>
        </div>
        <div className="column buy-column"> 
          <a class="buy-button" href="https://sandbox-secure.xsolla.com/paystation3/?access_data=%7B%22purchase%22%3A%7B%22pin_codes%22%3A%7B%22codes%22%3A%5B%7B%22digital_content%22%3A%22molten_core_2%22%7D%5D%7D%7D%2C%22settings%22%3A%7B%22project_id%22%3A51343%2C%22currency%22%3A%22USD%22%2C%22mode%22%3A%22sandbox%22%7D%7D">ПРЕДЗАКАЗ</a>
        </div>
      </div>
    </div>
  );
}

export default App;
