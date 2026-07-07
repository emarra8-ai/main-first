export default function Footer() {
  // ✏️ Update the year automatically; edit the name/tagline text if you like.
  const year = new Date().getFullYear()
  return (
    <footer className="bg-black border-t border-white/10 text-[#B7ADA2] px-6 py-10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="font-medium text-[#FAF6EF]">Emiliano Marra</span>
          <span className="text-[#E0754A]">&#10033;</span>
          <span className="opacity-70">Washington, D.C.</span>
        </div>
        <p className="opacity-60">
          &copy; {year} Emiliano Marra. Made with care in D.C.
        </p>
      </div>
    </footer>
  )
}
