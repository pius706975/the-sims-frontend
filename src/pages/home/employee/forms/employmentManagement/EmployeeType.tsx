import ButtonWithTooltip from "@/components/ButtonWithTooltip";
import EmployeeTableSkeleton from "@/components/skeletons/EmployeeSkeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDateTime } from "@/lib/date.parser";
import { useEmployeeTypesQuery } from "@/services/employee/employee.query";
import { PencilIcon } from "lucide-react";

const EmployeeType = () => {
  const { data, isLoading, isError, error } = useEmployeeTypesQuery();

  if (isLoading) {
    return <EmployeeTableSkeleton />;
  }

  const errorMessage =
    error?.response?.status === 400 &&
    error?.response?.data?.message === "Employee types is empty"
      ? "Jenis kepegawaian belum tersedia"
      : "Gagal memuat jenis kepegawaian";

  return (
    <main className="mb-5">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <p className="text-lg font-semibold text-foreground mb-4">
          Jenis Kepegawaian
        </p>
      </div>

      <div className="relative w-full overflow-x-auto border rounded-md">
        <Table className="min-w-max">
          <TableHeader className="sticky top-0 z-10 bg-[#1D7DBF]">
            <TableRow>
              {[
                "ID",
                "Jenis Kepegawaian",
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
                  Jenis kepegawaian belum tersedia
                </TableCell>
              </TableRow>
            ) : (
              data?.data.map((empType) => (
                <TableRow key={empType.employee_type_id}>
                  <TableCell className="whitespace-nowrap">
                    {empType.employee_type_id}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {empType.employee_type_name}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {formatDateTime(empType.created_at)}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {empType.created_by}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {formatDateTime(empType.updated_at)
                      ? formatDateTime(empType.updated_at)
                      : "-"}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {empType.updated_by ? empType.updated_by : "-"}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    <ButtonWithTooltip
                      label="Ubah Status"
                      className="text-orange-300 hover:text-orange-500 active:text-gray-300"
                    >
                      <PencilIcon />
                    </ButtonWithTooltip>
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

export default EmployeeType;
