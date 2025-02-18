export function Menu() {
  return (
    <aside className="bg-[#2e303d] w-64 h-screen p-4">
      <h1 className="text-3xl text-amber-300">WatchMe</h1>
      <ul className="text-white flex flex-col gap-2 mt-4">
        <li className="bg-[#4b4d5a] text-amber-300 px-4 py-2 rounded-md">
          Ação
        </li>
        <li className="bg-[#373a44] px-4 py-2 rounded-md">Comédia</li>
        <li className="bg-[#373a44] px-4 py-2 rounded-md">Dcumentário</li>
        <li className="bg-[#373a44] px-4 py-2 rounded-md">Drama</li>
        <li className="bg-[#373a44] px-4 py-2 rounded-md">Terror</li>
        <li className="bg-[#373a44] px-4 py-2 rounded-md">Família</li>
      </ul>
    </aside>
  );
}
