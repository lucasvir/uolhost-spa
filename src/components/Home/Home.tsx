import "./Home.css";
import { useState } from "react";
import { Form } from "../Form/Form";

function Home() {
    const [isModalOn, setIsModalOn] = useState(false);

    const handleModal = () => {
        setIsModalOn((prev) => !prev);
    };

    return (
        <>
            <div id="text-wrapper" onClick={handleModal}>
                <h1 id="title-home">- UOL Host Test -</h1>
                <p id="sign">by @ lucasvir </p>
            </div>
            {isModalOn && <Form />}
        </>
    );
}

export { Home };
