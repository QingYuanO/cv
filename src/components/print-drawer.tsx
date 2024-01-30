"use client";

import { PrinterIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

export const PrintDrawer = () => {
  const [open, setOpen] = useState(false);
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          className="fixed bottom-4 right-4 size-14 rounded-full shadow-2xl print:hidden sm:hidden"
          onClick={() => setOpen(true)}
        >
          <PrinterIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>操作</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 pb-0"></div>
          <DrawerFooter>
            <Button
              onClick={() => {
                setOpen(false);
                setTimeout(() => window.print(), 500);
              }}
            >
              打印
            </Button>
            <DrawerClose asChild>
              <Button variant="outline">取消</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
