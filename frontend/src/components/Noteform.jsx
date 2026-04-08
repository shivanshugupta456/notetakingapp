import React, { useContext, useState } from 'react'
import { NoteContext } from '../context/NoteContext'

const sampleNote = {
  title: 'Interview Prep Sprint Plan',
  content:
    'Focus for this week:\n- Build the note taking app end-to-end with clean CRUD flows\n- Improve UI so the product feels polished, not just functional\n- Revise arrays, binary search, and sliding window patterns daily\n\nAction items:\n- Finish responsive note cards and empty states\n- Add meaningful sample data and cleaner formatting\n- Practice explaining architecture: React context, API layer, Express routes, MongoDB model\n\nSuccess metric:\nI should be able to demo the app in 2 minutes and explain one technical decision with confidence.',
}

function Noteform() {
  const { createNote } = useContext(NoteContext)
  const [note, setNote] = useState({
    title: '',
    content: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!note.title || !note.content) return
    createNote(note)
    setNote({ title: '', content: '' })
  }

  return (
    <div className="mx-auto mt-10 w-full max-w-2xl rounded-[28px] border border-slate-700/60 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Smart Capture
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">Create a note worth showing</h2>
          <p className="mt-2 max-w-lg text-sm text-slate-300">
            Add clear, structured notes so your app feels intentional during a demo.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setNote(sampleNote)}
          className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/20 hover:text-white"
        >
          Use Interview Sample
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Ex: Product roadmap, interview prep, launch checklist..."
          className="w-full rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 focus:outline-none"
          value={note.title}
          onChange={(e) => setNote({ ...note, title: e.target.value })}
        />
        <textarea
          placeholder="Write a concise note with bullets, action items, or priorities..."
          className="min-h-56 w-full rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 focus:outline-none"
          rows="8"
          value={note.content}
          onChange={(e) => setNote({ ...note, content: e.target.value })}
        />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">
            Tip: strong titles and structured content instantly improve the demo.
          </p>
          <button
            type="submit"
            className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Add Note
          </button>
        </div>
      </form>
    </div>
  )
}

export default Noteform
