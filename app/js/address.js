export default function () {
  let parent = document.querySelector('.address');
  if (!parent) return;
  let list = document.querySelector('.address__list');
  let select = document.querySelector('.address__select');
  let input = document.querySelector('.address__search input');

  fetch('/json/address.json')
    .then(response => response.json())
    .then(data => {
      if (data?.Лист1?.length) {
        let currentPage = 1;
        const itemsPerPage = 9; // Количество элементов на странице
        let filteredData = [...data?.Лист1]; // Скопировать данные для фильтрации
        let uniqueCities = [];
        data.Лист1.filter(item => {
          // Приводим город к нижнему регистру и удаляем пробелы
          let city = item["ГОРОД"].replace(/\s{2,}/g, ' ').trim();

          if (!uniqueCities.includes(city)) {
            uniqueCities.push(city);
            return true;
          }
          return false;
        });

        uniqueCities = uniqueCities.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));


        function renderSelect(array) {
          select.innerHTML = '<div data-value="Все">Все</div>'
          array.forEach(element => {
            select.insertAdjacentHTML('beforeend', `
            <div data-value="${element}">${element}</div>
          `)
          })
        }
        renderSelect(uniqueCities)

        // data.Лист1.forEach(element => {
        //   list.insertAdjacentHTML('beforeend', `
        //     <div class="address__item" id="${element.АДРЕС}" data-city="${element.ГОРОД}">
        //       <div class="address__title">${element['СЕТЬ МАГАЗИНОВ']}</div>
        //       <div class="address__address">${element.АДРЕС}</div>
        //     </div>
        //   `)
        // });

        function displayData(page) {
          list.innerHTML = ''; // Очистить контейнер

          // Определить индекс начала и конца для текущей страницы
          const start = (page - 1) * itemsPerPage;
          const end = start + itemsPerPage;
          const paginatedData = filteredData.slice(start, end);

          // Отобразить данные
          paginatedData.forEach(element => {
            list.insertAdjacentHTML('beforeend', `
                  <div class="address__item" id="${element.АДРЕС}" data-city="${element.ГОРОД}">
                    <div class="address__title">${element['СЕТЬ МАГАЗИНОВ']}</div>
                    <div class="address__address">${element.АДРЕС}</div>
                  </div>
                `)
          });

          // Обновить пагинацию
          displayPagination();
        }



        // Функция для отображения пагинации
        function displayPagination() {
          const paginationContainer = document.getElementById("pagination");
          paginationContainer.innerHTML = ''; // Очистить контейнер

          const totalPages = Math.ceil(filteredData.length / itemsPerPage);

          // Создание кнопок для каждой страницы
          for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement("button");
            button.textContent = i;
            button.disabled = (i === currentPage); // Отключить текущую страницу
            button.addEventListener('click', () => {
              currentPage = i;
              displayData(currentPage);
            });
            paginationContainer.appendChild(button);
          }
        }


        // Функция для фильтрации данных
        function applyFilter() {
          const filterInput = document.getElementById("filter").value.toLowerCase();
          filteredData = data.filter(item => item.name.toLowerCase().includes(filterInput));
          currentPage = 1; // Сбросить на первую страницу после фильтрации
          displayData(currentPage);
        }

        // Первоначальное отображение данных
        displayData(currentPage);

        select.addEventListener('click', (e) => {
          const value = e.target.dataset.value;
          console.log(value);
          filterAddress(value)
          select.classList.remove('open')
          input.value = value
        })

        input.addEventListener('input', (e) => {
          const value = e.target.value;
          console.log(value);
          const res = smartSearch(value, uniqueCities);
          renderSelect(res);
        })

        input.addEventListener('click', (e) => {
          renderSelect(uniqueCities)
          select.classList.add('open')
          input.select();
        })

        document.addEventListener('click', (e) => {
          if (!e.target.closest('.address__search')) {
            select.classList.remove('open')
          }
        })

        function filterAddress(value) {
            const filterInput = value.replace(/\s+/g, '').toUpperCase().trim();
            if (value === 'Все') {
              filteredData = data?.Лист1;
            } else {
              filteredData = data?.Лист1.filter(city => {
                return city['ГОРОД'].toUpperCase().replace(/\s+/g, '').trim() === filterInput
              });
            }
            currentPage = 1; // Сбросить на первую страницу после фильтрации
            displayData(currentPage);
        }


        function smartSearch(query, items) {
          // Преобразуем запрос и элементы массива к нижнему регистру для нечувствительности к регистру
          const lowerCaseQuery = query.toLowerCase();

          return items.filter(item => {
            const lowerCaseItem = item.toLowerCase();
            // Условие: элемент начинается с запроса или содержит запрос
            return lowerCaseItem.startsWith(lowerCaseQuery) || lowerCaseItem.includes(lowerCaseQuery);
          });
        }
      }
    })
}