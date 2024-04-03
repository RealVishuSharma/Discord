import { ModeToggle } from "@/components/mode-toogle";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <>
    <div className="flex ">
     <Button variant="destructive">
      This is a protected Route!
      </Button>
      <ModeToggle/>
    </div>
    </>
  );
}
