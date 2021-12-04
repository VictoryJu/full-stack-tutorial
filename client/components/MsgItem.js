import MsgInput from "./MsgInput"

const MsgItem = ({
  startEdit,id, userId,timestamp,text, onUpdate, isEdting, onDelete
}) =>(
  <li className="messages__item">
    <h3>
      {userId}
      <sub>
        {new Date(timestamp).toLocaleDateString('ko-KR',{
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12:true
        })}
      </sub>
    </h3>
    
    {isEdting ? (
      <>
        <MsgInput mutate={onUpdate} text={text} id={id}/>
      </>
    ) : (
      text
    )}
    <div className="messages__buttons">
      <button onClick={startEdit}>수정</button>
      <button onClick={onDelete}>삭제</button>
    </div>
  </li>
)

export default MsgItem