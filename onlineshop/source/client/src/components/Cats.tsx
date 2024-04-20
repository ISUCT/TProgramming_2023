import React, { useEffect, useState } from 'react';
import Cat from './Cat';

export interface Cat {
    id: string;
    name: string;
    age: number;
}

const getCats = (): Promise<Array<Cat>> => {
    const cats: Cat[] = [
        {
            id: '1',
            name: 'Vasya',
            age: 3,
        },
        {
            id: '2',
            name: 'Pushok',
            age: 5,
        },
        {
            id: '3',
            name: 'Skip',
            age: 1,
        },
        {
            id: '4',
            name: '[Object object]',
            age: 1,
        },
    ];

    return new Promise((res, rej) => {
        setTimeout(() => {
            res(cats);
        }, 4000);
    });
}


const getCatsFromServer = async (): Promise<Array<Cat>> => {
    const resp = await fetch('/api/cats');
    const data = await resp.json() as Array<Cat>;
    return data;
}

export default function Cats() {

    const [cats, setCats] = useState<Array<Cat>>([]);

    const deleteHandler = (id: string) => {
        console.log('Action in parent');
    }

    useEffect(() => {
        console.log(`Use effects called`);
    
        let isDeleted = false;
        (async () => {
            const tmp = await getCatsFromServer();
            console.log(tmp);
            if (!isDeleted) {
                setCats(tmp);
            }
        })()
        return () => {
            console.log(`Cleanup called`);
            isDeleted = true;
        };
    }, []);

    return (
        <div>
            <h1>Cats:</h1>
            {cats.map((itm: Cat) => {
                return <Cat cat={itm} key={itm.id} deleteHandler={deleteHandler} />;
            })}
        </div>
    );
}
