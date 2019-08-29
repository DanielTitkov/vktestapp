import React, { useState} from 'react';
import {Panel, PanelHeader, HeaderButton, platform, IOS, Cell, Group, InfoRow, List, Button} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osname = platform();

export default function Percent(props) {
    const [numbers, setNumbers] = useState({
        p1n1: 0,
        p1n2: 0,
        p1r: 0,

        p2r: 0,
        p3r: 0,
        p4r: 0
    })

    const handleChange = e => {
        setNumbers({
            ...numbers,
            [e.target.id]: e.target.value,
        })
    }

    const handleSubmit = () => {
        setNumbers({
            ...numbers,
            p1r: numbers.p1n1 / 100 * numbers.p1n2,
            p2r: numbers.p2n1 / numbers.p2n2 * 100,
            p3r: Number(numbers.p3n1) + Number(numbers.p3n1 * (numbers.p3n2 / 100)),
            p4r: numbers.p4n1 - numbers.p4n1 * (numbers.p4n2 / 100)
        })
    }

    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<HeaderButton onClick={props.go} data-to="home">
                    {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                </HeaderButton>}
            >
                Калькулятор процентов
            </PanelHeader>
            <Group>
                <List>

                    <Cell>
                        <InfoRow title="Процент от числа">
                            Сколько % составляет 
                            <input onChange={handleChange} id="p1n1" type="text" /> 
                            от 
                            <input onChange={handleChange} id="p1n2" type="text" />
                            <span>{ numbers.p1r ? numbers.p1r : 0 }</span>
                        </InfoRow>
                    </Cell>
                    <Cell>
                        <InfoRow title="Число в процентах">
                            Сколько составляет 
                            <input onChange={handleChange} id="p2n1" type="text" /> % 
                            от 
                            <input onChange={handleChange} id="p2n2" type="text" />
                            <span>{ numbers.p2r ? numbers.p2r : 0 }</span>
                        </InfoRow>
                    </Cell>
                    <Cell>
                        <InfoRow title="Увеличить на процент">
                            Увеличить 
                            <input onChange={handleChange} id="p3n1" type="text" />
                            на 
                            <input onChange={handleChange} id="p3n2" type="text" /> %
                            <span>{ numbers.p3r ? numbers.p3r : 0 }</span>
                        </InfoRow>
                    </Cell>
                    <Cell>
                        <InfoRow title="Уменьшить на процент">
                            Уменьшить 
                            <input onChange={handleChange} id="p4n1" type="text" /> 
                            на 
                            <input onChange={handleChange} id="p4n2" type="text" /> %
                            <span>{ numbers.p4r ? numbers.p4r : 0  }</span>
                        </InfoRow>
                    </Cell>
                    <Cell>
                        <Button size="xl" onClick={handleSubmit}>Посчитать</Button>
                    </Cell>
                </List>
            </Group>
        </Panel>
    )
}
