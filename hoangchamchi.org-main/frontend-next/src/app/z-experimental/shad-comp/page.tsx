// pages/example.tsx
import { Button } from "@/components/ui/button";

export default function ExamplePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Chào mừng đến với Shadcn UI</h1>
      <Button variant="default" className="mb-2">
        Nút mặc định
      </Button>
      <Button variant="outline" className="mb-2">
        Nút viền
      </Button>
      <Button variant="destructive">
        Nút nguy hiểm
      </Button>
    </div>
  );
}
