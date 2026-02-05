import ButtonWithTooltip from "@/components/ButtonWithTooltip";
import EmployeeTableSkeleton from "@/components/skeletons/EmployeeSkeleton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDateOnly, formatDateTime } from "@/lib/date.parser";
import { useEmployeesQuery } from "@/services/employee/employee.query";
import { PencilIcon, PlusIcon, Trash2 } from "lucide-react";
import { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import { CloseButtonX, MagnifierIcon } from "@/assets/svg";

const EmployeePage = () => {
  const { data, isLoading, isError, error } = useEmployeesQuery();
  const [showForm, setShowForm] = useState<boolean>(false);

  if (isLoading) {
    return <EmployeeTableSkeleton />;
  }

  const errorMessage =
    error?.response?.status === 400 &&
    error?.response?.data?.message === "employee is empty"
      ? "Data karyawan belum tersedia"
      : "Gagal memuat data karyawan";

  return (
    <main>
      <div className="mb-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="flex-1 w-full">
          <div className="relative">
            <Input
              type="text"
              placeholder="Cari berdasarkan nama atau email"
              className="w-full px-4 py-2.5 bg-white text-foreground placeholder-muted-foreground border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            />
            <MagnifierIcon />
          </div>
        </div>

        <Button
          onClick={() => {
            setShowForm(!showForm);
          }}
          variant="default"
          className="bg-[#1D7DBF] hover:bg-[#0061a3]"
        >
          <PlusIcon /> Tambah Karyawan
        </Button>
      </div>

      {/* Form Section */}
      {showForm && (
        <Card className="shadow-xl bg-white mb-5">
          <div className="px-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-foreground">
                Tambah Karyawan
              </h2>
              <button
                onClick={() => setShowForm(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <CloseButtonX />
              </button>
            </div>
            <EmployeeForm
              onSubmit={() => {}}
              onCancel={() => setShowForm(false)}
            />
          </div>
        </Card>
      )}

      <div className="relative w-full overflow-x-auto border rounded-md">
        <Table className="min-w-max">
          <TableHeader className="sticky top-0 z-10 bg-[#1D7DBF]">
            <TableRow>
              {[
                "NIP",
                "Nama",
                "Jenis Kelamin",
                "Tempat Lahir",
                "Tanggal Lahir",
                "Agama",
                "Status Pernikahan",
                "Alamat",
                "Kontak",
                "Email",
                "NIK",
                "Tanggal Bergabung",
                "Tanggal Keluar",
                "Status Karyawan",
                "Tipe Karyawan",
                "Status Pekerjaan",
                "Tanggal Dibuat",
                "Dibuat Oleh",
                "Tanggal Modifikasi",
                "Dimodifikasi Oleh",
                "Aksi",
              ].map((header) => (
                <TableHead
                  key={header}
                  className="whitespace-nowrap pr-6 font-bold text-gray-100"
                >
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {isError ? (
              <TableRow>
                <TableCell
                  colSpan={21}
                  className="text-left text-gray-500 py-6"
                >
                  {errorMessage}
                </TableCell>
              </TableRow>
            ) : data?.data.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={21}
                  className="text-left text-gray-500 py-6"
                >
                  Data karyawan belum tersedia
                </TableCell>
              </TableRow>
            ) : (
              data?.data.map((emp) => (
                <TableRow key={emp.employee_id}>
                  <TableCell className="whitespace-nowrap">
                    {emp.employee_number}
                  </TableCell>
                  <TableCell>{emp.full_name}</TableCell>
                  <TableCell>
                    {emp.gender === "Male"
                      ? "Laki-laki"
                      : emp.gender === "Female"
                        ? "Perempuan"
                        : emp.gender}
                  </TableCell>

                  <TableCell>{emp.birth_place}</TableCell>
                  <TableCell>{formatDateOnly(emp.birth_date)}</TableCell>
                  <TableCell>{emp.religion}</TableCell>
                  <TableCell>{emp.marital_status}</TableCell>
                  <TableCell>{emp.address}</TableCell>
                  <TableCell>{emp.phone}</TableCell>
                  <TableCell>{emp.email}</TableCell>
                  <TableCell>{emp.identify_card_number}</TableCell>
                  <TableCell>{formatDateOnly(emp.join_date)}</TableCell>
                  <TableCell>
                    {formatDateOnly(emp.end_date)
                      ? formatDateOnly(emp.end_date)
                      : "-"}
                  </TableCell>
                  <TableCell>{emp.employment_status_name}</TableCell>
                  <TableCell>{emp.employee_type_name}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        emp.is_activated
                          ? "bg-[#1D7DBF] text-white"
                          : "bg-gray-300 text-gray-800"
                      }
                    >
                      {emp.is_activated ? "Aktif" : "Nonaktif"}
                    </Badge>
                  </TableCell>
                  <TableCell>{formatDateTime(emp.created_at)}</TableCell>
                  <TableCell>{emp.created_by}</TableCell>
                  <TableCell>
                    {formatDateTime(emp.updated_at)
                      ? formatDateTime(emp.updated_at)
                      : "-"}
                  </TableCell>
                  <TableCell>{emp.updated_by ? emp.updated_by : "-"}</TableCell>
                  <TableCell>
                    {/* should be edit and delete action */}
                    <div>
                      <ButtonWithTooltip
                        label="Edit Karyawan"
                        className="text-orange-300 hover:text-orange-500 active:text-gray-300"
                      >
                        <PencilIcon />
                      </ButtonWithTooltip>

                      <ButtonWithTooltip
                        label="Hapus Karyawan"
                        className="text-red-600 hover:text-red-300 active:text-gray-300"
                      >
                        <Trash2 />
                      </ButtonWithTooltip>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </main>
  );
};

export default EmployeePage;
