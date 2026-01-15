import { employeeApi } from "./employee.api"

export const employeeService = {
    getEmployees() {
        return employeeApi.getEmployees()
    }
}