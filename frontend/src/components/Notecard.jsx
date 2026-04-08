import React, { useContext, useState } from 'react'
import { NoteContext } from '../context/NoteContext'

function Notecard({ note }) {
  const { deleteNote, updateNote } = useContext(NoteContext)
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState({
    title: note.title,
    content: note.content,
  })

  const handleUpdate = () => {
    updateNote(note._id, editData)
    setIsEditing(false)
  }

  const previewLines = note.content.split('\n').filter(Boolean).slice(0, 4)
  const wordCount = note.content.trim().split(/\s+/).filter(Boolean).length

  return (
    <div className="group flex h-full flex-col rounded-[24px] border border-slate-700/60 bg-slate-900/85 p-5 shadow-lg shadow-slate-950/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-cyan-950/20">
      {isEditing ? (
        <>
          <input
            type="text"
            className="mb-3 w-full rounded-2xl border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30"
            value={editData.title}
            onChange={(e) => setEditData({ ...editData, title: e.target.value })}
          />
          <textarea
            className="mb-3 min-h-40 w-full rounded-2xl border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30"
            rows="5"
            value={editData.content}
            onChange={(e) => setEditData({ ...editData, content: e.target.value })}
          />
          <div className="flex gap-2">
            <button
              onClick={handleUpdate}
              className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="rounded-full bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-slate-600"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="mb-4 flex items-center justify-between">
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Note
            </span>
            <span className="text-xs text-slate-400">{wordCount} words</span>
          </div>

          <h2 className="text-2xl font-semibold leading-tight text-white">
            {note.title}
          </h2>

          <div className="mt-4 flex-1 rounded-2xl bg-slate-800/80 p-4 text-slate-300">
            <div className="space-y-2">
              {previewLines.map((line, index) => (
                <p key={`${note._id}-${index}`} className="note-preview-line">
                  {line}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-sm text-slate-400">
            <span>
              {new Date(note.createdAt).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </span>

            <div className="flex gap-2">
              <button
                onClick={() => setIsEditing(true)}
                className="rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
              >
                Edit
              </button>
              <button
                onClick={() => deleteNote(note._id)}
                className="rounded-full bg-rose-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-400"
              >
                Delete
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Notecard
