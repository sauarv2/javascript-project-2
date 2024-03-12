// const dayjs = require('dayjs')


const day =  document.querySelector(".day");


const c =  dayjs();
       const op =  c.format("DD/MMM/YYYY ---h:MM A");

        day.textContent =  op;