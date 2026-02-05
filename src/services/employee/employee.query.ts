import { useQuery } from "@tanstack/react-query";
import {
  employeeService,
  employeeTypeService,
  employmentStatusService,
} from "./employee.service";
import type {
  EmployeeResponse,
  EmployeeTypeResponse,
  EmployementStatusResponse,
} from "./employee.types";
import type { AxiosError } from "axios";

interface ApiError {
  message: string;
  status: number;
}

export const EMPLOYEE_KEY = ["employees"];
export const EMPLOYEE_TYPE_KEY = ["employee_types"];
export const EMPLOYMENT_STATUS_KEY = ["employment_statuses"];

export const useEmployeesQuery = () =>
  useQuery<EmployeeResponse, AxiosError<ApiError>>({
    queryKey: EMPLOYEE_KEY,
    queryFn: employeeService.getEmployees,
  });

export const useEmployeeTypesQuery = () =>
  useQuery<EmployeeTypeResponse, AxiosError<ApiError>>({
    queryKey: EMPLOYEE_TYPE_KEY,
    queryFn: employeeTypeService.getEmployeeTypes,
  });

export const useEmploymentStatusQuery = () =>
  useQuery<EmployementStatusResponse, AxiosError<ApiError>>({
    queryKey: EMPLOYMENT_STATUS_KEY,
    queryFn: employmentStatusService.getEmploymentStatus,
  });
