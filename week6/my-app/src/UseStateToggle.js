import { useState } from 'react-redux';

export default function UseStateToggle() {
    const [checked, setChecked] = useState(false)
const toggle = () => {
    setChecked((checked) => !checked)
}

return (
    <>
    <section>
        <input
        type="checkbox"
        value={checked}
        onChange={toggle}
        />
    </section>
    <p>{checked ? "checked" : "not checked"}</p>
</>
)

}
