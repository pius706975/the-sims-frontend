import { useQuery } from "@tanstack/react-query";
import { employeeService } from "./employee.service";
import type { EmployeeResponse } from "./employee.types";
import type { AxiosError } from "axios";

interface ApiError {
  message: string;
  status: number;
}

export const EMPLOYEE_KEY = ["employees"];

export const useEmployeesQuery = () =>
  useQuery<EmployeeResponse, AxiosError<ApiError>>({
    queryKey: EMPLOYEE_KEY,
    queryFn: employeeService.getEmployees,
  });
