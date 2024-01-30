"use client";

import * as React from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

interface Props {
  links: { url: string; title: string }[];
}

export const CommandMenu = ({ links }: Props) => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <p className="fixed bottom-0 left-0 right-0 hidden border-t border-t-muted bg-white p-1 text-center text-sm text-muted-foreground print:hidden md:block">
        按{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5  text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>{" "}
        打开命令菜单
      </p>
      {/* <Button
        onClick={() => setOpen((open) => !open)}
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 flex rounded-full shadow-2xl print:hidden xl:hidden"
      >
        <CommandIcon className="my-6 size-6" />
      </Button> */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="输入命令或搜索..." />
        <CommandList>
          <CommandEmpty>无此操作</CommandEmpty>
          <CommandGroup heading="操作">
            <CommandItem
              onSelect={() => {
                setOpen(false);
                window.print();
              }}
            >
              <span>打印</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="链接">
            {links.map(({ url, title }) => (
              <CommandItem
                key={url}
                onSelect={() => {
                  setOpen(false);
                  window.open(url, "_blank");
                }}
              >
                <span>{title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
};
