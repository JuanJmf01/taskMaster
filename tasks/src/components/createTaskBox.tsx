import InputField from "./inputField ";

export default function CreateTaskBox() {
  return (
    <div className="create-task-box">
      <InputField label="Title" type="text" placeholder="" />
      <br />
      <InputField label="Descripcion" type="text" placeholder="" />

      <button>Create task</button>
    </div>
  );
}
