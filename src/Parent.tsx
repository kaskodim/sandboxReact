import React, {useState} from 'react';
import {Select} from './components/Select/Select';


export type ListOfCities = {
    name: string;
    value: string;
}

const initialState: ListOfCities[] = [
    { name: 'Москва', value: 'moscow' },
    { name: 'Санкт-Петербург', value: 'saint_petersburg' },
    { name: 'Севастополь', value: 'sevastopol' },
    { name: 'Архангельск', value: 'arkhangelsk' },
    { name: 'Астрахань', value: 'astrakhan' },
    { name: 'Белгород', value: 'belgorod' },
    { name: 'Брянск', value: 'bryansk' },
    { name: 'Владимир', value: 'vladimir' },
    { name: 'Волгоград', value: 'volgograd' },
    { name: 'Вологда', value: 'vologda' },
    { name: 'Воронеж', value: 'voronezh' },
    { name: 'Иваново', value: 'ivanovo' },
    { name: 'Иркутск', value: 'irkutsk' },
    { name: 'Калининград', value: 'kaliningrad' },
    { name: 'Калуга', value: 'kaluga' },
    { name: 'Кемерово', value: 'kemerovo' },
    { name: 'Киров', value: 'kirov' },
    { name: 'Кострома', value: 'kostroma' },
    { name: 'Курган', value: 'kurgan' },
    { name: 'Курск', value: 'kursk' },
    { name: 'Липецк', value: 'lipetsk' },
    { name: 'Магадан', value: 'magadan' },
    { name: 'Мурманск', value: 'murmansk' },
    { name: 'Нижний Новгород', value: 'nizhny_novgorod' },
    { name: 'Великий Новгород', value: 'veliky_novgorod' },
    { name: 'Новосибирск', value: 'novosibirsk' },
    { name: 'Омск', value: 'omsk' },
    { name: 'Оренбург', value: 'orenburg' },
    { name: 'Орёл', value: 'orel' },
    { name: 'Пенза', value: 'penza' },
    { name: 'Псков', value: 'pskov' },
    { name: 'Ростов-на-Дону', value: 'rostov_on_don' },
    { name: 'Рязань', value: 'ryazan' },
    { name: 'Самара', value: 'samara' },
    { name: 'Саратов', value: 'saratov' },
    { name: 'Южно-Сахалинск', value: 'yuzhno_sakhalinsk' },
    { name: 'Екатеринбург', value: 'ekaterinburg' },
    { name: 'Смоленск', value: 'smolensk' },
    { name: 'Тамбов', value: 'tambov' },
    { name: 'Тверь', value: 'tver' },
    { name: 'Томск', value: 'tomsk' },
    { name: 'Тула', value: 'tula' },
    { name: 'Тюмень', value: 'tyumen' },
    { name: 'Ульяновск', value: 'ulyanovsk' },
    { name: 'Челябинск', value: 'chelyabinsk' },
    { name: 'Ярославль', value: 'yaroslavl' },
    { name: 'Майкоп', value: 'maykop' },
    { name: 'Уфа', value: 'ufa' },
    { name: 'Улан-Удэ', value: 'ulan_ude' },
    { name: 'Махачкала', value: 'makhachkala' },
    { name: 'Магас', value: 'magas' },
    { name: 'Нальчик', value: 'nalchik' },
    { name: 'Элиста', value: 'elista' },
    { name: 'Черкесск', value: 'cherkessk' },
    { name: 'Петрозаводск', value: 'petrozavodsk' },
    { name: 'Сыктывкар', value: 'syktyvkar' },
    { name: 'Симферополь', value: 'simferopol' },
    { name: 'Йошкар-Ола', value: 'yoshkar_ola' },
    { name: 'Саранск', value: 'saransk' },
    { name: 'Якутск', value: 'yakutsk' },
    { name: 'Владикавказ', value: 'vladikavkaz' },
    { name: 'Казань', value: 'kazan' },
    { name: 'Кызыл', value: 'kyzyl' },
    { name: 'Ижевск', value: 'izhevsk' },
    { name: 'Абакан', value: 'abakan' },
    { name: 'Грозный', value: 'grozny' },
    { name: 'Чебоксары', value: 'cheboksary' },
    { name: 'Барнаул', value: 'barnaul' },
    { name: 'Краснодар', value: 'krasnodar' },
    { name: 'Красноярск', value: 'krasnoyarsk' },
    { name: 'Пермь', value: 'perm' },
    { name: 'Владивосток', value: 'vladivostok' },
    { name: 'Ставрополь', value: 'stavropol' },
    { name: 'Хабаровск', value: 'khabarovsk' },
    { name: 'Благовещенск', value: 'blagoveshchensk' },
    { name: 'Артём', value: 'artem' },
    { name: 'Нарьян-Мар', value: 'naryan_mar' },
    { name: 'Ханты-Мансийск', value: 'khanty_mansiysk' },
    { name: 'Анадырь', value: 'anadyr' },
    { name: 'Салехард', value: 'salekhard' },


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

