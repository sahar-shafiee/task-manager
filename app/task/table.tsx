import Image from "next/image";
import { useContext, useState } from "react";
// image
import editPic from "../../public/images/edit.png";
import deletePic from "../../public/images/delete.png";
// context
import { taskContext } from "../../context/taskContext";
import Modal from "./modal";
import Form from "./form";

export default function Table() {
  const { tasks, removeItem, editItem } = useContext(taskContext);

  const [inputText, setInputText] = useState({ id: 0, value: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <table className="w-2/4 border-collapse border border-slate-500 mx-auto">
        <thead>
          <tr>
            <th className="w-60 border border-slate-600">وظایف</th>
            <th className="w-16 border border-slate-600">وضعیت</th>
            <th className="w-16 border border-slate-600">ویرایش</th>
            <th className="w-16 border border-slate-600">حذف</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td className="w-60 border border-slate-700">{task.title}</td>
              <td className="w-16 border border-slate-700 text-center">
                <input
                  defaultChecked={task.status}
                  type="checkbox"
                  onChange={(e) => {
                    editItem && editItem(task.title, task.id, e.target.checked);
                  }}
                />
              </td>
              <td className="w-16 border border-slate-700 pr-11">
                <Image
                  src={editPic}
                  className="cursor-pointer"
                  alt="edit"
                  width={20}
                  height={20}
                  onClick={() => {
                    setInputText({ id: task.id, value: task.title });
                    openModal();
                  }}
                />
              </td>
              <td className="w-16 border border-slate-700 pr-11">
                <Image
                  src={deletePic}
                  className="cursor-pointer"
                  alt="delete"
                  width={18}
                  height={18}
                  onClick={() => removeItem && removeItem(task.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Form edit={true} inputData={inputText} closeModal={closeModal} />
      </Modal>
    </>
  );
}
