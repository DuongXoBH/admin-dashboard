import { LoginForm } from "@/components/page/login/login";
import { RegisterForm } from "@/components/page/register/register";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export function useFetchUserApi() {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch(`${apiUrl}/user/`);
      const result = await response.json();
      return result;
    },
  });
  return { data };
}

async function fetchLogin(data: LoginForm) {
  const response = await fetch(`${apiUrl}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }
  return result.access_token;
}

export function useFetchLogin() {
  const mutation = useMutation({
    mutationFn: ({ data }: { data: LoginForm }) => fetchLogin(data),
    onSuccess: () => {},
    onError: () => {
      toast.error(
        "Error: Invalid email or password. Please try again with the correct credentials."
      );
    },
  });
  return mutation;
}

export function useFetchUserApiBySession(token: string) {
  return useQuery({
    queryKey: ["profile", token],
    queryFn: async () => {
      const response = await fetch(`${apiUrl}/auth/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const result = await response.json();
      if (!response.ok) {
        toast.error(result.message);
        throw new Error(result.message);
      }
      return result;
    },
    enabled: !!token,
  });
}

export function useFetchUserApiById(id: string) {
  const { data } = useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      const response = await fetch(`${apiUrl}/users/${id}`);
      const result = await response.json();
      return result;
    },
  });
  return { data };
}

async function fetchRegister(data: RegisterForm) {
  const registerData = {
    name: data.name,
    email: data.email,
    password: data.password,
    avatar: "",
  };
  const response = await fetch(`${apiUrl}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registerData),
    
  });
  console.log(registerData)
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result);
  }
  return result;
}

export function useFetchRegister() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ data }: { data: RegisterForm }) => fetchRegister(data),
    onSuccess() {
      toast.success("Success");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError() {
      throw new Error("Error");
    },
  });
  return mutation;
}
