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
                date && date.map((index)=>{
                    return <p key={index.toString()}>{index}</p>
                })
            }
        </Wrap>
    )
}

export default Calendar;