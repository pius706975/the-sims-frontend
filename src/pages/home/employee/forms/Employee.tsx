import ButtonWithTooltip from "@/components/ButtonWithTooltip";
import { Button } from "@/components/ui/button";
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
import { PencilIcon, Trash2 } from "lucide-react";

const EmployeePage = () => {
  const { data, isLoading, isError } = useEmployeesQuery();

  if (isLoading) {
    return <div className="p-4">Loading data karyawan...</div>;
  }

  return (
    <main>
      <div className="mb-4">
        <Button variant="default" className="bg-[#1D7DBF] hover:bg-[#88B8D9]">
          Tambah Karyawan
        </Button>
      </div>

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

          {isError ? (
            <div className="p-4 text-red-500 text-center">Gagal memuat data</div>
          ) : (
            <TableBody>
              {data?.data.map((emp) => (
                <TableRow key={emp.employee_id}>
                  <TableCell className="whitespace-nowrap">
                    {emp.employee_number}
                  </TableCell>
                  <TableCell>{emp.full_name}</TableCell>
                  <TableCell>{emp.gender}</TableCell>
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
                    {emp.is_activated ? "Aktif" : "Nonaktif"}
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
              ))}
            </TableBody>
          )}
        </Table>
      </div>
    </main>
  );
};

export default EmployeePage;
