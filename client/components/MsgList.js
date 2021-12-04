import MsgItem from "./MsgItem";
import MsgInput from "./MsgInput";
import { useState } from "react";

const UserIds = ["roy", "jay"];
const getRendomUserId = () => UserIds[Math.round(Math.random())]; // 랜덤으로 0아니면 1이 나옴 그러면 로이나 제이 중에 하나가 골라짐

const originalMsgs = Array(50)
  .fill(0)
  .map((_, i) => ({
    id: (i + 1).toString(),
    userId: getRendomUserId(),
    timestamp: 1234567890123 + i * 1000 * 60,
    text: `${i + 1} mock text`,
  }))
  .reverse();

console.log(JSON.stringify(originalMsgs));

const MsgList = () => {
  const [msgs, setMsgs] = useState(originalMsgs);
  const [editingId, setEditingId] = useState(null);
  const onCreate = (text) => {
    const newMsg = {
      id: msgs.length + 1,
      userId: getRendomUserId(),
      timestamp: Date.now(),
      text: `${msgs.length + 1} ${text}`,
    };
    setMsgs((msgs) => [newMsg, ...msgs]);
  };

  const onUpdate = (text, id) => {
    setMsgs((msgs) => {
      const targetIndex = msgs.findIndex((msg) => msg.id === id);
      if (targetIndex < 0) return;
      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1, {
        ...msgs[targetIndex],
        text,
      });
      return newMsgs;
    });
    doneEdit();
  };

  const doneEdit = () => setEditingId(null);

  const onDelete = (id) => {
    setMsgs((msgs) => {
      const targetIndex = msgs.findIndex((msg) => msg.id === id);
      if (targetIndex < 0) return;
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
          />
        ))}
      </ul>
    </>
  );
};

export default MsgList;
