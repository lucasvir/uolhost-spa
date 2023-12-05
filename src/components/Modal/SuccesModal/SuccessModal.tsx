import "../Modals.css";

interface SuccessModalProps {
    isError: boolean;
    isSuccess: boolean;
    error: string | undefined;
    onClose: () => void;
}

export function SuccessModal({
    onClose,
    isSuccess,
    isError,
    error,
}: SuccessModalProps) {
    console.log(error);
    return (
        <>
            <div className="modal-overlay">
                <div className="modal-body">
                    {isSuccess && <h1>Usuário cadastrado com sucesso!</h1>}
                    {isError && <h1>{error}</h1>}
                    <button id="close-button" onClick={onClose}>
                        x
                    </button>
                </div>
            </div>
        </>
    );
}
