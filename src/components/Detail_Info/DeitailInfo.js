import React from 'react';
import './DetailIfo.css'

export default ({user}) => (
    <div className="info">
        <p>Выбран пользователь <b>{user.firstName + ' ' + user.lastName}</b></p>
        Описание: <br/>
        <textarea className="description" defaultValue={user.description}></textarea>
        <p>Адрес проживания: <b>{user.address.streerAddress}</b></p>
        <p>Город: <b>{user.address.city}</b></p>
        <p>Провинция/штат: <b>{user.address.state}</b></p>
        <p>Индекс: <b>{user.address.zip}</b></p>
    </div>
)