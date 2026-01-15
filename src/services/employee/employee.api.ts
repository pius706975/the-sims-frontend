import api from "../api";
import type { EmployeeResponse } from "./employee.types";

export const employeeApi = {
  getEmployees: async (): Promise<EmployeeResponse> => {
    const res = await api.get("/employee/employees");
    return res.data;
  },
};
