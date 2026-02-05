import {
  employeeApi,
  employeeTypeApi,
  employmentStatusApi,
} from "./employee.api";

export const employeeService = {
  getEmployees() {
    return employeeApi.getEmployees();
  },
};

export const employeeTypeService = {
  getEmployeeTypes() {
    return employeeTypeApi.getEmployeeTypes();
  },
};

export const employmentStatusService = {
  getEmploymentStatus() {
    return employmentStatusApi.getEmploymentStatus();
  },
};
