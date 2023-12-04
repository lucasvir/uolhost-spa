import axios, { AxiosPromise } from "axios"
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const deleteData = async (id: string): AxiosPromise<void> => {
    const response = axios.delete(API_URL + "/users" + id)

    return response;
}


export function useUserDeleteMutate() {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: deleteData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['user-data']})
        }
    })

    return mutation; 
}