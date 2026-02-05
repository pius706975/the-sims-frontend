// ==============================
// Employee
// ==============================
export interface Employee {
  employee_id: string;
  employee_number: string;
  full_name: string;
  gender: string;
  birth_place: string;
  birth_date: string;
  religion: string;
  marital_status: string;
  address: string;
  phone: string;
  email: string;
  identify_card_number: number;
  employee_type_id: string;
  employee_type_name: string;
  employment_status_id: string;
  employment_status_name: string;
  join_date: string;
  end_date: string;
  is_activated: boolean;
  created_at: string;
  created_by: string;
  updated_at: string;
  updated_by: string;
}

export interface EmployeeResponse {
  data: Employee[];
}

// ==============================
// Employee Type
// ==============================
export interface EmployeeType {
  employee_type_id: string;
  employee_type_name: string;
  created_at: string;
  created_by: string;
  updated_at: string;
  updated_by: string;
}

export interface EmployeeTypeResponse {
  data: EmployeeType[];
}

// ==============================
// Employment Status
// ==============================
export interface EmployementStatus {
  employment_status_id: string;
  employment_status_name: string;
  created_at: string;
  created_by: string;
  updated_at: string;
  updated_by: string;
}

export interface EmployementStatusResponse {
  data: EmployementStatus[];
}
