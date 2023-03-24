import { toast } from "react-toastify";

interface PropsToast {
  messages: string
  type?: "success" | "info" | "warning" | "error"
}

export default function Alert(props: PropsToast) {
  const { messages, type = "success" } = props;
  return toast[type](messages);
}
