import { useState } from "react"
import { api } from "t3notes/utils/api"

export default function NoteArea() {
    const [text, setText] = useState("")
    const loadedText = api.notes.getNote.useQuery({})

    const saveText = api.notes.setNote.useMutation()
    const save = () => saveText.mutate({ text })

    return <>
        <div className="flex items-center justify-center flex-grow h-screen">
            <textarea
                defaultValue={loadedText.data?.text ?? "Loading..."}
                value={text}
                onChange={e => setText(e.target.value)}
                className="h-5/6 w-2/5 p-2
                    resize-none border rounded-md focus:outline-none focus:border-black transition duration-150 ease-in-out"/>
        </div>
        <button onClick={save}>
            save
        </button>
    </>
}