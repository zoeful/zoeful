import React, { useEffect, useState } from 'react';
import styled from 'styled-components'

const Wrap = styled.div`
    width: 0;
    height: 0;
    background-color: #fff;
    border-radius: 10px;
    display: none;
    transform: scale(0,0);
    transition: all .3s;
    ${({className})=>{
        return className === 'active' ? 
          `
            width: 90%;
            height: 90%;
            display: block;
            transform: scale(1,1);
          `
          : null;
      }}
`;


// ================================
// START YOUR APP HERE
// ================================
const init = {
    monList: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    dayList: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    today: new Date(),
    monForChange: new Date().getMonth(),
    activeDate: new Date(),
    getFirstDay: (yy, mm) => new Date(yy, mm, 1),
    getLastDay: (yy, mm) => new Date(yy, mm + 1, 0),
    nextMonth: function () {
      let d = new Date();
      d.setDate(1);
      d.setMonth(++this.monForChange);
      this.activeDate = d;
      return d;
    },
    prevMonth: function () {
      let d = new Date();
      d.setDate(1);
      d.setMonth(--this.monForChange);
      this.activeDate = d;
      return d;
    },
    addZero: (num) => (num < 10) ? '0' + num : num,
    activeDTag: null,
    getIndex: function (node) {
      let index = 0;
      while (node = node.previousElementSibling) {
        index++;
      }
      return index;
    }
  };
  
  const $calBody = document.querySelector('.cal-body');
  const $btnNext = document.querySelector('.btn-cal.next');
  const $btnPrev = document.querySelector('.btn-cal.prev');
  
  /**
   * @param {number} date
   * @param {number} dayIn
  */
  function loadDate (date, dayIn) {
    document.querySelector('.cal-date').textContent = date;
    document.querySelector('.cal-day').textContent = init.dayList[dayIn];
  }
  
  /**
   * @param {date} fullDate
   */
  function loadYYMM (fullDate) {
    let yy = fullDate.getFullYear();
    let mm = fullDate.getMonth();
    let firstDay = init.getFirstDay(yy, mm);
    let lastDay = init.getLastDay(yy, mm);
    let markToday;  // for marking today date
    
    if (mm === init.today.getMonth() && yy === init.today.getFullYear()) {
      markToday = init.today.getDate();
    }
  
    document.querySelector('.cal-month').textContent = init.monList[mm];
    document.querySelector('.cal-year').textContent = yy;
  
    let trtd = '';
    let startCount;
    let countDay = 0;
    for (let i = 0; i < 6; i++) {
      trtd += '<tr>';
      for (let j = 0; j < 7; j++) {
        if (i === 0 && !startCount && j === firstDay.getDay()) {
          startCount = 1;
        }
        if (!startCount) {
          trtd += '<td>'
        } else {
          let fullDate = yy + '.' + init.addZero(mm + 1) + '.' + init.addZero(countDay + 1);
          trtd += '<td class="day';
          trtd += (markToday && markToday === countDay + 1) ? ' today" ' : '"';
          trtd += ` data-date="${countDay + 1}" data-fdate="${fullDate}">`;
        }
        trtd += (startCount) ? ++countDay : '';
        if (countDay === lastDay.getDate()) { 
          startCount = 0; 
        }
        trtd += '</td>';
      }
      trtd += '</tr>';
    }
    $calBody.innerHTML = trtd;
  }
  
  /**
   * @param {string} val
   */
  function createNewList (val) {
    let id = new Date().getTime() + '';
    let yy = init.activeDate.getFullYear();
    let mm = init.activeDate.getMonth() + 1;
    let dd = init.activeDate.getDate();
    const $target = $calBody.querySelector(`.day[data-date="${dd}"]`);
  
    let date = yy + '.' + init.addZero(mm) + '.' + init.addZero(dd);
  
    let eventData = {};
    eventData['date'] = date;
    eventData['memo'] = val;
    eventData['complete'] = false;
    eventData['id'] = id;
    init.event.push(eventData);
    $todoList.appendChild(createLi(id, val, date));
  }
  
  loadYYMM(init.today);
  loadDate(init.today.getDate(), init.today.getDay());
  
  $btnNext.addEventListener('click', () => loadYYMM(init.nextMonth()));
  $btnPrev.addEventListener('click', () => loadYYMM(init.prevMonth()));
  
  $calBody.addEventListener('click', (e) => {
    if (e.target.classList.contains('day')) {
      if (init.activeDTag) {
        init.activeDTag.classList.remove('day-active');
      }
      let day = Number(e.target.textContent);
      loadDate(day, e.target.cellIndex);
      e.target.classList.add('day-active');
      init.activeDTag = e.target;
      init.activeDate.setDate(day);
      reloadTodo();
    }
  });
  


const Calendar = ()=>{
    const [display, setDisplay] = useState('');

    const date = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

    useEffect(()=>{
        setTimeout(()=>{
            setDisplay('active');
          },2000);
    },[]);
    return (
        <Wrap className={display}>
            {
                <div className="container">
                    <div className="my-calendar clearfix">
                        <div className="clicked-date">
                        <div className="cal-day"></div>
                        <div className="cal-date"></div>
                        </div>
                        <div className="calendar-box">
                        <div className="ctr-box clearfix">
                            <button type="button" title="prev" className="btn-cal prev">
                            </button>
                            <span className="cal-month"></span>
                            <span className="cal-year"></span>
                            <button type="button" title="next" className="btn-cal next">
                            </button>
                        </div>
                        <table className="cal-table">
                            <thead>
                            <tr>
                                <th>S</th>
                                <th>M</th>
                                <th>T</th>
                                <th>W</th>
                                <th>T</th>
                                <th>F</th>
                                <th>S</th>
                            </tr>
                            </thead>
                            <tbody className="cal-body"></tbody>
                        </table>
                        </div>
                    </div>
                </div>
            }
        </Wrap>
    )
}

export default Calendar;