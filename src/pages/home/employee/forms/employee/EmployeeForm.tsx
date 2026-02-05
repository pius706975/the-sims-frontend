import { DatePickerSimple } from "@/components/DatePicker";
import { TextareaWithCounter } from "@/components/TextAreaWithCounter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface EmployeeFormProps {
  initialData?: {
    fullName: string;
    email: string;
    phone: string;
    position: string;
    department: string;
    startDate: string;
    salary: string;
    status: "active" | "inactive";
  };
  onSubmit: (data: any) => void;
  onCancel: () => void;
  isEditing?: boolean;
}

const mandatorySign = <span className="text-red-500">*</span>;

const religion = [
  {
    option: "Islam",
    value: "Islam",
  },
  {
    option: "Protestan",
    value: "Protestan",
  },
  {
    option: "Katolik",
    value: "Katolik",
  },
  {
    option: "Hindu",
    value: "Hindu",
  },
  {
    option: "Buddha",
    value: "Buddha",
  },
  {
    option: "Khonghucu",
    value: "Khonghucu",
  },
];

export default function EmployeeForm({
  initialData,
  onSubmit,
  onCancel,
}: EmployeeFormProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Informasi Pribadi
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2 mb-5">
            <Label>Nama Lengkap {mandatorySign}</Label>
            <Input
              type="text"
              name="full_name"
              placeholder="Joko Selo Saputro"
            />
          </div>

          <div className="space-y-2 mb-5">
            <Label>NIK {mandatorySign}</Label>
            <Input
              type="number"
              name="identify_card_number"
              placeholder="Nomor Induk Kependudukan"
            />
          </div>

          <div className="grid gap-4 mb-5 grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
            <div className="space-y-2">
              <Label>Tempat Lahir {mandatorySign}</Label>
              <Input
                type="text"
                name="birth_place"
                placeholder="Tempat Lahir"
              />
            </div>

            <div className="space-y-2">
              <Label>Tanggal Lahir {mandatorySign}</Label>
              <DatePickerSimple />
            </div>

            <div className="space-y-2">
              <Label>Jenis Kelamin {mandatorySign}</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih jenis kelamin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Male">Laki-laki</SelectItem>
                    <SelectItem value="Female">Perempuan</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-4 mb-5 grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
            <div className="space-y-2">
              <Label>Agama {mandatorySign}</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih agama" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {religion.map((item) => (
                      <SelectItem value={item.value}>{item.option}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Status Pernikahan {mandatorySign}</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Single">Single</SelectItem>
                    <SelectItem value="Married">Menikah</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Kontak</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          <div className="space-y-2">
            <Label>Nomor Telepon {mandatorySign}</Label>
            <Input type="text" name="phone" placeholder="085183774490" />
          </div>

          <div className="space-y-2">
            <Label>Email {mandatorySign}</Label>
            <Input type="text" name="email" placeholder="yanagi@sims.edu" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
          <div className="space-y-2">
            <Label>Alamat {mandatorySign}</Label>
            <TextareaWithCounter
              placeholder="Alamat lengkap"
              maxLength={500}
              name="alamat"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Kepegawaian
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
          <div className="space-y-2">
            <Label>NIP {mandatorySign}</Label>
            <Input
              type="text"
              name="Nomor Induk Pegawai"
              placeholder="123456789"
            />
          </div>

          <div className="space-y-2">
            <Label>Jenis Kepegawaian {mandatorySign}</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Single">Single</SelectItem>
                  <SelectItem value="Married">Menikah</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex gap-4 pt-6 border-t border-border">
        <Button
          type="button"
          className="flex-1 bg-[#1D7DBF] hover:bg-[#0061a3]"
          size="lg"
          onClick={onSubmit}
        >
          Submit
        </Button>
        <Button
          type="button"
          onClick={onCancel}
          variant="outline"
          className="flex-1 bg-white hover:bg-gray-300"
          size="lg"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
