import { taskContext } from "@/context/taskContext";
import { FC, FormEvent, useContext, useState } from "react";

const Form: FC<{
  edit: boolean;
  inputData: { id: number; value: string };
  closeModal?: () => void;
}> = ({ edit, inputData, closeModal }) => {
  const [inputValue, setInputValue] = useState<string>();
  const { addItem, editItem } = useContext(taskContext);

  return (
    <form
      className={`${edit ? "w-full" : "? w-2/4"} py-5 mx-auto flex gap-2`}
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
        inputValue && addItem && addItem(inputValue);
        edit && inputValue && editItem && editItem(inputValue, inputData.id);
        edit && closeModal && closeModal();
        const form = e.currentTarget as HTMLFormElement;
        form.reset();
      }}
    >
      <input
        type="text"
        defaultValue={inputData.value}
        onChange={(e) => {
          setInputValue(e.target?.value);
        }}
        className="w-2/4 border border-slate-700 rounded-md pr-2"
        placeholder={edit ? "ویرایش" : "افزودن"}
      />
      <button type="submit" className="w-1/6 bg-blue-200 rounded-md">
        {edit ? "ویرایش" : "افزودن"}
      </button>
    </form>
  );
};

export default Form;
