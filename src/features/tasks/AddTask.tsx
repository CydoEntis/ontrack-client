import FormBtn from "@/components/form/FormBtn";
import FormControl from "@/components/form/FormControl";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import TextArea from "@/components/form/TextArea";
import Form from "../../components/form/Form";
import Modal from "../../components/modal/Modal";

type Props = {
  onClose: () => void;
};

const AddTask = ({ onClose }: Props) => {
  const handleSubmit = () => {
    console.log("Do something");
  };
  return (
    <Modal onClose={onClose}>
      <Form onSubmit={handleSubmit}>
        <h1 className="mb-5 text-2xl text-grey-30">New Task</h1>
        <FormControl>
          <Label htmlFor="title">Text</Label>
          <Input id="title" type="text" />
        </FormControl>
        <FormControl>
          <Label htmlFor="description">Description</Label>
          <TextArea id="description" numCols={20} numRows={10} />
        </FormControl>
        <FormControl>
          <Label htmlFor="users">Assigned Users</Label>
          <select multiple id="users">
            <option>Joe</option>
            <option>Jane</option>
            <option>Jack</option>
          </select>
        </FormControl>
        <FormControl>
          <Label htmlFor="date">Due Date</Label>
          <Input id="date" type="date" />
        </FormControl>
        <FormControl>
          <FormBtn type="submit" text="Add Project" />
        </FormControl>
      </Form>
    </Modal>
  );
};

export default AddTask;
