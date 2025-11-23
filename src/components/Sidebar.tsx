import Button from "./Button";

export default function Sidebar() {
  return (
    <aside className="hidden md:block w-64 border-r border-border bg-muted/50">
      <div className="p-4 space-y-4">
        <div>
          <h4 className="text-sm font-semibold">Navigasi</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#" className="hover:text-primary">Overview</a></li>
            <li><a href="#" className="hover:text-primary">Komponen</a></li>
            <li><a href="#" className="hover:text-primary">Tema</a></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Aksi</h4>
          <Button className="w-full">Buat Project</Button>
          <Button variant="outline" className="w-full">Import</Button>
        </div>
      </div>
    </aside>
  );
}

