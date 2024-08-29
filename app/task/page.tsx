"use client";
import { TaskProvider } from "@/context/taskContext";
import Table from "./table";
import Form from "./form";

export default function Task() {
  return (
    <TaskProvider>
      <Form edit={false} inputData={{ id: 0, value: "" }} />
      <Table />
    </TaskProvider>
  );
}
