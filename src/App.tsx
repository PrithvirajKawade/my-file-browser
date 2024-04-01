import React, { useState } from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { Folder } from "./types";
import data from "./data.json";
import CustomTable from "./Table";

function App() {
  const initialFolder: any = data;
  const [currentFolder, setCurrentFolder] = useState<any>(initialFolder);

  const navigateToFolder = (folderName: string) => {
    // Find the folder object from the currentFolder data using the folderName
    const newFolder = currentFolder.children[folderName] as Folder;
    if (newFolder) {
      setCurrentFolder(newFolder);
    } else {
      console.error(`Folder ${folderName} not found.`);
    }
  };

  const renderBreadcrumbs = (folder: any | undefined): JSX.Element => {
    if (!folder || !folder.parent) {
      return (
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="text.primary">Root</Typography>
        </Breadcrumbs>
      );
    }

    return (
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          color="inherit"
          onClick={() => setCurrentFolder(data)}
        >
          Root
        </Link>
        {renderBreadcrumbs(folder.parent)}
        <Typography color="text.primary">{folder.name}</Typography>
      </Breadcrumbs>
    );
  };

  return (
    <div>
      {renderBreadcrumbs(currentFolder)}
      <CustomTable folder={currentFolder} navigateToFolder={navigateToFolder} />
    </div>
  );
}

export default App;
