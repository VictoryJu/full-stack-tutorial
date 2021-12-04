import MsgItem from "./MsgItem";
import MsgInput from "./MsgInput";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import fetcher from "../fetcher";
const UserIds = ["roy", "jay"];

const MsgList = () => {

  const {query: { userId = "" }} = useRouter();
  const [msgs, setMsgs] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const onCreate = async text => {
    const newMsg = await fetcher("post", "/messages", { text, userId });
    if(!newMsg) throw Error('없습다.')
    setMsgs((msgs) => [newMsg, ...msgs]);
  };

  const onUpdate = async (text, id) => {
    const newMsg = await fetcher("put",`/messages/${id}`,{text,userId});
    if(!newMsg) throw Error('없습다.')
    setMsgs((msgs) => {
      const targetIndex = msgs.findIndex((msg) => msg.id === id);
      if (targetIndex < 0) return;
      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1, newMsg)
      return newMsgs;
    });
    doneEdit();
  };

  const doneEdit = () => setEditingId(null);

  const getMessages = async () => {
    const msgs = await fetcher("get", "/messages");
    setMsgs(msgs);
  };
  useEffect(() => {
    getMessages();
  }, []);

  const onDelete = async id => {
    const receiveidId = await fetcher('delete', `/messages/${id}`,{params: {userId} }); //클라이언트에서는 파람스로 보내지만 서버에서는 쿼리로 받아짐
    setMsgs(msgs => {
      const targetIndex = msgs.findIndex((msg) => msg.id === receiveidId.toString());
      if (targetIndex < 0) return msgs;
      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1);
      return newMsgs;
    });
  };

  return (
    <>
      <MsgInput mutate={onCreate} />
      <ul className="messages">
        {msgs.map((item) => (
          <MsgItem
            key={item.id}
            {...item}
            onUpdate={onUpdate}
            onDelete={() => onDelete(item.id)}
            startEdit={() => setEditingId(item.id)}
            isEdting={editingId === item.id}
            myId={userId}
          />
        ))}
      </ul>
    </>
  );
};

export default MsgList;
