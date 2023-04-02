/* eslint-disable @typescript-eslint/no-misused-promises */
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import InputCommon from "src/components/input/InputCommon";
import { StyleLogin } from "./styleLogin";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { type UserModel } from "src/model/Usermodel";
import { useAppDispatch } from "src/store/reduxHook";
import { login } from "src/store/author/author";

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

export default function Login() {
  const { control, handleSubmit, formState: { errors } } = useForm<UserModel>({
    resolver: yupResolver(schema)
  });
  const dispatch = useAppDispatch();

  const onSubmit = (data: UserModel) => {
    dispatch(login(data));
  };

  return (
    <StyleLogin>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Paper>
          <Box className="form-login">
            <Grid container spacing={3}>
              <Grid item lg={12}>
                <Typography variant="h4" color={lightBlue[900]} textAlign="center" className="login_title">
                  Đăng nhập
                </Typography>
              </Grid>
              <Grid item lg={12}>
                <Controller
                  name="username"
                  control={control}
                  render={({ field }) => (
                    <InputCommon
                      label="Tên đăng nhập"
                      variant="standard"
                      error={!!errors.username}
                      helperText={errors.username?.message}
                      { ...field }
                    />
                  )}
                />
              </Grid>
              <Grid item lg={12}>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <InputCommon
                      label="Mật khẩu"
                      type="password"
                      variant="standard"
                      error={!!errors.password}
                      helperText={errors.password?.message}
                      { ...field }
                    />
                  )}
                />
              </Grid>
              <Grid item lg={12}>
                <Button fullWidth variant="outlined" type="submit">
                  Đăng nhập
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </form>
    </StyleLogin>
  );
}
