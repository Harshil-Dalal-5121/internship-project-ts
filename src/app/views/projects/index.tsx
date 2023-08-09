import { Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "../../services/translate";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography>{t("Projects")}</Typography>
    </>
  );
};

export default Projects;
