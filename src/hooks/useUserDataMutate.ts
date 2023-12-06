import axios, { AxiosResponse } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserFormData } from "../interfaces/UserFromData";

const API_URL = "http://localhost:8080";

const postData = async (
    data: UserFormData
): Promise<AxiosResponse<unknown>> => {
    const response = await axios
        .post(API_URL + "/users/form", data)
        .catch((error) => {
           throw new Error(error.response.data.message);
        });

    return response?.data;
};

export function useUserDataMutate() {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: postData,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["user-data"] });
        },
    });

    return mutation;
}
