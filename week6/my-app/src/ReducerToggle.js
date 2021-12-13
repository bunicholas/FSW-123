import { useReducer } from 'react';

export default function ReducerToggle() {
    const reducer = (checked) => !checked;
    const [checked, toggle] = usereducer(reducer, false)

    return (
        <>
        <section>
            <input type="checkbox"
            value={checked}
            onChange={toggle}
            />
        </section>
        <p>{checked ? "checked" : "not checked"}</p>
        </>
    )
}