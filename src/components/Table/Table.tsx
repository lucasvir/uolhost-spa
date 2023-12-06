import { useUserDeleteMutate } from "../../hooks/useUserDeleteMutate";
import { UserData } from "../../interfaces/UserData";
import "./Table.css";
import { useNavigate } from "react-router-dom";

interface TableProps {
    users: UserData[] | undefined;
}

export function Table({ users }: TableProps) {

    const navigate = useNavigate();
    const handleOpenForm = () => {
        navigate('/form');
    };

    const { mutate } = useUserDeleteMutate();
    const handleDelete = (id: string) => {
        mutate(id);
    }

    return (
        <>
            <h1 id="title">Jogadores cadastrados</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th>Codinome</th>
                        <th>Grupo</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((userData) => (
                        <tr key={userData.id}>
                            <td>{userData.name}</td>
                            <td>{userData.email}</td>
                            <td>{userData.telephone}</td>
                            <td>{userData.codename}</td>
                            <td>{userData.codenameGroup}</td>
                            <td>
                                <button className="link-button">editar</button>
                            </td>
                            <td>
                                <button className="link-button" onClick={() => handleDelete(userData.id)}>excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button id="new-button" onClick={() => handleOpenForm()}>
                Novo jogador
            </button>
        </>
    );
}
