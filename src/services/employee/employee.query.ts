import { useQuery } from "@tanstack/react-query";
import { employeeService } from "./employee.service";
import type { EmployeeResponse } from "./employee.types";

export const EMPLOYEE_KEY = ["employees"];

export const useEmployeesQuery = () =>
  useQuery<EmployeeResponse>({
    queryKey: EMPLOYEE_KEY,
    queryFn: employeeService.getEmployees,
  });
