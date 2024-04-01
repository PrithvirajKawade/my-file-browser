// types.ts
export interface Folder {
  name: string;
  type: string;
  children: Record<string, Folder | File>;
  parent?: string;
}

export interface File {
  name: string;
  type: string;
  size: string;
  parent?: string;
}

export const getFolderData = (): Folder => {
  return {
    name: "app",
    type: "folder",
    children: {
      file1: { name: "file1", type: "file", size: "106.56MB" },
      file2: { name: "file2", type: "file", size: "106.56MB" },
      main: {
        name: "main",
        type: "folder",
        parent: "app",
        children: {
          src: {
            name: "src",
            type: "folder",
            parent: "main",
            children: {
              file1: { name: "file1", type: "file", size: "106.56MB" },
              file2: { name: "file2", type: "file", size: "106.56MB" },
              main: {
                name: "main",
                type: "folder",
                parent: "src",
                children: {
                  public: {
                    name: "public",
                    type: "folder",
                    parent: "main",
                    children: {},
                  },
                },
              },
            },
          },
        },
      },
      components: {
        name: "components",
        type: "folder",
        parent: "app",
        children: {
          file1: { name: "file1", type: "file", size: "106.56MB" },
          file2: { name: "file2", type: "file", size: "106.56MB" },
          file3: { name: "file3", type: "file", size: "106.56MB" },
        },
      },
    },
  };
};
