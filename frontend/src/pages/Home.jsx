import React, { useContext } from 'react'
import { NoteContext } from '../context/NoteContext'
import Notecard from '../components/Notecard'

function Home() {
  const { notes, loading } = useContext(NoteContext)

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-lg text-slate-300">Loading your workspace...</p>
      </div>
    )
  }

  if (notes.length === 0) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="max-w-xl rounded-[28px] border border-slate-700/60 bg-slate-900/85 p-10 text-center shadow-xl shadow-slate-950/20">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Your Workspace
          </p>
          <h1 className="mt-3 text-3xl font-bold text-white">No notes yet</h1>
          <p className="mt-3 text-slate-300">
            Create a sharp first note from the Create Note page and your app will instantly feel more polished in a demo.
          </p>
        </div>
      </div>
    )
  }

  return (
    <section className="space-y-8">
      <div className="rounded-[28px] border border-slate-700/60 bg-slate-900/80 px-6 py-8 shadow-xl shadow-slate-950/20">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Dashboard
        </p>
        <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Notes that look presentation-ready</h1>
            <p className="mt-2 max-w-2xl text-slate-300">
              Keep your thoughts structured, readable, and easy to explain when someone reviews your project.
            </p>
          </div>
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-200">
            {notes.length} {notes.length === 1 ? 'note' : 'notes'} saved
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {notes.map((note) => (
          <Notecard key={note._id} note={note} />
        ))}
      </div>
    </section>
  )
}

export default Home
