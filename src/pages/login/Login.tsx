import { Box, Button, Grid, Typography } from "@mui/material";
import InputCommon from "src/components/input/InputCommon";
import { StyleLogin } from "./styleLogin";

export default function Login() {
  return (
    <StyleLogin>
      <Box className="form-login">
        <Grid container spacing={3}>
          <Grid item xl={12}>
            <Typography variant="h4" textAlign="center" className="login_title">Dashboard</Typography>
          </Grid>
          <Grid item xl={12}>
            <InputCommon
              label="Tên đăng nhập"
            />
          </Grid>
          <Grid item xl={12}>
            <InputCommon
              label="Mật khẩu"
            />
          </Grid>
          <Grid item xl={12}>
            <Button fullWidth variant="outlined">Đăng nhập</Button>
          </Grid>
        </Grid>
      </Box>
    </StyleLogin>
  );
}
