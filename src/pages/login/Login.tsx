import { useState, useEffect } from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import InputCommon from "src/components/input/InputCommon";
import { useAppDispatch } from "src/store/reduxHook";
import { StyleLogin } from "./styleLogin";
import { type UserModel } from "src/model/pages/LoginModel";
import { loginEim } from "src/store/author/author";
import Checkbox from "@mui/material/Checkbox";
import { getLocalStorage, removeLocalStorage, setLocalStorage } from "src/helpper/localStorage";
import { FormLogin } from "src/enum/AuthorEnum";

export default function Login() {
  const dispatch = useAppDispatch();
  const [formLogin, setFormLogin] = useState<UserModel>({
    username: getLocalStorage(FormLogin.USERNAME) ?? "",
    password: getLocalStorage(FormLogin.PASSWORD) ?? ""
  });
  
  const getRememberMe = () => {
    const remember = getLocalStorage(FormLogin.REMEMBER);
    if (remember && JSON.parse(remember)) {
      return true;
    }
    return false;
  };

  const [rememberMe, setRememberMe] = useState(getRememberMe());

  const onFinish = () => {
    dispatch(loginEim(formLogin));
  };

  const saveFormLogin = () => {
    setLocalStorage({ key: FormLogin.USERNAME, data: formLogin.username });
    setLocalStorage({ key: FormLogin.PASSWORD, data: formLogin.password });
  };

  const removeFormLogin = () => {
    removeLocalStorage(FormLogin.USERNAME);
    removeLocalStorage(FormLogin.PASSWORD);
  };

  useEffect(() => {
    rememberMe ? saveFormLogin() : removeFormLogin();
  }, [rememberMe]);

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
              <Box>
                <Checkbox
                  checked={rememberMe}
                  style={{ paddingLeft: 0 }}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setRememberMe(checked);
                    setLocalStorage({ key: FormLogin.REMEMBER, data: checked });
                  }} />
                <Box component="span">Nhớ mật khẩu</Box>
              </Box>
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
