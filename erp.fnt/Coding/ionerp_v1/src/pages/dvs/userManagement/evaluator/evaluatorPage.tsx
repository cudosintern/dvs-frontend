import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEdit2, FiEye } from "react-icons/fi";
import { toast } from "react-toastify";
import FilterReusableForm, { FieldType } from "../../../../components/FormBuilder/FilterReusableForm";
import DataTable from "../../../../components/Table/DataTable";

/**
 * The evaluator, program, and course API contracts have not been supplied in
 * this repository. Keep API data opaque until the approved response fields are
 * available; do not derive it from unrelated user or database structures.
 */
type EvaluatorRecord = Record<string, unknown>;

const EvaluatorPage: React.FC = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState<Record<string, unknown>>({});
  const [searchText, setSearchText] = useState("");

  // Intentionally empty: no approved evaluator/program/course endpoint exists
  // in this project. These fields preserve the existing dependent-select UI
  // pattern and are ready for approved loadOptions functions later.
  const filterFields = useMemo<FieldType[]>(
    () => [
      {
        type: "select",
        name: "program",
        label: "Program",
        placeholder: "Select Program",
        isSearchable: true,
        options: [],
      },
      {
        type: "select",
        name: "course",
        label: "Course",
        placeholder: "Select Course",
        isSearchable: true,
        dependsOn: "program",
        options: [],
      },
    ],
    [],
  );

  const columnDefs = useMemo(
    () => [
      {
        headerName: "Status",
        field: "",
        sortable: false,
        filter: false,
        cellRenderer: () => null,
      },
      {
        headerName: "Action",
        field: "action",
        sortable: false,
        filter: false,
        editable: false,
        flex: 0,
        width: 120,
        cellRenderer: () => (
          <div className='flex h-full items-center space-x-3'>
            <FiEye
              aria-label='View evaluator'
              className='cursor-pointer text-blue-600'
              size={18}
              onClick={() => toast.info("Evaluator view requires the approved API response contract.")}
            />
            <FiEdit2
              aria-label='Edit evaluator'
              className='cursor-pointer text-yellow-600'
              size={18}
              onClick={() => navigate("/user_management/evaluator/edit")}
            />
          </div>
        ),
      },
    ],
    [],
  );

  return (
    <div>
      <div className='flex items-center justify-between pb-5'>
        <h3 className='text-lg font-medium leading-6'>Evaluator Management</h3>
        <button
          type='button'
          onClick={() => navigate("/user_management/evaluator/edit")}
          className='button-bg rounded px-4 py-2 text-sm text-white hover:pannel-bg-1 focus:outline-none'
        >
          Edit Evaluator
        </button>
      </div>

      <FilterReusableForm
        fields={filterFields}
        layoutSize='2'
        onSubmit={() => undefined}
        onValidDataChange={(value) => setFilters(JSON.parse(value || "{}"))}
      />

      <div className='mb-4 max-w-sm'>
        <label htmlFor='evaluator-search' className='mb-1 block text-sm font-medium'>
          Search
        </label>
        <input
          id='evaluator-search'
          type='search'
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          placeholder='Search evaluators'
          className='w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800'
        />
      </div>

      <DataTable
        columnDefs={columnDefs}
        rowData={[] as EvaluatorRecord[]}
        pageSize={20}
        headerFilter={true}
        quickFilterText={searchText}
      />

      {Object.keys(filters).length > 0 && (
        <p className='sr-only'>Evaluator filters are ready for the approved API integration.</p>
      )}
    </div>
  );
};

export default EvaluatorPage;
