import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import { DialogUser } from "./_components/dialogUser";
import { getData } from "./actions";

export default async function UserPage() {
  const data = await getData();
  return (
    <main>
      <div className="flex items-center justify-end space-y-2 pt-2">
        <DialogUser
          dialogButton={'Novo usuario'}
          dialogTitle={'Usuário'}
          dialogDescription={'Tela para Salvar um novo Usuário'}
        />
      </div>
      <div>
        <DataTable data={data} columns={columns} />
      </div>
    </main>
  );
}