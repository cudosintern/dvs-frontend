import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DynamicFormBuilder from "../../../../components/FormBuilder/DynamicFormBuilder";
import { evaluatorEditFields, evaluatorEditSchema } from "./evaluatorEditSchema";

const EvaluatorEditPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = useCallback(() => {
    // An approved evaluator-update API contract is required before submitting
    // any form values. Do not report a successful update without one.
    toast.info("Evaluator update requires the approved API contract.");
  }, []);

  return (
    <div>
      <h3 className='pb-5 text-lg font-medium leading-6'>Edit Evaluator</h3>
      <DynamicFormBuilder
        fields={evaluatorEditFields}
        schema={evaluatorEditSchema}
        onSubmit={handleSubmit}
        submitbuttonName='Update'
        closebuttonName='Cancel'
        onClose={() => navigate("/user_management/evaluator")}
        columnLayout={2}
        groupClassName='space-y-4 rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800'
        initialValues={{}}
      />
    </div>
  );
};

export default EvaluatorEditPage;
