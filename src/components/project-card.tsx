import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  contributes: readonly string[];
  link?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  contributes,
  link,
}: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3">
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="text-base">
            {link ? (
              <a
                href={link}
                target="_blank"
                className="inline-flex items-center gap-1 hover:underline"
              >
                {title}{" "}
                <span className="size-1 rounded-full bg-green-500"></span>
              </a>
            ) : (
              title
            )}
          </CardTitle>
          <div className="hidden  text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className=" text-xs">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex mt-auto">
        <ul className="list-inside list-disc text-xs mt-2">
          {contributes.map((contribute, idx) => (
            <li key={idx}>{contribute}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto">
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px]"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
