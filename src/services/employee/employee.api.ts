import api from "../api";
import type {
  EmployeeResponse,
  EmployeeTypeResponse,
  EmployementStatusResponse,
} from "./employee.types";

export const employeeApi = {
  getEmployees: async (): Promise<EmployeeResponse> => {
    const res = await api.get("/employee/employees");
    return res.data;
  },
};

export const employeeTypeApi = {
  getEmployeeTypes: async (): Promise<EmployeeTypeResponse> => {
    const res = await api.get("/employment/employee-types");
    return res.data;
  },
};

export const employmentStatusApi = {
  getEmploymentStatus: async (): Promise<EmployementStatusResponse> => {
    const res = await api.get("/employment/employment-statuses");
    return res.data;
  },
};
