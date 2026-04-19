interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
}

const markdownFiles = import.meta.glob("../../posts/*.md", {
  query: "?raw",
  import: "default",
});

function parseFrontmatter(markdown: string): {
  meta: { title?: string; date?: string; tags?: string[] };
  content: string;
} {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n?/);

  if (!match) {
    return {
      meta: {},
      content: markdown,
    };
  }

  const [, header] = match;
  const content = markdown.slice(match[0].length);
  const meta: { title?: string; date?: string; tags?: string[] } = {};

  header.split("\n").forEach((line) => {
    const idx = line.indexOf(":");
    if (idx < 0) return;

    const key = line.slice(0, idx).trim();
    const rawValue = line.slice(idx + 1).trim();

    if (key === "title") {
      meta.title = rawValue.replace(/^['\"]|['\"]$/g, "");
    }

    if (key === "date") {
      meta.date = rawValue.replace(/^['\"]|['\"]$/g, "");
    }

    if (key === "tags") {
      const normalized = rawValue
        .replace(/^\[/, "")
        .replace(/\]$/, "")
        .split(",")
        .map((tag) => tag.trim().replace(/^['\"]|['\"]$/g, ""))
        .filter(Boolean);
      meta.tags = normalized;
    }
  });

  return { meta, content };
}

function slugFromPath(filePath: string): string {
  return filePath.split("/").pop()?.replace(/\.md$/, "") ?? "";
}

export async function loadAllPosts(): Promise<BlogPost[]> {
  const loaded = await Promise.all(
    Object.entries(markdownFiles).map(async ([filePath, loader]) => {
      const markdown = (await loader()) as string;
      const { meta, content } = parseFrontmatter(markdown);
      const slug = slugFromPath(filePath);

      return {
        slug,
        title: meta.title ?? slug,
        date: meta.date ?? "",
        tags: meta.tags ?? [],
        content,
      };
    }),
  );

  return loaded.sort((a, b) => {
    const aTime = a.date ? new Date(a.date).getTime() : 0;
    const bTime = b.date ? new Date(b.date).getTime() : 0;
    return bTime - aTime;
  });
}

export async function loadPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await loadAllPosts();
  return posts.find((post) => post.slug === slug) ?? null;
}

export type { BlogPost };
