import { Button } from "@/components/ui/button"; // Puedes usar shadcn/ui para estilizar

const Toolbar = () => {
  return (
    <div className="flex gap-2 mb-4">
      <Button className="bg-green-500 hover:bg-green-600">✔ Confirmar</Button>
      <Button className="bg-red-500 hover:bg-red-600">❌ Cancelar</Button>
      <Button className="bg-blue-500 hover:bg-blue-600">🖨️ Imprimir</Button>
    </div>
  );
};

export default Toolbar;
