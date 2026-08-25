import { z } from "zod";
import { FieldGroup } from "../../../../components/FormBuilder/DynamicFormBuilder";

// These UI-only fields intentionally have no API or database mapping until an
// approved evaluator contract is available. No field is required because the
// applicable DVS profile rules have not been provided.
export const evaluatorEditSchema = z.object({
  employeeId: z.string().optional(),
  email: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  mobileNumber: z.string().optional(),
  internalExternal: z.string().optional(),
  status: z.string().optional(),
  professionalStatus: z.string().optional(),
  pan: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  location: z.string().optional(),
  bankDetails: z.string().optional(),
  college: z.string().optional(),
  program: z.array(z.string()).optional(),
  course: z.string().optional(),
  centers: z.string().optional(),
  resume: z.instanceof(File).optional(),
  naValidator: z.string().optional(),
  designation: z.string().optional(),
});

export const evaluatorEditFields: FieldGroup[] = [
  {
    group: "Professional information:",
    fields: [
      { type: "text", name: "college", label: "College", placeholder: "Enter college name" },
      {
        type: "multiselect",
        name: "program",
        label: "Program",
        placeholder: "Select one or more program",
        options: [],
        isMulti: true,
      },
      {
        type: "select",
        name: "course",
        label: "Select Course",
        placeholder: "Select course",
        options: [],
      },
      {
        type: "select",
        name: "centers",
        label: "Centers",
        placeholder: "Select center",
        options: [],
      },
      { type: "file", name: "resume", label: "Resume", accept: ".pdf,.doc,.docx" },
      { type: "text", name: "professionalStatus", label: "Status", disabled: true },
      { type: "text", name: "designation", label: "Designation", placeholder: "Enter designation", disabled: true },
      {
        type: "select",
        name: "naValidator",
        label: "NA Validator",
        placeholder: "Select",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
      },
    ],
  },
  {
    group: "Profile information:",
    fields: [
      { type: "text", name: "employeeId", label: "Employee ID", placeholder: "Enter employee id", disabled: true },
      { type: "email", name: "email", label: "Email", placeholder: "Enter email", disabled: true },
      { type: "text", name: "firstName", label: "First Name", placeholder: "Enter first name", disabled: true },
      { type: "text", name: "lastName", label: "Last Name", placeholder: "Enter last name", disabled: true },
      { type: "phone", name: "mobileNumber", label: "Mobile Number", placeholder: "Enter mobile number", disabled: true },
      { type: "text", name: "internalExternal", label: "Internal/External", disabled: true },
      { type: "text", name: "status", label: "Status", disabled: true },
      { type: "text", name: "pan", label: "PAN", placeholder: "Enter PAN", disabled: true },
      { type: "textarea", name: "address", label: "Address", placeholder: "Enter address" },
      { type: "text", name: "city", label: "City", placeholder: "Enter city" },
      {
        type: "select",
        name: "location",
        label: "Location",
        placeholder: "Select location",
        options: [],
      },
      { type: "textarea", name: "bankDetails", label: "Bank Details", placeholder: "Enter bank details" },
    ],
  },
];
