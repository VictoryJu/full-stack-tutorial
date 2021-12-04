import {useRef} from 'react'

const MsgInput = ({mutate, id = undefined,text=''})=>{
  const textRef = useRef(null)

  const onSubmit = e=>{
    e.preventDefault()
    e.stopPropagation()
    const text = textRef.current.value
    textRef.current.value = ''
    mutate(text, id)
  }
  return (
    <form className="messages__input" onSubmit={onSubmit}>
      <textarea ref={textRef} defaultValue={text} placeholder="내용을 입력하세요."></textarea>
      <button type="submit">입력하기</button>
    </form>
  )
}

export default MsgInput