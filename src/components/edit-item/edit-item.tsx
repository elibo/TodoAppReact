import { List } from "antd";
import { useState } from "react";
import MyButton from "../button/button";
import MyInput from "../input/input";

export interface EditItemProps {
    title: string;
    onSave: (edit: string) => void;
}

const EditItem = (props: EditItemProps) => {
    const [edit, setEdit] = useState(props.title)

    return (
        <List.Item
            className="list-item"
            actions={[<MyButton label="Save" onClick={() => props.onSave(edit)} />]}
        >
            <MyInput value={edit} onChange={(e: any) => setEdit(e.target.value)} placeholder="" />
        </List.Item>

    );
};

export default EditItem;