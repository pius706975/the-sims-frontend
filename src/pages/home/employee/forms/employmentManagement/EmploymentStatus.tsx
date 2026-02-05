import ButtonWithTooltip from "@/components/ButtonWithTooltip";
import EmployeeTableSkeleton from "@/components/skeletons/EmployeeSkeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatDateTime } from "@/lib/date.parser";
import { useEmploymentStatusQuery } from "@/services/employee/employee.query";
import { PencilIcon } from "lucide-react";

const EmploymentStatus = () => {
  const { data, isLoading, isError, error } = useEmploymentStatusQuery();

  if (isLoading) {
    return <EmployeeTableSkeleton />;
  }

  const errorMessage =
    error?.response?.status === 400 &&
    error?.response?.data?.message === "Employment Statuses is empty"
      ? "Status kepegawaian belum tersedia"
      : "Gagal memuat status kepegawaian";

  return (
    <main>
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <p className="text-lg font-semibold text-foreground mb-4">
          Status Kepegawaian
        </p>
      </div>

      <div className="relative w-full overflow-x-auto border rounded-md">
        <Table className="min-w-max">
          <TableHeader className="sticky top-0 z-10 bg-[#1D7DBF]">
            <TableRow>
              {[
                "ID",
                "Status Kepegawaian",
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
              data?.data.map((empStat) => (
                <TableRow key={empStat.employment_status_id}>
                  <TableCell className="whitespace-nowrap">
                    {empStat.employment_status_id}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {empStat.employment_status_name}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {formatDateTime(empStat.created_at)}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {empStat.created_by}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {formatDateTime(empStat.updated_at)
                      ? formatDateTime(empStat.updated_at)
                      : "-"}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {empStat.updated_by ? empStat.updated_by : "-"}
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

export default EmploymentStatus;
