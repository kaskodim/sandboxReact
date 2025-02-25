import React, {useState} from 'react';
import {Select} from './components/Select/Select';


export type ListOfCities = {
    name: string;
    value: string;
}

const initialState: ListOfCities[] = [
    {name: 'Москва', value: 'moscow'},
    {name: 'Санкт-Петербург', value: 'saint_petersburg'},
    {name: 'Новосибирск', value: 'novosibirsk'},
    {name: 'Екатеринбург', value: 'ekaterinburg'},
    {name: 'Казань', value: 'kazan'},
    {name: 'Нижний Новгород', value: 'nizhny_novgorod'},
    {name: 'Челябинск', value: 'chelyabinsk'},


]


export const Parent = () => {

    const [currentValue, setCurrentValue] = useState('');

    return (
        <div>
            <Select value={currentValue}
                    placeholder={'выбери город...'}
                    onChange={setCurrentValue}
                    options={initialState}
            />

        </div>
    );
};

