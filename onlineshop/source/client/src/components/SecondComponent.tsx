import Button from '@mui/material/Button'
import React, { ChangeEvent, useCallback, useState } from 'react'
import TextField from '@mui/material/TextField';

export default function SecondComponent() {
    const [count, setCount] = useState<number>(0);
    const [text, setText] = useState<string>("");
    console.log(`Function called ${count}`);

    const clickHandler = () => {
        setCount(count + 1);
        console.log(`clicked ${count}`)
    }

    const inpHandler = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setText(event.target.value);
    }
    return (
        <>
            <div>SecondComponent</div>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={inpHandler}/>
            <p>You wrote {text}</p>
            <p>You clicked {count}</p>
            <Button variant="contained" onClick={clickHandler}>Contained</Button>
        </>
    )
}
