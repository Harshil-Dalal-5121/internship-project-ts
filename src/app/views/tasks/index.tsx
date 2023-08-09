import Typography from "@mui/material/Typography";

import { useTranslation } from "../../services/translate";

export function Tasks() {
  const { t } = useTranslation();
  return (
    <>
      <Typography>{t("Tasks")}</Typography>
    </>
  );
}

export default Tasks;
