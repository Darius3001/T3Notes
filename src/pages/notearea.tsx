export default function NoteArea() {
    return <>
        <div className="flex items-center justify-center flex-grow h-screen">
            <textarea
                className="h-5/6 w-2/5 p-2
                    resize-none border rounded-md focus:outline-none focus:border-black transition duration-150 ease-in-out"/>
        </div>
    </>
}