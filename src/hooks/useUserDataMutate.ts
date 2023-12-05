import axios, { AxiosResponse } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserFormData } from "../interfaces/UserFromData";

const API_URL = "http://localhost:8080";

export let exceptionMsg = "";

const postData = async (
    data: UserFormData
): Promise<AxiosResponse<unknown>> => {
    const response = axios
        .post(API_URL + "/users/form", data)
        .then((response) => response.data)
        .catch((erro) => {
            exceptionMsg = erro.response.data.message;
        });
    return (await response).data;
};

export function useUserDataMutate() {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: postData,
        mutationKey: ['post-query'],
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["user-data"] });
        }
    });

    return mutation;
}
