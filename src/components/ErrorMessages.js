import React from "react";
import Grid from "@material-ui/core/Grid";
import Collapse from "@material-ui/core/Collapse";
import Alert from "@material-ui/lab/Alert";

const ErrorMessages = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <Grid container spacing={2} alignItems="flex-end">
      <Grid item>
        <Collapse in={open}>
          <Alert
            severity="error"
            onClose={() => {
              setOpen(false);
            }}
          >
            Please specify a valid API key
          </Alert>
        </Collapse>
      </Grid>
    </Grid>
  );
};

export default ErrorMessages;
