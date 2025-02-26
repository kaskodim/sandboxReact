import React, {useEffect, useState, KeyboardEvent} from 'react';
import {ListOfCities} from '../../Parent';
import styled from 'styled-components';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type SelectProps = {
    value: string;
    onChange: (value: string) => void;
    options: ListOfCities[]
    placeholder: string
}

export const Select = ({
                           value,
                           onChange,
                           options,
                           placeholder
                       }: SelectProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectIndex, setSelectIndex] = useState<number>(-1);


    const onChangeHandler = (value: string) => {
        const findValue = options.find(n => n.value === value)
        if (findValue) {
            onChange(findValue.name)
        }
        setIsOpen(false);
        setSelectIndex(-1);
    }
    const ClickOutsideHandler = (e: MouseEvent) => {
        const findInput = document.getElementById('input')
        if (findInput && !findInput.contains(e.target as Node)) {
            setIsOpen(false)
            console.log('еще не допер как это работает')
        }
    }
    const onKeyUpHandler = (e: KeyboardEvent<HTMLInputElement>) => {

        if (e.key === 'ArrowDown') {
            setIsOpen(true)
            setSelectIndex(index => index < options.length - 1 ? index + 1 : 0);
        }
        if (e.key === 'ArrowUp') {
            setIsOpen(true)
            setSelectIndex(index => index > 0 ? index - 1 : options.length - 1)
        }
        if (e.key === 'Enter' && isOpen) {
            onChangeHandler(options[selectIndex].value)
            setIsOpen(false)
        }
        if (e.key === 'Escape' && isOpen) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', ClickOutsideHandler)
    }, [])

    useEffect(() => {
        if (selectIndex !== -1 && isOpen) {
            const selectedElement = document.getElementById(`optionsId-${selectIndex}`);
            if (selectedElement) {
                selectedElement.scrollIntoView({behavior: 'smooth', block: 'center'});
            }
        }
    }, [selectIndex, isOpen]);


    return (
        <SelectWrapper>
            <InputWrapper htmlFor={'input'}>
                <Input id={'input'}
                       type="text"
                       placeholder={placeholder}
                       value={value}
                       onClick={() => setIsOpen(!isOpen)}
                       readOnly
                       onKeyUp={onKeyUpHandler}
                />
                <IconWrapper isOpen={isOpen}>
                    <ExpandMoreIcon/>
                </IconWrapper>
            </InputWrapper>

            {isOpen && <OptionsList>
                {options.map((el, index) =>
                    <OptionItem key={el.value}
                                id={`optionsId-${index}`}
                                onClick={() => onChangeHandler(el.value)}
                                isSelected={value === el.name}
                                isHover={index === selectIndex}
                    >
                        {el.name}
                    </OptionItem>
                )}
            </OptionsList>}
        </SelectWrapper>
    );
};


const SelectWrapper = styled.div`
    margin: 30px;
    position: relative;
`

const InputWrapper = styled.label`
    position: relative;
    display: flex;
    align-items: center;
    user-select: none;
`

const Input = styled.input`
    cursor: default;
    border-radius: 5px;
    padding: 10px 25px 10px 10px;
    outline: none;
    border: 1px solid #989898;
    display: flex;
    flex-grow: 1;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: #ececec;
    user-select: none;


    &:focus {
        border: 1px solid blue;
    }
`

const IconWrapper = styled.div<{ isOpen: boolean }>`
    position: absolute;
    right: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(${({isOpen}) => isOpen ? '180deg' : '0deg'});
    transition: transform 0.4s ease;
`

const OptionsList = styled.div`
    margin-top: 10px;
    border-radius: 5px;
    box-shadow: inset 0 0 2px;
    background: #ececec;
    position: absolute;
    max-width: 100%;
    z-index: 10;
    max-height: 400px;
    overflow-y: auto;
    width: 100%;
    box-sizing: border-box;
    padding: 5px;
    user-select: none;

`

const OptionItem = styled.li<{ isSelected: boolean, isHover: boolean }>`

    list-style-type: none;
    padding: 10px;
    border-radius: 5px;

    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    user-select: none;

    ${({isSelected}) => isSelected && `
        background-color: #8C8C8CFF;
        box-shadow: inset 0 0 2px;
    `}
    ${({isHover}) => isHover && `
        background: #ffffff;
        box-shadow: inset 0 0 2px;
    `}
    &:hover {
        background: #ffffff;
        box-shadow: inset 0 0 2px;
    }
`