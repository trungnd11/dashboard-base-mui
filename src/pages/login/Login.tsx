import { useState } from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import InputCommon from "src/components/input/InputCommon";
import { type UserModel } from "src/model/Usermodel";
import { login } from "src/store/author/author";
import { useAppDispatch } from "src/store/reduxHook";
import { StyleLogin } from "./styleLogin";

export default function Login() {
  const dispatch = useAppDispatch();
  const [formLogin, setFormLogin] = useState<UserModel>({
    username: "",
    password: ""
  });

  const onFinish = () => {
    dispatch(login(formLogin));
  };

  return (
    <StyleLogin>
      <Paper>
        <Box className="form-login">
          <Grid container spacing={3}>
            <Grid item lg={12}>
              <Typography variant="h4" color={green[800]} textAlign="center" className="login_title">
                Đăng nhập
              </Typography>
            </Grid>
            <Grid item lg={12}>
              <InputCommon
                label="Tên đăng nhập"
                value={formLogin?.username}
                focused
                variant="standard"
                onChange={(value) =>
                  setFormLogin((pre) => ({ ...pre, username: value }))
                }
              />
            </Grid>
            <Grid item lg={12}>
              <InputCommon
                label="Mật khẩu"
                type="password"
                focused
                variant="standard"
                value={formLogin?.password}
                onChange={(value) =>
                  setFormLogin((pre) => ({ ...pre, password: value }))
                }
              />
            </Grid>
            <Grid item lg={12}>
              <Button fullWidth variant="outlined" onClick={onFinish}>
                Đăng nhập
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </StyleLogin>
  );
}
