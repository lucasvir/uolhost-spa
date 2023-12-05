import { FormEvent, useEffect, useState } from "react";
import "./Form.css";
import { useUserDataMutate } from "../../hooks/useUserDataMutate";
import { Link, useNavigate } from "react-router-dom";
import { UserFormData } from "../../interfaces/UserFromData";
import { SuccessModal } from "../Modal/SuccesModal/SuccessModal";
import { Input } from "../Input/Input";

export function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [codenameGroup, setCodenameGroup] = useState("vingadores");
    const [isModalOn, setIsModalOn] = useState(false);
    // const [errorMsg, setErrorMsg] = useState("");

    const navigate = useNavigate();

    const handleOpenModal = () => {
        setIsModalOn((prev) => !prev);
    };

  const {mutate, isError, isSuccess, data} = useUserDataMutate();

    const submit = (e: FormEvent) => {
        e.preventDefault();

        const userFormData: UserFormData = {
            name,
            email,
            telephone,
            codenameGroup,
        };

        console.log(data);
        mutate(userFormData);
    };

    useEffect(() => {
        if (!isSuccess) return;
        handleOpenModal();
    }, [isSuccess]);

    useEffect(() => {
        handleOpenModal();
    }, [isError]);

    return (
        <div className="modal-overlay">
            <form onSubmit={(e) => submit(e)} className="form">
                <fieldset id="cadastro-wrap">
                    <legend>Cadastro do jogador UOL</legend>

                    <Input
                        required={true}
                        type="text"
                        id="name"
                        name="name"
                        label="Nome:"
                        value={name}
                        updateValue={setName}
                    />
                    <Input
                        required={true}
                        type="text"
                        id="email"
                        name="email"
                        label="E-mail:"
                        value={email}
                        updateValue={setEmail}
                    />
                    <Input
                        type="text"
                        id="telephone"
                        name="telephone"
                        label="Telefone:"
                        value={telephone}
                        updateValue={setTelephone}
                    />

                    <fieldset id="group">
                        <legend>Quero ser do grupo:</legend>
                        <div className="radio-wrap">
                            <Input
                                checked={codenameGroup === "liga"}
                                type="radio"
                                id="liga"
                                name="codenamegroup"
                                label="Liga da Justiça"
                                value="liga"
                                updateValue={setCodenameGroup}
                            />
                        </div>

                        <div className="radio-wrap">
                            <Input
                                checked={codenameGroup === "vingadores"}
                                type="radio"
                                id="vingadores"
                                name="codenamegroup"
                                label="Os Vingadores"
                                value="vingadores"
                                updateValue={setCodenameGroup}
                            />
                        </div>
                    </fieldset>
                </fieldset>
                <div id="button-wrapper">
                    <button type="submit">Cadastrar</button>
                    <Link to={"/users"}>Listar Jogadores</Link>
                </div>

                {isModalOn && (
                    <SuccessModal
                        isError={isError}
                        error={""}
                        isSuccess={isSuccess}
                        onClose={() => {
                            handleOpenModal();
                            isError ? navigate("/") : navigate("/users");
                        }}
                    />
                )}
            </form>
        </div>
    );
}
