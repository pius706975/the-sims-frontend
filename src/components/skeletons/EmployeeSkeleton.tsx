import { Skeleton } from "../ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const EmployeeTableSkeleton = () => {
  const headersCount = 5;
  const rowsCount = 5;

  return (
    <main>
      <div className="mb-4">
        <Skeleton className="h-10 w-40 rounded-md" />
      </div>

      <div className="relative w-full overflow-x-auto border rounded-md">
        <Table className="min-w-max">
          <TableHeader className="sticky top-0 z-10 bg-[#1D7DBF]">
            <TableRow>
              {Array.from({ length: headersCount }).map((_, i) => (
                <TableHead key={i} className="pr-6">
                  <Skeleton className="h-4 w-24 bg-blue-200" />
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {Array.from({ length: rowsCount }).map((_, rowIdx) => (
              <TableRow key={rowIdx}>
                {Array.from({ length: headersCount }).map((_, colIdx) => (
                  <TableCell key={colIdx}>
                    <Skeleton className="h-4 w-full" />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
};

export default EmployeeTableSkeleton;
